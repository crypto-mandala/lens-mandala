import LitJsSdk from 'lit-js-sdk'

const client = new LitJsSdk.LitNodeClient()
const chain = 'mumbai'
const standardContractType = 'ERC721'

const hexStringToArrayBuffer = (hexString) => {
  hexString = hexString.replace(/^0x/, '');
  if (hexString.length % 2 != 0) {
    // eslint-disable-next-line no-console
    console.log('WARNING: expecting an even number of characters in the hexString');
  }
  const bad = hexString.match(/[G-Z\s]/i);
  if (bad) {
    // eslint-disable-next-line no-console
    console.log('WARNING: found non-hex characters', bad);
  }
  const pairs = hexString.match(/[\dA-F]{2}/gi);
  const integers = pairs.map(function (s) {
    return parseInt(s, 16);
  });
  const array = new Uint8Array(integers);
  return array.buffer;
}

class Lit {
  private litNodeClient

  async connect() {
    await client.connect()
    this.litNodeClient = client
  }

  async encrypt(message: string, tokenAddress: string) {
    if (!this.litNodeClient) {
      await this.connect()
    }

    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain })
    const { encryptedString, symmetricKey } = await LitJsSdk.encryptString(message)
    const accessControlConditions = [
      {
        contractAddress: tokenAddress,
        standardContractType,
        chain,
        method: 'balanceOf',
        parameters: [
          ':userAddress'
        ],
        returnValueTest: {
          comparator: '>',
          value: '0'
        }
      }
    ]
    const encryptedSymmetricKey = await this.litNodeClient.saveEncryptionKey({
      accessControlConditions,
      symmetricKey,
      authSig,
      chain,
    })
    // eslint-disable-next-line no-console
    console.log({
      // encryptedString: Buffer.from(await encryptedString.arrayBuffer()).toString('hex'),
      encryptedString: await encryptedString.arrayBuffer(),
      encryptedSymmetricKey: LitJsSdk.uint8arrayToString(encryptedSymmetricKey, "base16")
    })
    return {
      encryptedString: Buffer.from(await encryptedString.arrayBuffer()).toString('hex'),
      // encryptedString: await encryptedString.arrayBuffer(),
      encryptedSymmetricKey: LitJsSdk.uint8arrayToString(encryptedSymmetricKey, "base16")
    }
  }

  async decrypt(encryptedString: string, encryptedSymmetricKey: string, tokenAddress: string) {
    if (!this.litNodeClient) {
      await this.connect()
    }

    const accessControlConditions = [
      {
        contractAddress: tokenAddress,
        standardContractType,
        chain,
        method: 'balanceOf',
        parameters: [
          ':userAddress'
        ],
        returnValueTest: {
          comparator: '>',
          value: '0'
        }
      }
    ]
    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain })
    const symmetricKey = await this.litNodeClient.getEncryptionKey({
      accessControlConditions,
      // Note, below we convert the encryptedSymmetricKey from a UInt8Array to a hex string.  This is because we obtained the encryptedSymmetricKey from "saveEncryptionKey" which returns a UInt8Array.  But the getEncryptionKey method expects a hex string.
      toDecrypt: encryptedSymmetricKey,
      chain,
      authSig
    })
    const decryptedString = await LitJsSdk.decryptString(
      new Blob([hexStringToArrayBuffer(encryptedString)]), // hexStringToArrayBuffer(encryptedString),
      symmetricKey
    );
    // eslint-disable-next-line no-console
    console.log({
      decryptedString
    })
    return { decryptedString }
  }
}

export default new Lit()
