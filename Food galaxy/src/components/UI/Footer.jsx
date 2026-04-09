import React from "react";

const Footer = () => {
  return (
    <div className="relative mt-auto">

      {/* 🌊 SINGLE WAVE - moved up to cover the harsh white gap */}
      <div className="relative z-20 pointer-events-none overflow-hidden leading-none -mt-[140px] -mb-1">
        <svg
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          className="w-full h-[140px]"
        >
          <path
            fill="#1f2937"
            d="M0,96L80,106.7C160,117,320,139,480,133.3C640,128,800,96,960,90.7C1120,85,1280,107,1360,117.3L1440,128V160H0Z"
          />
        </svg>
      </div>

      {/* 🔥 FOOTER */}
      <footer className="bg-gray-800 text-gray-300">
        <div className="flex justify-between w-3/4 m-auto p-8 flex-wrap gap-8">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img
                src="https://res.cloudinary.com/dmkspibfj/image/upload/v1775466408/pexels-rohan-dalal-62574732-9101561_plf5ks.jpg"
                className="h-12 w-12 rounded-full border-2 border-white object-cover"
                alt="logo"
              />
              <h1 className="text-xl font-bold text-white">
                Food Galaxy
              </h1>
            </div>
          </div>

          {/* Solutions + Resources */}
          <div>
            <div className="text-xl font-semibold text-orange-400 mb-2">
              Solutions
            </div>
            <div className="hover:text-orange-300 cursor-pointer">Personal</div>
            <div className="hover:text-orange-300 cursor-pointer">Benefits</div>
            <div className="hover:text-orange-300 cursor-pointer">Business</div>

            <div className="mt-5">
              <div className="text-xl font-semibold text-orange-400 mb-2">
                Resources
              </div>
              <div className="hover:text-orange-300 cursor-pointer">News</div>
              <div className="hover:text-orange-300 cursor-pointer">Claims</div>
              <div className="hover:text-orange-300 cursor-pointer">Videos</div>
              <div className="hover:text-orange-300 cursor-pointer">FAQs</div>
              <div className="hover:text-orange-300 cursor-pointer">
                Community
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-xl font-semibold text-orange-400 mb-2">
              Company
            </div>
            <div className="hover:text-orange-300 cursor-pointer">
              Who we are
            </div>
            <div className="hover:text-orange-300 cursor-pointer">
              Careers
            </div>
            <div className="hover:text-orange-300 cursor-pointer">Press</div>
            <div className="hover:text-orange-300 cursor-pointer">
              Work with us
            </div>
          </div>

          {/* Partner Section */}
          <div>
            <div className="font-bold text-white mb-2">
              Partner with us 🍔
            </div>
            <div className="text-sm text-gray-400 mb-3">
              Grow your food business with Food Galaxy
            </div>
            <button className="px-4 py-2 border border-orange-400 text-orange-400 rounded-full hover:bg-orange-500 hover:text-white transition duration-200">
              Learn More
            </button>
          </div>

        </div>

        {/* Bottom */}
        <div className="text-center text-gray-500 text-sm pb-4 border-t border-gray-700 pt-4">
          © 2026 Food Galaxy. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;