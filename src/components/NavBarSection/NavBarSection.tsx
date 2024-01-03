import React from 'react'
import { IoCarSportOutline } from "react-icons/io5";



export default function NavBarSection() {

    return (
        <>
            <nav className='w-full h-[70px] sticky border shadow-xl px-2 md:px-0'>
                <div className='w-full h-full container mx-auto flex justify-between'>
                    <div className='h-full flex items-center'>
                        <div className='text-3xl text-b-200 mr-3'>
                            <IoCarSportOutline />
                        </div>
                        <div className='text-xl font-semibold text-b-200'>
                            Car Cab
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='hidden md:flex border border-b-200 px-6 py-2 rounded-full hover:bg-b-200 hover:text-white duration-200 cursor-pointer'>
                            Sign Up
                        </div>
                        <div className='border border-b-200 bg-b-200 px-6 py-2 rounded-full text-white hover:bg-white duration-200 hover:text-b-200 cursor-pointer ml-4'>
                            Book Car
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}
