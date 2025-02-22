"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import { MyContext } from './Context'
import { CardProps } from '@/app/type/type'


function Card({ position, location, company, postedAt, contract, logo, logoBackground }: CardProps) {
    const contextValue = useContext(MyContext)
    return (
        <div className={`${contextValue?.pageMode ? "bg-lightMode-cardBgColor" : "bg-darkMode-cardBgColor"} pt-[49px] pl-[32px] pb-[36px] rounded-[6px] relative`}>
            <div style={{ backgroundColor: logoBackground }} className='rounded-[15px]   grid place-items-center h-[50px] w-[50px] absolute top-[-25px] left-[32px] translate-x-0 translate-y-0'>
                <Image style={{ objectFit: "contain", height: "15px", width: "30px" }}
                    width={0}
                    height={0}
                    src={logo} alt={`${logo} icon`} />
            </div>
            <div className='flex gap-2 items-center'><span className='text-[#6e8098] text-[14px]'>{postedAt}</span><span className='w-1 h-1 bg-[#6e8098] rounded-[50%]'></span><span className='text-[14px] text-[#6e8098]'>{contract}</span></div>
            <h2 className={`  my-[10px] ${contextValue?.pageMode ? "text-lightMode-titleColor" : "text-darkMode-titleColor"} text-[18px] font-bold `}>{position}</h2>
            <h3 className='text-[#6e8098] text-[15px] font-bold'>{company}</h3>
            <div className='mt-[40px]'><span className='text-[#5964e0] text-[14px] font-bold leading-[17px]'>{location}</span></div>

        </div>
    )
}

export default Card
