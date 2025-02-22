"use client"
import React, { ReactNode, createContext, useState, } from 'react'
import { getTheme } from '../utils/theme'
import data from "../../app/data/data.json"
import type { Context } from '@/app/type/type'
export const MyContext = createContext<Context | undefined>(undefined)

function Context({ children }: { children: ReactNode }) {
    const initialTheme = getTheme();
    const [pageMode, setPageMode] = useState(initialTheme === 'light');
    const [dataJson, setDataJson] = useState(data)
    const [cardsAmount, setCardsAmount] = useState(12)
    const [isFilterActive, setIsFilterActive] = useState(false)

    return (
        <MyContext.Provider value={{ pageMode, setPageMode, dataJson, setDataJson, cardsAmount, setCardsAmount, isFilterActive, setIsFilterActive }}>
            {children}
        </MyContext.Provider>)
}

export default Context

