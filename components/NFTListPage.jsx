import Card from './Card'
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const NFTListPage = ({ profile, signer, nfts, setNftTokenId }) => {
  

  const select = async (argsObj) => {
    setNftTokenId(argsObj.tokenId)
  }

  const mint = async (argsObj) => {
    setNftTokenId(argsObj.nftTokenId)
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
