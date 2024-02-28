import React from 'react'
import Label from './Label'
import Input from './Input'

interface Props {
    label: string
    type: string
    name: string
    placeholder?: string
}

const InputForm: React.FC<Props> = ({label, type, name, placeholder}) => {
    return (
        <div className="mb-3">
            <Label htmlFor={name}>{label}</Label>
            <Input type={type} placeholder={placeholder} name={name}/>
        </div>
    )
}

export default InputForm
