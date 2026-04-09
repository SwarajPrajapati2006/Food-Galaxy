import React from 'react'

const About = () => {
  return (
    <div className="font-body text-gray-800" style={{ fontFamily: 'Garamond, serif' }}>

      {/* 🔥 Hero Section */}
      <div className="relative h-[50vh] w-full">
        <img 
          src="https://res.cloudinary.com/dmkspibfj/image/upload/v1775636727/pexels-shameel-mukkath-3421394-5639482_sf3xp8.jpg" 
          alt="about"  
          className="h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-heading tracking-wide">
            About Us
          </h1>
        </div>
      </div>

      {/* 📖 Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">

        <h2 className="text-3xl font-heading mb-6">
          A New Way of Living
        </h2>

        <p className="text-lg leading-relaxed text-gray-600 mb-6">
          The traditional meat butcher — and his time-worn butcher shop — are becoming relics of the past. 
          But his rebellious daughter is paving a new way… and she’s really excited about vegetables.
        </p>

        <p className="text-lg leading-relaxed text-gray-600">
          At The Butcher’s Daughter, we aim to improve wellness by improving lifestyle — 
          but more importantly, have fun doing it!
        </p>

      </div>

      {/* 🌿 Extra Section (optional but looks pro) */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">

          <div>
            <h3 className="text-xl font-heading mb-2">Fresh</h3>
            <p className="text-gray-600">We use only fresh, locally sourced ingredients.</p>
          </div>

          <div>
            <h3 className="text-xl font-heading mb-2">Healthy</h3>
            <p className="text-gray-600">Our meals are designed to boost your lifestyle.</p>
          </div>

          <div>
            <h3 className="text-xl font-heading mb-2">Fun</h3>
            <p className="text-gray-600">Good food should always be enjoyable and exciting.</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default About