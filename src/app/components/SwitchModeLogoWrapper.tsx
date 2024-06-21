import React from 'react'
import SwitchMode from './SwitchMode'
import Link from 'next/link'

function SwitchModeLogoWrapper() {
    return (
        <div className="w-[100%] flex justify-between items-center ">
            <Link href={"/"}> <span className={`text-white text-[2rem] font-bold`}>Devjobs</span></Link>
            <SwitchMode />
        </div>
    )
}

export default SwitchModeLogoWrapper
