"use client"
import React, { useContext } from 'react'
import SwitchModeLogoWrapper from './SwitchModeLogoWrapper'
import SecondaryButton from './SecondaryButton'
import { MyContext } from './Context'
import Image from 'next/image'
import Link from 'next/link'


function JobDescriptionHeader({ data }: JobDescriptionHeaderProps) {
    const contextValue = useContext(MyContext)
    return (
        <div>
            <SwitchModeLogoWrapper />
            <div
                className={`mt-[50px] flex flex-col md:flex-row md:gap-8 items-center md:items-center ${contextValue?.pageMode
                    ? "bg-lightMode-cardBgColor"
                    : "bg-darkMode-cardBgColor"
                    }  pb-[32px] md:pb-0 md:pr-[30px] rounded-[6px]`}
            >
                <div
                    style={{ background: data.logoBackground }}
                    className="relative w-[50px] px-[10px] md:px-[20px] h-[50px] md:w-[140px] md:h-[140px] translate-y-[-50%] md:translate-y-[initial]  flex items-center justify-center rounded-md  mb-4 md:mb-0"
                >
                    <div
                        style={{ position: "relative", width: "60px", height: "60px" }}
                    >
                        <Image
                            style={{ objectFit: "contain" }}
                            src={data.logo}
                            alt={`${data.company} icon`}
                            fill
                            priority
                        />
                    </div>
                </div>
                <div className="md:flex md:justify-between mt-[-20px] md:items-center md:flex-grow">
                    <div className="flex flex-col items-center  md:mt-[initial] gap-[5px] md:items-start text-center md:text-left">
                        <h2
                            className={`text-[18px] md:text-[24px] ${contextValue?.pageMode
                                ? " text-lightMode-titleColor"
                                : "text-darkMode-titleColor"
                                }  font-bold `}
                        >
                            {data.company}
                        </h2>
                        <p className=" text-[14px] md:text-[18px] text-gray-500">
                            {data.website}
                        </p>
                    </div>
                    <div className="mt-[27px] md:mt-0">
                        <Link href={data.website}>  <SecondaryButton>Company Site</SecondaryButton></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDescriptionHeader
