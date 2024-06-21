"use client";
import dataJson from "../data/data.json";
import React, { useContext, useState } from "react";
import SearchIcon from "../../../public/images/desktop/icon-search.svg"
import LocationIcon from "../../../public/images/desktop/icon-location.svg";
import SearchBar from "./SearchBar";
import JobType from "./JobType";
import PrimaryButton from "./PrimaryButton";
import { MyContext } from "./Context";
import Image from "next/image";
import FilterIcon from "../../../public/images/mobile/icon-filter.svg";
import SwitchModeLogoWrapper from "./SwitchModeLogoWrapper";
function Header() {
    const contextValue = useContext(MyContext);
    const [title, setTitle] = useState("");
    const [locationValue, setLocationValue] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    function searchLocationFullTime() {
        const filteredData = dataJson.filter((item) => {
            const matchLocation = item.location.toLowerCase().includes(locationValue.toLowerCase());
            const mathcesContract = isChecked ? item.contract.toLowerCase() === "full time".toLowerCase() : item.contract
            return matchLocation && mathcesContract
        })
        if (filteredData) {
            contextValue?.setDataJson(filteredData);
            contextValue?.setCardsAmount(filteredData.length);
            contextValue?.setIsFilterActive(false)
        }

    }

    function search() {
        const filteredData = dataJson.filter((item) => {
            const matchesTitle =
                item.company.toLowerCase().includes(title.toLowerCase()) ||
                item.position.toLowerCase().includes(title.toLowerCase());
            const matchesLocation = item.location
                .toLowerCase()
                .includes(locationValue.toLowerCase());

            const matchesContract = isChecked
                ? item.contract.toLowerCase() === "full time" : item.contract.toLowerCase()

            return matchesTitle && matchesLocation && matchesContract;
        });

        if (filteredData) {
            contextValue?.setDataJson(filteredData);
            contextValue?.setCardsAmount(filteredData.length);
        }
    }
    return (
        <>
            {contextValue?.isFilterActive && <><div className={`w-[327px] pb-[24px] absolute md:hidden rounded-[6px]  bg-red translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] ${contextValue?.pageMode ? "bg-lightMode-cardBgColor" : "bg-darkMode-cardBgColor"} z-20`}>
                <div className="flex px-[10px]">
                    <Image style={{ objectFit: "contain" }} src={FilterIcon} alt="" width={20} height={15} /> <SearchBar placeholder="Filter by location" icon={FilterIcon} setValue={setLocationValue} value={locationValue} flexWidth="" />
                </div>
                <div className="w-[100%] h-[1px] bg-[#6E8098] my-[10px]"></div>
                <div className="p-[10px]">
                    <JobType setIsChecked={setIsChecked} isChecked={isChecked} />
                </div>
                <div className="text-center *:w-[100%] px-[10px] mt-[30px]"><PrimaryButton fn={searchLocationFullTime}>Search</PrimaryButton></div>
            </div></>}

            <div className="mb-[80px]">
                <div className="px-[24px] md:px-[4rem] lg:px-[6rem] xl:px-[10rem] 2xl:px-[165px] w-[100%] absolute top-[47px] flex flex-col gap-[4rem] ">
                    <SwitchModeLogoWrapper />
                    <div
                        className={`${contextValue?.pageMode ? "bg-white" : "bg-[#121721]"
                            }  gap-[1.2rem] md:px-[16px] items-center rounded-lg py-4 hidden md:grid md:grid-cols-3 lg:grid-cols-custom-lg`}
                    >
                        <SearchBar
                            icon={SearchIcon}
                            placeholder="Filter by title, companies, expertise…"
                            flexWidth="2"
                            value={title}
                            setValue={setTitle}
                        />
                        <SearchBar
                            icon={LocationIcon}
                            placeholder="Filter by location…"
                            flexWidth="1.1"
                            value={locationValue}
                            setValue={setLocationValue}
                        />
                        <div className="flex items-center md:justify-between  ml-[1.6rem]  xl:flex-[1.2]">
                            <JobType isChecked={isChecked} setIsChecked={setIsChecked} />
                            <PrimaryButton fn={search}>Search</PrimaryButton>
                        </div>
                    </div>
                    <div
                        className={`md:hidden ${contextValue?.pageMode
                            ? "bg-white"
                            : "bg-darkMode-searchInputBgColor "
                            }  rounded-[.5rem] w-[100%] flex items-center justify-between pr-3`}
                    >

                        <SearchBar flexWidth="" setValue={setTitle} value={title} placeholder="Filter By Title" icon={SearchIcon} />

                        <div className="flex items-center gap-[24px] ">
                            <div className="cursor-pointer" onClick={() => contextValue?.setIsFilterActive(true)}>
                                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
                                        fill="#6E8098"
                                        fillRule="nonzero"
                                    />
                                </svg>{" "}
                            </div>
                            <PrimaryButton fn={search}>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M13.3533 12.549H14.2603L19.9529 18.2531L18.2531 19.9529L12.549 14.2603V13.359L12.2353 13.0453C10.9405 14.1576 9.25775 14.8307 7.41535 14.8307C3.31979 14.8307 0 11.5109 0 7.41535C0 3.31979 3.31984 0 7.41535 0C11.5109 0 14.8306 3.31979 14.8306 7.41535C14.8306 9.25775 14.1576 10.9405 13.0396 12.2353L13.3533 12.549ZM2.28166 7.41535C2.28166 10.2503 4.58043 12.549 7.41535 12.549C10.2503 12.549 12.549 10.2503 12.549 7.41535C12.549 4.58043 10.2503 2.28166 7.41535 2.28166C4.58043 2.28166 2.28166 4.58043 2.28166 7.41535Z"
                                        fill="white"
                                    />
                                </svg>
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </div></>
    );
}

export default Header;
