import { useState } from "react"
import './App.css'

function App() {
const [click,setClick]=useState(1) 

function update(id){
setClick(id)
}
  return (
    <>
      <div className="max-w-container mx-auto">

      <div className="flex gap-16 py-7">

      <p onClick={()=> update(1)} className="border-2 border-[#7CFC00] py-4 px-4 bg-[#7CFC00] tex-1xl font-serif font-bold text-[#2F4F4F] cursor-pointer rounded-2xl">language</p>
      <p onClick={()=> update(2)} className="border-2 border-[#7CFC00] py-4 px-4 bg-[#7CFC00] tex-1xl font-serif font-bold text-[#2F4F4F] cursor-pointer rounded-2xl">language1</p>
      
      
      </div>

    

      </div>

      <div className="mt-1">
        <div className={click === 1? 'show':"setshow" }>sss</div>
        <div className={click === 2? 'show':"setshow" }>djddjdj</div>
      </div>
    </>
  )
}

export default App
