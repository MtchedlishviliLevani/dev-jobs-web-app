"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import { MyContext } from './Context'
interface Props {
    icon: string;
    placeholder: string;
    flexWidth: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>
}

function SearchBar({ icon, placeholder, flexWidth, value, setValue }: Props) {
    const contextValue = useContext(MyContext)
    return (
        <div style={{ '--flex': flexWidth } as React.CSSProperties} className={`py-[1rem] px-[1rem] bg-transparent w-[100%] md:w-[initial] flex items-center gap-3 md:border-r-[.1rem] md:border-solid md:border-darkMode-inputBorderColor xl:flex-[var(--flex)]`}>

            <Image
                className='hidden md:block'
                src={icon}
                width={20}
                height={20}
                alt='search icon' />

            <input
                onChange={(e) => setValue(e.target.value)}
                value={value}
                type='text'
                placeholder={placeholder}
                className={`outline-none placeholder:text-[1.6rem] text-[1.6rem] w-[100%] py-[1rem] px-[.5rem] ${contextValue?.pageMode ? "text-lightMode-searchInputTxtColor" : "text-[#FFF]"}  bg-transparent`} />

        </div>
    )
}

export default SearchBar
