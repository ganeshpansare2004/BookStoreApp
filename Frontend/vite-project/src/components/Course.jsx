import React, { useEffect , useState} from 'react'
import Cards from '../components/Cards'
import{Link} from"react-router-dom"
import axios from 'axios'

function Course() {
  const [book, setBook]= useState([])
  useEffect(()=>{
const getBook = async()=>{
  try{
   const res = await axios.get("http://localhost:4001/book")
   console.log(res.data)
   setBook(res.data)

  }catch(error){
    console.log(error)

  }
}
getBook();
  },[])
  return (
   <>
   <div className='max-w-screen-2xl
container mx-auto md:px-20 px-4 bg-base-100 text-base-content'>
  <div className='mt-28 items-center justify-center text-center' >
    <h1 className='text-2xl md:text-4xl'>
      We're delighted to have you {""}<span className='text-pink-500'>here ! :)</span> 
    </h1>
    <p className='mt-12'>Discover a world where every book opens a new door to new ideas, new worlds, and new perspectives.
From timeless classics to modern favorites, dive into carefully chosen stories that truly stay with you.</p>
<Link to="/">
<button className='mt-6 bg-pink-500 text-white px-4 py2 rounded-md hover:bg-pink-700 duration-300 '>Back</button></Link>
  </div>
  <div className='mt-12 grid  grid-cols-1 md:grid-cols-4'>
{
 book.map((item)=>(
    <Cards key={item.id} item={item}/>
  ))
}
  </div>
   </div>
   </>
  )
}

export default Course