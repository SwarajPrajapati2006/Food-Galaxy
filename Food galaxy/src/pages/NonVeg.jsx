import React, { useEffect, useState, useTransition } from 'react'
import { getNonVegData } from '../Api/NonvegApi'
import { useOutletContext } from 'react-router-dom'

const NonVeg = () => {
  const [isPending, startTransition] = useTransition()
  const [meals, setmeals] = useState([])
  const { setCartCount } = useOutletContext()
  const [addedItems, setAddedItems] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const res = await getNonVegData()
      setmeals(res.meals)
    }

    startTransition(() => {
      fetchData()
    })
  }, [])

  const handleAddToCart = (id) => {
    if (!addedItems[id]) {
      setCartCount(prev => prev + 1)
      setAddedItems(prev => ({ ...prev, [id]: true }))
    }
  }

  return (
    <div className='min-h-screen bg-gray-100 py-10 '>

      <h1 className='text-4xl font-extrabold text-center mb-12 mt-6.5 text-red-700 tracking-tight'>
        🍗 Non-Veg Dishes
      </h1>

      <div className='flex flex-wrap justify-center gap-8 px-6'>
        {meals.map((val) => {
          return (
            <div
              key={val.idMeal}
              className='w-72 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300'
            >

              {/* Image */}
              <div className="relative">
                <img
                  src={val.strMealThumb}
                  alt={val.strMeal}
                  className='w-full h-52 object-cover'
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-red-600 shadow">
                  Non-Veg
                </div>
              </div>

              {/* Content */}
              <div className='p-6 text-center'>
                <h2 className='text-xl font-bold text-gray-800 mb-4 line-clamp-1'>
                  {val.strMeal}
                </h2>

                {!addedItems[val.idMeal] ? (
                  <button
                    onClick={() => handleAddToCart(val.idMeal)}
                    className='w-full mt-2 px-4 py-2.5 bg-linear-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-red-700 transition-all cursor-pointer shadow-md hover:shadow-lg'
                  >
                    Add to Cart
                  </button>
                ) : (
                  <button
                    disabled
                    className='w-full mt-2 px-4 py-2.5 bg-green-500 text-white font-semibold rounded-xl flex items-center justify-center gap-2 cursor-not-allowed shadow-md opacity-90'
                  >
                    ✅ Added to Cart
                  </button>
                )}
              </div>

            </div>
          )
        })}
      </div>

    </div>
  )
}

export default NonVeg