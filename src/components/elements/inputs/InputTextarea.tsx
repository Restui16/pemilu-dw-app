import React from 'react'

type Props = {
    name: string
    label: string
    placeholder: string
    value?: string | number
    onChange?: () => void
}

const InputTextarea: React.FC<Props> = ({ name, label, placeholder, value, onChange }) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="block mb-2 text-lg text-gray-900 font-bold">{label}</label>
            <textarea
                id={name}
                onChange={onChange}
                name={name}
                rows={5}
                placeholder={placeholder}
                defaultValue={value}
                className="bg-gray-50 border border-gray-600 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            </textarea>
        </div>
    )
}

export default InputTextarea