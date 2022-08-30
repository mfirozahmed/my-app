import { ChangeEvent } from 'react'

interface CreateOtherPropsType {
    otherProps: OtherPropsType,
    sendData: (data: OtherPropsType) => void;
}

const CreateOtherProps = ({ otherProps, sendData }: CreateOtherPropsType) => {

    const handleOtherPropsChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        sendData({ ...otherProps, [name]: value });
    }

    return (
        <form className="px-8 py-4 rounded-md bg-gray-300 text-black text-lg font-medium">
            <div className="flex flex-col h-96 overflow-auto justify-between gap-y-4">
                <div className="flex flex-wrap items-center gap-x-2">
                    <h4>Container Style:</h4>
                    {["block", "inline"].map((data, index) => (
                        <div key={index} className="flex flex-row items-center gap-x-2">
                            <input
                                id={data}
                                type="radio"
                                name="containerStyle"
                                value={data}
                                checked={otherProps.containerStyle === data}
                                onChange={handleOtherPropsChange}
                            />
                            <label htmlFor={data}>{data}</label>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap items-center gap-x-2">
                    <h4>Size:</h4>
                    {["sm", "md", "lg", "xl"].map((data, index) => (
                        <div key={index} className="flex flex-row items-center gap-x-2">
                            <input
                                id={data}
                                type="radio"
                                name="size"
                                value={data}
                                checked={otherProps.size === data}
                                onChange={handleOtherPropsChange}
                            />
                            <label htmlFor={data}>{data}</label>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap items-center gap-x-2">
                    <h4>Box Border Style:</h4>
                    {["default", "none", "rounded"].map((data, index) => (
                        <div key={index} className="flex flex-row items-center gap-x-2">
                            <input
                                id={`border-${data}`}
                                type="radio"
                                name="boxBorderStyle"
                                value={data}
                                checked={otherProps.boxBorderStyle === data}
                                onChange={handleOtherPropsChange}
                            />
                            <label htmlFor={`border-${data}`}>{data}</label>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap items-center gap-x-2">
                    <h4>Box Color:</h4>
                    {["default", "success", "danger", "warning", "info", "light", "dark"].map((data, index) => (
                        <div key={index} className="flex flex-row items-center gap-x-2">
                            <input
                                id={`box-${data}`}
                                type="radio"
                                name="boxColor"
                                value={data}
                                checked={otherProps.boxColor === data}
                                onChange={handleOtherPropsChange}
                            />
                            <label htmlFor={`box-${data}`}>{data}</label>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap items-center gap-x-2">
                    <h4>Alignment:</h4>
                    {["default", "right", "top", "bottom"].map((data, index) => (
                        <div key={index} className="flex flex-row items-center gap-x-2">
                            <input
                                id={`alignment-${data}`}
                                type="radio"
                                name="alignment"
                                value={data}
                                checked={otherProps.alignment === data}
                                onChange={handleOtherPropsChange}
                            />
                            <label htmlFor={`alignment-${data}`}>{data}</label>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap items-center gap-x-2">
                    <h4>Pattern:</h4>
                    {["default", "button"].map((data, index) => (
                        <div key={index} className="flex flex-row items-center gap-x-2">
                            <input
                                id={`pattern-${data}`}
                                type="radio"
                                name="pattern"
                                value={data}
                                checked={otherProps.pattern === data}
                                onChange={handleOtherPropsChange}
                            />
                            <label htmlFor={`pattern-${data}`}>{data}</label>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col pr-8">
                    <label className="my-1" htmlFor="componentClass">Component Class</label>
                    <input
                        id="componentClass"
                        type="text"
                        name="componentClass"
                        className="rounded-md"
                        value={otherProps.componentClass}
                        placeholder="Give A Component Class"
                        onChange={handleOtherPropsChange}
                    />
                </div>
                <div className="flex flex-col pr-8">
                    <label className="my-1" htmlFor="questionLabelClass">Question Label Class</label>
                    <input
                        id="questionLabelClass"
                        type="text"
                        name="questionLabelClass"
                        className="rounded-md"
                        value={otherProps.questionLabelClass}
                        placeholder="Give A Question Label Class"
                        onChange={handleOtherPropsChange}
                    />
                </div>
                <div className="flex flex-col pr-8">
                    <label className="my-1" htmlFor="containerClass">Container Class</label>
                    <input
                        id="containerClass"
                        type="text"
                        name="containerClass"
                        className="rounded-md"
                        value={otherProps.containerClass}
                        placeholder="Give A Container Class"
                        onChange={handleOtherPropsChange}
                    />
                </div>
                <div className="flex flex-col pr-8">
                    <label className="my-1" htmlFor="itemClass">Item Class</label>
                    <input
                        id="itemClass"
                        type="text"
                        name="itemClass"
                        className="rounded-md"
                        value={otherProps.itemClass}
                        placeholder="Give A Item Class"
                        onChange={handleOtherPropsChange}
                    />
                </div>
                {otherProps.pattern === 'button' &&
                    <div className="flex flex-col pr-8">
                        <label className="my-1" htmlFor="buttonClass">Button Class</label>
                        <input
                            id="buttonClass"
                            type="text"
                            name="buttonClass"
                            className="rounded-md"
                            value={otherProps.buttonClass}
                            placeholder="Give A Button Class"
                            onChange={handleOtherPropsChange}
                        />
                    </div>}
                {otherProps.pattern !== 'button' &&
                    <div className="flex flex-col pr-8">
                        <label className="my-1" htmlFor="inputClass">Input Class</label>
                        <input
                            id="inputClass"
                            type="text"
                            name="inputClass"
                            className="rounded-md"
                            value={otherProps.inputClass}
                            placeholder="Give A Input Class"
                            onChange={handleOtherPropsChange}
                        />
                    </div>}
                <div className="flex flex-col pr-8">
                    <label className="my-1" htmlFor="labelClass">Label Class</label>
                    <input
                        id="labelClass"
                        type="text"
                        name="labelClass"
                        className="rounded-md"
                        value={otherProps.labelClass}
                        placeholder="Give A Label Class"
                        onChange={handleOtherPropsChange}
                    />
                </div>
                <div className="flex flex-col pr-8">
                    <label className="my-1" htmlFor="hintClass">Hint Class</label>
                    <input
                        id="hintClass"
                        type="text"
                        name="hintClass"
                        className="rounded-md"
                        value={otherProps.hintClass}
                        placeholder="Give A Hint Class"
                        onChange={handleOtherPropsChange}
                    />
                </div>
                <div className="flex flex-col pr-8">
                    <label className="my-1" htmlFor="hintIconClass">Hint Icon Class</label>
                    <input
                        id="hintIconClass"
                        type="text"
                        name="hintIconClass"
                        className="rounded-md"
                        value={otherProps.hintIconClass}
                        placeholder="Give A Hint Icon Class"
                        onChange={handleOtherPropsChange}
                    />
                </div>
                <div className="flex flex-col pr-8">
                    <label className="my-1" htmlFor="hintTextClass">Hint Text Class</label>
                    <input
                        id="hintTextClass"
                        type="text"
                        name="hintTextClass"
                        className="rounded-md"
                        value={otherProps.hintTextClass}
                        placeholder="Give A Hint Text Class"
                        onChange={handleOtherPropsChange}
                    />
                </div>
                {otherProps.pattern !== 'button' &&
                    <div className="flex flex-col pr-8">
                        <label className="my-1" htmlFor="descriptionClass">Description Class</label>
                        <input
                            id="descriptionClass"
                            type="text"
                            name="descriptionClass"
                            className="rounded-md"
                            value={otherProps.descriptionClass}
                            placeholder="Give A Description Class"
                            onChange={handleOtherPropsChange}
                        />
                    </div>}

                <div className="flex flex-col pr-8">
                    <label className="my-1" htmlFor="question">Question</label>
                    <input
                        id="question"
                        type="text"
                        name="question"
                        className="rounded-md"
                        value={otherProps.question}
                        placeholder="Give A Question"
                        onChange={handleOtherPropsChange}
                    />
                </div>
                <div className="flex flex-col pr-8">
                    <label className="my-1" htmlFor="questionHint">Question Hint</label>
                    <input
                        id="questionHint"
                        type="text"
                        name="questionHint"
                        className="rounded-md"
                        value={otherProps.questionHint}
                        placeholder="Give A Question Hint"
                        onChange={handleOtherPropsChange}
                    />
                </div>
            </div>
        </form>
    )
}

export default CreateOtherProps