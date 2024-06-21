"use client"
import React, { useContext, useState } from 'react'
import Image from 'next/image'
import SunIcon from '../../../public/images/desktop/icon-sun.svg'
import MoonIcon from '../../../public/images/desktop/icon-moon.svg'
import { MyContext } from './Context'

function SwitchMode() {
    const myContext = useContext(MyContext)
    function toggleTheme() {
        myContext?.setPageMode((e) => !e)
    }


    return (
        <div className='flex gap-3  items-center'>
            <Image src={SunIcon} alt="" />
            <button onClick={toggleTheme}
                aria-label={myContext?.pageMode ? "Switch to light mode" : "Switch to dark mode"}
                className='w-[4.8rem] h-[2.4rem] bg-white rounded-xl relative'>
                <span className={` w-[1.4rem] h-[1.4rem] bg-blue-400 block rounded-[50%] absolute ${myContext?.pageMode ? "left-[1.2rem] " : "left-[3.6rem]"} transition-left duration-[200ms] translate-y-[-50%] translate-x-[-50%]`}></span>
            </button>
            <Image src={MoonIcon} alt='' />
        </div>
    )
}

export default SwitchMode
