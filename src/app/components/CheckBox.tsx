"use client"
import React from 'react'
interface Props {
    isChecked: boolean;
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>
}
function CheckBox({ isChecked, setIsChecked }: Props) {
    return (
        <label className='container1'>
            <input checked={isChecked}
                onChange={() => setIsChecked((isChecked) => !isChecked)}
                type="checkbox"
                className='input'
            />
            <span className='checkMark'></span>
        </label>
    )
}

export default CheckBox
