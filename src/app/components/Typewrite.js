"use client"

import React from 'react'
import dynamic from 'next/dynamic'

const TypeWriterEffect = dynamic(() => import('react-typewriter-effect'), { ssr: false });

const Typewrite = () => {
    return (
        <div>
            <div className="absolute w-screen top-0 flex flex-col h-screen items-center justify-center space-y-6">
                <h2 className='text-4xl text-slate-800 text-center mb-8'>Typewriter - Typewriting effect for text elements</h2>
                <h1 className='text-6xl text-slate-800'>Hello I am Akash
                    <span className='ml-10 text-orange-400'>
                        <TypeWriterEffect
                            textStyle={{ fontFamily: 'Red Hat Display' }}
                            startDelay={100}
                            cursorColor="transparent"
                            multiText={[
                                'Software Developer',
                                'Frontend Developer',
                                'Web Developer',
                            ]}
                            multiTextDelay={200}
                            typeSpeed={100}
                            multiTextLoop={true}
                        />
                    </span>
                </h1>
            </div >

        </div >

    )
}

export default Typewrite