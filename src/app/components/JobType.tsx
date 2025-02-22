"use client"
import React, { useContext } from 'react'
import CheckBox from './CheckBox'
import { MyContext } from './Context'
import type { CheckBoxProps } from '@/app/type/type'


function JobType({ isChecked, setIsChecked }: CheckBoxProps) {
    const contextValue = useContext(MyContext)
    return (
        <div className='flex gap-[4rem]'>
            <CheckBox isChecked={isChecked} setIsChecked={setIsChecked} />
            <span className={`${contextValue?.pageMode ? "text-lightMode-titleColor" : "text-darkMode-titleColor"} text-[1.6rem] block font-bold`}>Full Time</span>
        </div>
    )
}

export default JobType
