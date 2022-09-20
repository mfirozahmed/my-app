import { ChangeEvent } from "react";
import clsx from "clsx";

interface dataProps {
    divClass?: string,
    label: string,
    name: string,
    data: string[],
    state: any,
    handleOtherPropsChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const RadioInputComponent = ({ divClass, label, name, data, state, handleOtherPropsChange }: dataProps) => {
    return (
        <div className="flex flex-wrap items-center gap-x-2">
            <h4>{label}:</h4>
            {data?.map((item: string, index: number) => (
                <div key={index} className={clsx("flex flex-row items-center gap-x-2", divClass)}>
                    <input
                        id={`label-${item}`}
                        type="radio"
                        name={name}
                        value={item}
                        checked={state[name] === item}
                        onChange={handleOtherPropsChange}
                    />
                    <label htmlFor={`label-${item}`}>{item}</label>
                </div>
            ))}
        </div>
    )
}

export default RadioInputComponent;