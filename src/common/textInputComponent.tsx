import { ChangeEvent } from "react";
import clsx from "clsx"

interface dataProps {
    divClass?: string,
    inputClass?: string,
    id: string,
    type: string,
    value: string | number | undefined,
    label: string,
    placeholder: string,
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

const TextInputComponent = ({ divClass, inputClass, id, type, value, label, placeholder, handleInputChange }: dataProps) => {
    return (
        <div className={clsx("flex flex-col", divClass)}>
            <label className="my-1" htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                name={id}
                className={clsx("rounded-md", inputClass)}
                value={value}
                placeholder={placeholder}
                onChange={handleInputChange}
            />
        </div>
    )
}

export default TextInputComponent;