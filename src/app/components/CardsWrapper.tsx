"use client"
import React, { useContext } from "react";
import Card from "./Card";
import { MyContext } from "./Context";
import Link from "next/link";


function CardsWrapper() {
    const contextValue = useContext(MyContext)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-x-3 lg:gap-x-6 xl:gap-x-12 gap-y-[49px] my-[20px]">
            {contextValue?.dataJson.slice(0, contextValue?.cardsAmount).map((item) => (
                <Link key={item.id} href={`/${item.id}`} >
                    <Card
                        position={item.position}
                        location={item.location}
                        company={item.company}
                        postedAt={item.postedAt}
                        contract={item.contract}
                        logo={item.logo}
                        logoBackground={item.logoBackground}
                    />
                </Link>
            ))}
        </div>
    );
}

export default CardsWrapper;
