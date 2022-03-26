import { v4 as uuidv4 } from 'uuid'
import * as fs from 'fs'
import lighthouse from 'lighthouse-web3'
import { ethers } from 'ethers'
import axios from 'axios'

class Lighthouse {
    async upload(contentStr: string) {
        const filename = uuidv4()
        const path = `tmp/${filename}.json`
        fs.writeFileSync(path, contentStr, 'utf8')
        const key = await lighthouse.getKey(process.env.LIGHTHOUSE_PRIV_KEY_ENCRYPTED, process.env.LIGHTHOUSE_PASSWORD)
        const provider = new ethers.providers.JsonRpcProvider(process.env.LIGHTHOUSE_NETWORK_RPC)
        const signer = new ethers.Wallet(key.privateKey, provider)
        const messageResponse = await axios.get(
            `https://api.lighthouse.storage/api/lighthouse/get_message?publicKey=${key.publicKey}`
        )
        const message = messageResponse.data
        const signedMessage = await signer.signMessage(message)
        const deploy = await lighthouse.deploy(path, signer, false, signedMessage, key.publicKey, process.env.LIGHTHOUSE_NETWORK)
        fs.unlinkSync(path)
        const cid = deploy.Hash
        // eslint-disable-next-line no-console
        console.log({ cid })
        return cid
    }
}

export default new Lighthouse()
