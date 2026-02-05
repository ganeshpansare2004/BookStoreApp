import React from 'react'

function Cards({ item }) {
  return (
    <div className="mt-4 my-3 p-3 h-full">
      <div className="card bg-base-100 w-full shadow-sm h-full flex flex-col
border border-white dark:border-base-300 hover:scale-105 duration-300">


        <figure>
          <img src={item.image} alt={item.name} />
        </figure>

        <div className="card-body flex flex-col justify-between">

          <div>
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">
                {item.category}
              </div>
            </h2>

            <p className="line-clamp-2">
              {item.title}
            </p>
          </div>

          <div className="card-actions justify-between items-center mt-4">
            <div className="badge badge-outline">
              ₹{item.price}
            </div>

            <div className="cursor-pointer px-3 py-1 rounded-full border-2
              hover:bg-pink-500 hover:text-white transition duration-200">
              Buy Now
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cards
