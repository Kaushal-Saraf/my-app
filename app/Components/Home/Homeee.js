import Client from "./Client"
import Community from "./Community/Community"
import Herosection from "./Herosection/Herosection"

const Homeee = () => {
  return (
    <div className='bg-white'>
      <Herosection/>
      <Client/>
      <Community/>
    </div>
  )
}

export default Homeee
