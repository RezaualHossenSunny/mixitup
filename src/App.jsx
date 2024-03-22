import { useState } from "react"
import './App.css'
import react from './assets/react.png'
import img1 from './assets/mongo.jpg'
import img2 from './assets/next.png'
import img3 from './assets/express.png'
import img4 from './assets/nodejs.png'
import img5 from './assets/git.png'
import img6 from './assets/figma.png'
import img7 from './assets/js.png'
import img8 from './assets/redux.png'
import img9 from './assets/ant.jpg'

function App() {
  const [click, setClick] = useState(1)

  function update(id) {
    setClick(id)
  }
  return (
    <>
      <div className="max-w-container mx-auto">

        <div className="flex gap-16 py-7">

          <p onClick={() => update(1)} className="w-[150px] text-center border-2 border-[#050038] py-4 px-4 bg-[#050038] tex-1xl font-serif font-bold text-white cursor-pointer rounded-2xl hover:bg-violet-600 ">Web</p>

          <p onClick={() => update(2)} className="w-[150px] text-center border-2 border-[#050038] py-4 px-4 bg-[#050038] tex-1xl font-serif font-bold text-white cursor-pointer rounded-2xl hover:bg-violet-600 ">Tools</p>

          <p onClick={() => update(3)} className="w-[150px] text-center border-2 border-[#050038] py-4 px-4 bg-[#050038] tex-1xl font-serif font-bold text-white cursor-pointer rounded-2xl hover:bg-violet-600 ">Programming
          </p>
          <p onClick={() => update(4)} className="w-[150px] text-center border-2 border-[#050038] hover:bg-violet-600  py-4 px-4 bg-[#050038] tex-1xl font-serif font-bold text-white cursor-pointer rounded-2xl">Others
          </p>




        </div>

        <div className="mt-16 ">
          <div className={click === 1 ? 'show' : "setshow"}>
            <div className="grid grid-cols-6 gap-12">
              <img src={react} />
              <img src={img1} />
              <img src={img2} />
              <img src={img3} />
              <img src={img4} />


            </div>
          </div>


          <div className={click === 2 ? 'show' : "setshow"}>
            <div className="grid grid-cols-6 gap-12">

              <img src={img5} />
              <img src={img6} />



            </div>
          </div>

          <div className={click === 3 ? 'show' : "setshow"}>
            <div className="grid grid-cols-6 gap-12">

              <img src={img7} />




            </div>
          </div>

          <div className={click === 4 ? 'show' : "setshow"}>
            <div className="grid grid-cols-6 gap-12">

              <img src={img8} />
              <img src={img9} />




            </div>
          </div>



        </div>



      </div>


    </>
  )
}

export default App
