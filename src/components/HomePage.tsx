import SearchIcon from "../../public/starter-code/assets/icon-search.svg"
import Slider from "./Slider"
import Recomended from './Recomended'
import { MyContext } from '../App'
import { useContext } from 'react'
import Header from "./Header"


function HomePage() {
  const { setSearch } = useContext<any>(MyContext)
  
  return (
    <>
    <Header />
    <div className='p-4 lg:ml-[9rem]'>
      <div className='flex gap-4 mt-6'>
        <img src={SearchIcon} alt="" className='w-6 h-6'/>
        <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search for movies or TV series' className='outline-none bg-transparent text-white w-[80%]'/>
      </div>
    </div>
    <Slider />
    <Recomended />
    </>
  )
}

export default HomePage