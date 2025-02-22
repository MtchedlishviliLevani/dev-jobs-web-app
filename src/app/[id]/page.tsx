"use client";
import { useContext, useMemo } from "react";
import { MyContext } from "../components/Context";
import JobDescriptionHeader from "../components/JobDescriptionHeader";
import JobDescriptionInfo from "../components/JobDescriptionInfo";
import JobDescriptionFooter from "../components/JobDescriptionFooter";
import { JobPosting } from "@/app/type/type";
export default function Page({ params }: { params: { id: string } }) {
    const contextValue = useContext(MyContext);
    const dataId = Number(params.id);


    const filteredById = useMemo(() => {
        return contextValue?.dataJson.find((x: JobPosting) => x.id == dataId)
    }, [contextValue?.dataJson, dataId])


    if (!filteredById) {
        return <div>Loading...</div>;
    }
    return (
        <div className=""
        >
            <div className=" w-[100%] absolute top-[47px] flex flex-col gap-[50px]">
                <div className="px-[24px] md:px-[4rem] lg:px-[6rem] xl:px-[10rem] 2xl:px-[165px] flex flex-col gap-[50px]">
                    <JobDescriptionHeader data={filteredById} />
                    <JobDescriptionInfo data={filteredById} />
                </div>

                <div className="">
                    <JobDescriptionFooter data={filteredById} />
                </div>
            </div>

        </div>
    );
}
