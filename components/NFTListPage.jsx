import { Contract } from 'ethers'
import Card from './Card'

const LensMandalaNFT = require('./abis/LensMandalaNFT.json')
const ERC20Token = require('./abis/ERC20Token.json')

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const NFTListPage = ({ signer, nfts, setNftTokenId }) => {
  

  const select = async (argsObj) => {
    setNftTokenId(argsObj.tokenId)
  }

  const mint = async (_argsObj) => {
    const nftContractAddress = '0x7d2DD3b11a6fB4D77c5134F0424eF40FcCD549A8' // on Mumbai
    const nftContract = new Contract(nftContractAddress, LensMandalaNFT.abi, signer);
    
    const buyTokenAddress = await nftContract.buyTokenAddress()
    const buyPrice = await nftContract.buyPrice()

    const buyTokenContract = new Contract(buyTokenAddress, ERC20Token.abi, signer);
    const owner = await signer.getAddress()
    const allowance = await buyTokenContract.allowance(owner, nftContractAddress)
    // TODO: Check logic (something bad)
    if (allowance.lt(buyPrice)) {
      const tx = await buyTokenContract.approve(nftContractAddress, buyPrice)
      await tx.wait()
    }

    const tx = await nftContract.buy(owner)
    const txReceipt = await tx.wait()
    const nftTransferEvent = txReceipt.events.find(e =>
      e.topics[0] === '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef' &&
      e.topics[1] === '0x0000000000000000000000000000000000000000000000000000000000000000'
    )
    const tokenId = parseInt(nftTransferEvent.topics[3], 16)
    alert('Token ID: ' + String(tokenId))

    setNftTokenId(String(tokenId))
  }

  return (
    <section className="container">
      <div className="layout">
        {nfts.map((element, index) => (
          <Card
            key={index}
            tokenId={element.tokenId}
            imageUrl="https://lh3.googleusercontent.com/5uyR-zPeOjhvgwbuAupHsalPHZeiN-Td-eQ3154iJEIp4nWXLj_xE86t65OGLt5qgGc-f8r_z7c8aKCY3Lh7m7CJiRAddnSte2oQ5uY=w600"
            buttonLabel="Select"
            action={select}
          />
        ))}
        <Card
          key={10000}
          tokenId={'???'}
          imageUrl={`/newNftImage.png`}
          buttonLabel="　Mint with BCT (Toucan Protocol)　"
          action={mint}
        />
      </div>
    </section>
  )
}

export default NFTListPage
