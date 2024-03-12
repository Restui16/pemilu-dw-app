import React from 'react'

interface Props {
    label: string
    type: string
    name: string
    placeholder?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputForm: React.FC<Props> = ({label, type, name, placeholder, onChange}) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="block mb-2 text-lg text-gray-900 font-bold">{label}</label>
            <input type={type} id={name} onChange={onChange} name={name} placeholder={placeholder} className="bg-gray-50 border border-gray-600 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
        </div>
    )
}

export default InputForm
