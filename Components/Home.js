import Community from './Community'
import Herosection from './Herosection'
import Client from './Client'

const Home = () => {
  return (
    <div className='bg-[#F5F7FA]'>
      <Herosection/>
      <Client/>
      <Community/>
    </div>
  )
}

export default Home
