import React from 'react'

interface Props {
    label: string
    name: string
    children: React.ReactNode
    onChange?: (e: React.ChangeEventHandler<HTMLSelectElement>) => void
}

const InputSelect: React.FC<Props> = ({ label, name, children}) => {
    return (
        <div className="mb-2">
            <label
                htmlFor={name}
                className="block mb-2 text-lg font-bold text-gray-900">
                {label}
            </label>
            <select
                name={name}
                id={name}
                className="bg-gray-50 border border-gray-600 text-gray-900 text-lg rounded-lg block w-full p-2.5">
                {children}
            </select>
        </div>
    )
}

export default InputSelect
