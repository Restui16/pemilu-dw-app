import React from 'react'

type SectionInfoProps = {
    children: React.ReactNode
    variant: string
}

const SectionInfo: React.FC<SectionInfoProps> = ({children, variant = 'bg-white'}) => {
    return (
        <section
            className={`${variant} font-bold text-center px-24 h-[386px] flex justify-center items-center`}>
            <h1
                className="text-2xl md:text-3xl lg:text-4xl leading-[48.41px]">
               {children}
            </h1>
        </section>
    )
}

export default SectionInfo