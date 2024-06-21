"use client";
import React, { ReactNode } from "react";
import { useContext } from "react";
import { MyContext } from "./Context";

function SecondaryButton({ children }: { children: ReactNode }) {
    const contextValue = useContext(MyContext);
    return (
        <button
            className={`px-[2rem] md:px-[1.4rem] py-[1.2rem] md:py-[1.6rem] text-[16px] rounded-[.5rem] font-bold  ${contextValue?.pageMode
                ? "bg-lightMode-secondaryBtnBgColor text-[#5964e0] hover:bg-lightMode-secondaryBtnHoverBgColor"
                : "bg-darkMode-secondaryBtnBgColor hover:bg-darkMode-secondaryBtnHoverBgColor text-[#FFF] "
                } `}
        >
            {children}
        </button>
    );
}

export default SecondaryButton;
