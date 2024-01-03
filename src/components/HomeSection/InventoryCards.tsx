import Image from 'next/image'
import React from 'react'
import { TbArmchair } from "react-icons/tb";
import { TbEngine } from "react-icons/tb";
import { PiGasPump } from "react-icons/pi";
import { TbManualGearbox } from "react-icons/tb";
import { IoPersonOutline } from "react-icons/io5";
import { IoSpeedometerOutline } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";


export default function InventoryCards() {
    return (
        <>
            <div className="w-full bg-red-5 h-auto rounded-2xl border border-slate-300 shadow-lg">
                <div className='w-full h-[200px] flex justify-center items-center'>
                    <Image src={"/Cars/crown.png"} width={300} height={200} className='w-[70%]' alt='Cars' />
                </div>
                <div className='w-full  px-8'>
                    <h2 className='text-xl font-semibold'>
                        2024 Toyota Crown
                    </h2>
                    <div className='my-4'>
                        Star
                    </div>


                    <div className='sm:block hidden w-full border-b-2 border-slate-400 border-dashed pb-10'>
                        <div className='w-full justify-between flex'>
                            <div className='flex items-center'>
                                <div className='mr-2 text-xl text-b-200'>
                                    <TbArmchair />
                                </div>
                                <div className='font-semibold'>
                                    4 Seat
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className='mr-2 text-2xl text-b-200'>
                                    <TbEngine />
                                </div>
                                <div className='font-semibold'>
                                    VVTI
                                </div>
                            </div>
                            <div className='flex items-center font-semibold'>
                                <div className='mr-2 text-2xl text-b-200'>
                                    <PiGasPump />
                                </div>
                                <div className='font-semibold'>
                                    CNG
                                </div>
                            </div>
                        </div>



                        <div className='w-full justify-between flex mt-5'>
                            <div className='flex items-center'>
                                <div className='mr-2 text-2xl text-b-200'>
                                    <TbManualGearbox />
                                </div>
                                <div className='font-semibold'>
                                    Auto
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className='mr-2 text-xl text-b-200'>
                                    <IoPersonOutline />
                                </div>
                                <div className='font-semibold'>
                                    4 Person
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className='mr-2 text-xl text-b-200'>
                                    <IoSpeedometerOutline />
                                </div>
                                <div className='font-semibold'>
                                    120 km/h
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='sm:hidden w-full border-b-2 border-slate-400 border-dashed pb-10'>
                        <div className='w-full justify-between flex'>
                            <div className='flex items-center'>
                                <div className='mr-2 text-xl text-b-200'>
                                    <TbArmchair />
                                </div>
                                <div className='font-semibold'>
                                    4 Seat
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className='mr-2 text-2xl text-b-200'>
                                    <TbEngine />
                                </div>
                                <div className='font-semibold'>
                                    VVTI
                                </div>
                            </div>
                        </div>








                        <div className='w-full justify-between flex mt-5'>
                            <div className='flex items-center'>
                                <div className='mr-2 text-2xl text-b-200'>
                                    <TbManualGearbox />
                                </div>
                                <div className='font-semibold'>
                                    Auto
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className='mr-2 text-xl text-b-200'>
                                    <IoPersonOutline />
                                </div>
                                <div className='font-semibold'>
                                    4 Person
                                </div>
                            </div>

                        </div>

                        <div className='w-full justify-between flex mt-5'>
                            <div className='flex items-center font-semibold'>
                                <div className='mr-2 text-2xl text-b-200'>
                                    <PiGasPump />
                                </div>
                                <div className='font-semibold'>
                                    CNG
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className='mr-2 text-xl text-b-200'>
                                    <IoSpeedometerOutline />
                                </div>
                                <div className='font-semibold'>
                                    120 km/h
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='w-full flex justify-between items-center py-5'>
                        <div className='font-semibold'>
                            <span className='text-3xl font-semibold text-b-200'>
                                $ 120
                            </span>
                            / Days
                        </div>
                        <div className=''>
                            <button className='bg-b-200 px-4 py-2 rounded-full text-white text-base font-semibold'>
                                Rent Car
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
