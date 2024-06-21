"use client"
// import Header from "@/components/MainPageHeader";
import Image from "next/image";
import { createContext, useContext, useState } from "react";
import { MyContext } from "./components/Context";
import MainPageHeader from "./components/MainPageHeader";
import BodyPart from "./components/BodyPart";
// import Context, { MyContext } from "@/components/Context";
// import BodyPart from "@/components/BodyPart";
// import HeaderDraft from "@/components/HeaderDraft";
// import MainPageHeader from "@/components/MainPageHeader";



export default function Home() {
  const contextValue = useContext(MyContext)

  return (

    <>
      <div className={`w-[100%] min-h-[100vh] ${contextValue?.pageMode ? "bg-lightMode-bgColor" : "bg-darkMode-bgColor"} `}>

        <MainPageHeader />
        <BodyPart />
      </div>
    </>
  );
}
