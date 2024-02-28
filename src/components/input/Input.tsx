import React from 'react'

interface Props {
    type: string
    name: string
    placeholder?: string
}

const Input: React.FC<Props> = ({type, name, placeholder}) => {
    return (
        <input type={type} name={name} placeholder={placeholder} className="border-2 text-black text-2xl border-[#595959] rounded-lg w-full h-[70px]" />
    )
}

export default Input
