import React from "react";
import Bannnerimg from "../assets/bannerimg.png";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-6 bg-base-100 text-base-content space-y-6">
        
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-6 md:mt-12">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-500">new every day!!!</span>
            </h1>

            <p className="text-xl">
              Reading books opens the door to knowledge, imagination, and new perspectives.
              Just a few pages a day can shape the way we think and understand the world.
            </p>

            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
          </div>

          <button className="btn mt-4 btn-secondary ">Secondary</button>
        </div>

        <div className="order-1 w-full md:w-1/2 flex justify-center items-center mt-10">
          <img src={Bannnerimg} className="w-full max-w-md h-auto " alt="" />
        </div>

      </div>
    </>
  );
}

export default Banner;
