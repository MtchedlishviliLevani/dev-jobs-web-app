"use client"
import React, { ReactNode, createContext, useState, } from 'react'
import { getTheme } from '../utils/theme'
import data from "../../app/data/data.json"
interface Context {
    pageMode: boolean,
    setPageMode: React.Dispatch<React.SetStateAction<boolean>>;
    dataJson: typeof data;
    setDataJson: React.Dispatch<React.SetStateAction<typeof data>>;
    cardsAmount: number;
    setCardsAmount: React.Dispatch<React.SetStateAction<number>>;
    isFilterActive: boolean;
    setIsFilterActive: React.Dispatch<React.SetStateAction<boolean>>


}
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

