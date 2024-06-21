"use client";
import React, { useContext } from "react";
import { MyContext } from "./Context";
import PrimaryButton from "./PrimaryButton";
import CardsWrapper from "./CardsWrapper";
function BodyPart() {
    const contextValue = useContext(MyContext);
    function showMoreCards() {
        if (contextValue?.dataJson.length)
            contextValue?.setCardsAmount(contextValue?.dataJson.length)
    }
    return (
        <div
            className={`px-[24px] py-[20px] md:px-[4rem] lg:px-[6rem] xl:px-[10rem] 2xl:px-[165px] `}
        >
            <CardsWrapper />
            {contextValue?.cardsAmount != undefined && contextValue?.cardsAmount <= 12 && contextValue?.dataJson.length > 12 &&
                <>
                    <div className="py-[20px] text-center">
                        <PrimaryButton fn={showMoreCards}>Load More</PrimaryButton>
                    </div></>
            }
        </div>
    );
}

export default BodyPart;
