"use client";
import React, { useContext } from "react";
import Context, { MyContext } from "./Context";
import PrimaryButton from "./PrimaryButton";
import { useRouter } from "next/navigation";
import { JobDescriptionHeaderProps } from "@/app/type/type";
export default function JobDescriptionInfo({
    data,
}: JobDescriptionHeaderProps) {
    const contextValue = useContext(MyContext);

    const navigate = useRouter()
    function navigateToApply() {
        return navigate.push(`${data.website}`)
    }
    return (
        <div
            className={`${contextValue?.pageMode
                ? "bg-lightMode-cardBgColor"
                : "bg-darkMode-cardBgColor"
                } px-[24px] py-[40px]`}
        >
            <div className="flex flex-col gap-[54px]  md:flex-row md:items-center justify-between">
                <div className="flex flex-col  gap-3 md:gap-3  ">
                    <div className="flex gap-2  items-center">
                        <span className="text-[#6e8098] text-[14px] md:text-[16px] font-bold">{data.postedAt}</span>
                        <span className="w-1 h-1 bg-[#6e8098] rounded-[50%]"></span>
                        <span className="text-[14px] text-[#6e8098] md:text-[16px] font-bold">{data.contract}</span>
                    </div>
                    <h2 className={`font-bold ${contextValue?.pageMode ? "text-lightMode-titleColor" : "text-darkMode-titleColor"} text-[20px] md:text-[28px]`}>{data.position}</h2>
                    <h3 className={`text-[14px]  text-darkMode-locationColor font-bold`}>{data.location}</h3>

                </div>
                <div className="*:w-[100%]">
                    <PrimaryButton fn={navigateToApply}>Apply Now</PrimaryButton>
                </div></div>
            <div className="mt-[40px]">
                <p className="text-[16px] text-darkMode-paragraphColor">{data.description}</p>
            </div>
            <div className="mt-[30px]">
                <h2 className={`${contextValue?.pageMode ? "text-lightMode-titleColor" : "text-darkMode-titleColor"} text-[20px] md:text-[28px] font-bold mb-3`}>Requirements</h2>
                <p className="text-[16px] text-darkMode-paragraphColor">{data.requirements.content}</p>
                <div className="flex flex-col gap-2 mt-6">
                    {data.requirements.items.map((x) => <div key={x} className="flex gap-8 "><span className="w-[4px] h-[4px] flex-shrink-0 mt-[7px] rounded-[50%]  bg-[#5964e0]"></span> <p className="text-[16px] text-darkMode-paragraphColor">{x}</p></div>)}
                </div>
            </div>

            <div className="mt-[30px]">
                <h2 className={`${contextValue?.pageMode ? "text-lightMode-titleColor" : "text-darkMode-titleColor"} text-[20px] md:text-[28px] font-bold mb-3`}>What You Will Do</h2>
                <p className="text-[16px] text-darkMode-paragraphColor">{data.role.content}</p>
                <div className="flex flex-col gap-2 mt-6">
                    {data.role.items.map((x, index) => <div key={index} className="flex gap-8 "><span className="flex-shrink-0 mt-[1px]  text-[16px] font-bold text-[#5964e0]">{index + 1}</span> <p className="text-[16px] text-darkMode-paragraphColor">{x}</p></div>)}
                </div>
            </div>
        </div>

    );
}
