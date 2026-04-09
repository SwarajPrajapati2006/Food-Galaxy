import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dmkspibfj/image/upload/v1775667634/pexels-magda-ehlers-pexels-3822749_lsinjl.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">

        {/* Heading */}
        <h1 className="text-white text-5xl md:text-6xl font-bold italic tracking-wide mb-6 drop-shadow-lg">
          Food Galaxy 🍽️
        </h1>

        {/* Subheading */}
        <p className="text-gray-200 text-lg md:text-xl mb-12 max-w-xl">
          Discover delicious meals crafted with passion and flavor ✨
        </p>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-10">

          {/* Card */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 
          rounded-2xl p-5 text-center shadow-lg hover:scale-105 
          hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]
          transition-all duration-300 cursor-pointer w-44">
            <img
              src="https://res.cloudinary.com/dmkspibfj/image/upload/v1775668420/pexels-nano-erdozain-120534369-29450673_nn7cqi.jpg"
              alt=""
              className="h-24 w-24 mx-auto rounded-full object-cover border-2 border-white"
            />
            <p className="text-amber-200 font-semibold mt-3">
              Grilled Beef <br /> & Potatoes
            </p>
          </div>

          {/* Card */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 
          rounded-2xl p-5 text-center shadow-lg hover:scale-105 
          hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]
          transition-all duration-300 cursor-pointer w-44">
            <img
              src="https://res.cloudinary.com/dmkspibfj/image/upload/v1775668425/pexels-mo3ath-photos-110226063-29221429_bmle1z.jpg"
              alt=""
              className="h-24 w-24 mx-auto rounded-full object-cover border-2 border-white"
            />
            <p className="text-amber-200 font-semibold mt-3">
              Hot Steak
            </p>
          </div>

          {/* Card */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 
          rounded-2xl p-5 text-center shadow-lg hover:scale-105 
          hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]
          transition-all duration-300 cursor-pointer w-44">
            <img
              src="https://res.cloudinary.com/dmkspibfj/image/upload/v1775668446/pexels-iara-melo-558346607-30635715_hjtekp.jpg"
              alt=""
              className="h-24 w-24 mx-auto rounded-full object-cover border-2 border-white"
            />
            <p className="text-amber-200 font-semibold mt-3">
              Chicken With Rice
            </p>
          </div>

        </div>

        {/* Button */}
        <NavLink to="/veg">
          <button className="mt-12 px-10 py-4 rounded-full font-semibold text-white 
          bg-white/10 backdrop-blur-md border border-white/30

          hover:bg-amber-500 hover:scale-110 hover:shadow-xl
          active:scale-95

          transition-all duration-300 ease-in-out">
            Get Started 🚀
          </button>
        </NavLink>

      </div>
    </div>
  )
}

export default Home