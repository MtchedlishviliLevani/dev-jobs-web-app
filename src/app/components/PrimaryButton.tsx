
import React, { useContext } from 'react'
import { ReactNode } from 'react'


function PrimaryButton({ children, fn }: { children: ReactNode, fn: () => void }) {
    return (
        <button onClick={fn} className='bg-darkMode-mainBtnBgColor hover:bg-darkMode-mainBtnHoverBgColor py-[1.4rem] px-[1.4rem] md:py-[1.6rem]  md:px-[1.4rem] rounded-[.5rem] text-white font-bold text-[1.6rem]'>{children}</button>
    )
}

export default PrimaryButton
