import Homesection from './homesection'
import Leftside from './Leftside'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MainPage = ({ profile, signer }) => {
  return (
    // <div style={{boxShadow: '5px 10px 20px rgba(0,0,0,0.25)'}}>
    <div
      style={{
        border: 'solid',
        borderColor: '#E2E8F0',
        borderBottomStyle: 'none',
      }}
    >
      <div className="grid grid-flow-col">
        <div className="col-span-1">
          <Leftside />
        </div>
        <div className="col-span-6">
          <Homesection profile={profile} signer={signer} />
        </div>
      </div>
    </div>
  )
}

export default MainPage
