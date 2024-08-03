import Link from 'next/link'
import React from 'react'

export const Hero = () => {
    return (
        <div className='absolute w-screen top-0'>
            <div className="bg-hero flex ">
                <div className="container mx-auto">
                    <div className=" flex flex-col items-center justify-center h-screen">
                        <div className="mb-8 text-3xl md:text-6xl text-white tracking-wide">
                            <h1 className=" font-bold text-left leading:[2.25rem] md:leading-[5.25rem]">
                                Exploring React<br></br> Awesome Component
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
