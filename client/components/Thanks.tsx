import React from 'react'
import { Link } from 'react-router-dom'
const Thanks = () => {
  return (
    <>
      <div className="h-full flex justify-center">
        <div className="flex flex-col justify-center items-center border-8 border-browny w-[800px] xl:w-[1200px] h-[600px] mt-[200px] mb-[200px]">
          <h1 className="mb-10">Thanks for your interest.</h1>
          <p>Will get back to you as soon as possible.</p>
          <button className="border-4 p-4 border-browny cursor-pointer hover:scale-110 hover:bg-browny hover:text-d_color mt-[100px]">
            <Link to="/">Return to Home</Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default Thanks
