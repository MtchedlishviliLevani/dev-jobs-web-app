import React from 'react'

function HeaderImage() {
    return (
        <div
            style={{ backgroundRepeat: "no-repeat" }}
            className=" bg-cover bg-[url(/images/mobile/bg-pattern-header.svg)] md:bg-[url(/images/desktop/bg-pattern-header.svg)] w-[100%] h-[16rem] "
        ></div>
    )
}

export default HeaderImage
