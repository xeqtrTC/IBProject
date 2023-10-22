import { ChangeEvent, FC, MutableRefObject } from "react";

interface inputProps {
    type: 'text' | 'number'
    value: string | number,
    onChange: (e: ChangeEvent<HTMLInputElement>, index?: number) => void;
    label?: string,
    index?: number
    labelClass?: string,
    inputClass: string,
    name: string
    placeholder?: string,
    error?: string,
    ref?: MutableRefObject<HTMLInputElement>
}

const Input:FC<inputProps> = ({
    type,
    value,
    onChange,
    label,
    labelClass,
    inputClass,
    name,
    placeholder,
    error,
    // ref
}) => {
    let labelContent = null;
    if (label) {
        labelContent = (
            <label 
            className={labelClass}
            htmlFor={name}
            >{label}
            </label>
        )
    }
    let errorContent = null;
    if (error) {
        errorContent = (
            <div className=" top-10">
                <span className="text-red-600 text-sm font-medium">{error}</span>
            </div>
        )
    }
    return (
        <div className="flex flex-col relative">
            {
                labelContent
            }
            <input
            type={type}
            id={name}
            name={name}
            value={value}
            placeholder={placeholder ? placeholder : undefined}
            className={`${inputClass} ${error ? 'border-red-600' : ''}`}
            onChange={onChange}
            />
            {
                errorContent
            }
        </div>
    )
}

export default Input