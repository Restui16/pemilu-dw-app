import React from "react";

interface Props {
    children: React.ReactNode
    htmlFor: string
}

const Label: React.FC<Props> = ({children, htmlFor}) =>{
    return (
        <label htmlFor={htmlFor} className="block text-2xl text-black mb-2 font-bold">{children}</label>
    )
}

export default Label