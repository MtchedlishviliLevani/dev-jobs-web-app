"use client"

import { useContext } from "react";
import { MyContext } from "./Context";
import { Kumbh_Sans } from "next/font/google";
import HeaderImage from "./HeaderImage";

const kumbh_Sans = Kumbh_Sans({ weight: "400", subsets: ["latin"] });

export default function LayoutContent({ children }: { children: React.ReactNode }) {
    const contextValue = useContext(MyContext);

    return (
        <>

            <body
                className={`${kumbh_Sans.className} ${contextValue?.pageMode ? "bg-lightMode-bgColor" : "bg-darkMode-bgColor"
                    }`}
            >
                {contextValue?.isFilterActive && <div onClick={() => contextValue?.setIsFilterActive(false)} className="bg-[#000000] w-screen h-screen fixed opacity-50 z-10"></div>}
                <HeaderImage />
                {children}
            </body></>
    );
}