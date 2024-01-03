'use client'
import React from 'react'
import Image from 'next/image'

export default function Herosection() {
  return (
    <>
      <div className='w-full min-h-[70vh] bg-b-100 pb-20 relative'>
        <div className='w-full h-full container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-0'>
          <div className='md:w-1/2 '>
            <h1 className='md:text-5xl text-3xl font-semibold pt-10 md:leading-relaxed'>
              <span className='text-b-200'>Find</span> , <span className='text-b-200'>Book</span> Or <span className='text-b-200'>Rent</span> A Car Easyly Just Follow <span className='text-b-200'> - Some Steps </span>
            </h1>
            <p className='my-10 text-slate-500'>
              Discover the ease of securing your perfect ride with Find, Book, or Rent A Car Easily: Just Follow Some Steps. Effortlessly search, compare, and select from a diverse range of vehicles. Customize your experience, book with a few clicks, and enjoy the simplicity of hassle-free car rentals. Elevate your journey with us!
            </p>
            <div className='w-auto'>
              <button className='border border-b-200 bg-b-200 px-6 py-2 rounded-full text-white hover:bg-white duration-200 hover:text-b-200 cursor-pointer' onClick={()=>{alert("hei man")}}>
                Discover Car
              </button>
            </div>
          </div>
          <div className='md:w-1/2 mt-20 md:h-[500px] flex md:justify-end justify-center items-center'>
            <Image
              src={"/Gallary/Hero_Section.png"}
              width={500}
              height={200}
              className='lg:w-[70%] md:w-[80%] w-[90%] '
              alt="Picture of the author" />
          </div>
        </div>
        <div className='w-full'>
          <Image src={"/Gallary/Hero_Section_Down.png"} width={1920}
            className='w-full h-auto absolute xl:bottom-[-60px] hidden xl:block'
            height={20} alt="Hero Section Design" />
          <div className='w-full h-10 bg-b-200 absolute bottom-0 xl:hidden'>
          </div>
        </div>
      </div>


    </>
  )
}

