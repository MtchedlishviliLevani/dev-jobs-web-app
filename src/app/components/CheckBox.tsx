"use client"
import React from 'react'
import { CheckBoxProps } from '@/app/type/type'

function CheckBox({ isChecked, setIsChecked }: CheckBoxProps) {
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
