"use client"
import React, { useContext } from 'react'
import { MyContext } from './Context'
import PrimaryButton from './PrimaryButton'
import { useRouter } from 'next/navigation'

function JobDescriptionFooter({ data }: JobDescriptionHeaderProps) {
    const router = useRouter()
    function goToApplyPg() {
        router.push(`${data.website}`)
    }
    const contextValue = useContext(MyContext)
    return (
        <div className={`${contextValue?.pageMode ? "bg-lightMode-cardBgColor" : "bg-darkMode-cardBgColor"} py-[23px]`}>
            <div className='px-[24px] md:px-[4rem] lg:px-[6rem] xl:px-[10rem] 2xl:px-[165px] w-[100%]  md:flex md:justify-between'>
                <div className='hidden md:flex flex-col'>
                    <h2 className={`text-[20px] md:text-[28px] ${contextValue?.pageMode ? "text-lightMode-titleColor" : "bg-darkMode-titleColor"} font-bold`}>{data.position}</h2>
                    <h3 className='text-[16px] text-[#6e8098]'>{data.company}</h3>
                </div>
                <div className='*:w-[100%]'>
                    <PrimaryButton fn={goToApplyPg}>Apply Now</PrimaryButton>
                </div>
            </div>
        </div>
    )
}

export default JobDescriptionFooter
