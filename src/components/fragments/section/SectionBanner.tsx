import React from 'react'

type SectionBannerProps = {
    brand: string,
    imgContentBanner: string 
}

const SectionBanner: React.FC<SectionBannerProps> = ({brand, imgContentBanner}) => {
    return (
        <section
            className='px-24'>
            <div
                className="relative bgGradient h-[516px] overflow-hidden flex flex-col my-10 rounded-xl lg:flex-row">
                <img
                    src={brand}
                    className="absolute w-72 top-0 left-0 opacity-50 z-0" alt="" />
                <div
                    className="text-white self-end font-bold px-5 py-5 z-10">
                    <h1
                        className="text-3xl lg:text-6xl">SELAMAT DATANG
                    </h1>
                    <h3
                        className="text-xl lg:text-2xl">PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR DIPILIH MELALUI SEBUAH ARTI NAMA
                    </h3>
                </div>
                <img
                    className=""
                    src={imgContentBanner}
                    alt=""
                />
            </div>
        </section>
    )
}

export default SectionBanner