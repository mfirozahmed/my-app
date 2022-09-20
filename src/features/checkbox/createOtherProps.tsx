import { ChangeEvent } from 'react'

import RadioInputComponent from 'common/radioInputComponent';
import TextInputComponent from 'common/textInputComponent';

interface CreateOtherPropsType {
    otherProps: OtherPropsType,
    sendData: (data: OtherPropsType) => void;
}

const CreateOtherProps = ({ otherProps, sendData }: CreateOtherPropsType) => {

    const handleOtherPropsChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === "pattern" && value === "button") {
            sendData({ ...otherProps, [name]: value, containerStyle: "inline" });
        } else {
            sendData({ ...otherProps, [name]: value });
        }
    }

    return (
        <form className="px-8 py-4 rounded-md bg-gray-300 text-black text-lg font-medium">
            <div className="flex flex-col h-96 overflow-auto justify-between gap-y-4">
                <RadioInputComponent label="Container Style" name='containerStyle' data={["block", "inline"]} state={otherProps} handleOtherPropsChange={handleOtherPropsChange} />
                <RadioInputComponent label="Size" name='size' data={["sm", "md", "lg", "xl"]} state={otherProps} handleOtherPropsChange={handleOtherPropsChange} />
                <RadioInputComponent label="Box Border Style" name='boxBorderStyle' data={["default", "none", "rounded"]} state={otherProps} handleOtherPropsChange={handleOtherPropsChange} />
                <RadioInputComponent label="Box Color" name='boxColor' data={["default", "success", "danger", "warning", "info", "light", "dark"]} state={otherProps} handleOtherPropsChange={handleOtherPropsChange} />
                <RadioInputComponent label="Alignment" name='alignment' data={["default", "right", "top", "bottom"]} state={otherProps} handleOtherPropsChange={handleOtherPropsChange} />
                <RadioInputComponent label="Pattern" name='pattern' data={["default", "button"]} state={otherProps} handleOtherPropsChange={handleOtherPropsChange} />

                <TextInputComponent divClass="pr-8" id="componentClass" type="text" value={otherProps.componentClass} label="Component Class" placeholder="Give A Component Class" handleInputChange={handleOtherPropsChange} />
                <TextInputComponent divClass="pr-8" id="questionLabelClass" type="text" value={otherProps.questionLabelClass} label="Question Label Class" placeholder="Give A Question Label Class" handleInputChange={handleOtherPropsChange} />
                <TextInputComponent divClass="pr-8" id="containerClass" type="text" value={otherProps.containerClass} label="Container Class" placeholder="Give A Container Class" handleInputChange={handleOtherPropsChange} />
                <TextInputComponent divClass="pr-8" id="itemClass" type="text" value={otherProps.itemClass} label="Item Class" placeholder="Give A Item Class" handleInputChange={handleOtherPropsChange} />
                {otherProps.pattern === 'button' &&
                    <TextInputComponent divClass="pr-8" id="buttonClass" type="text" value={otherProps.buttonClass} label="Button Class" placeholder="Give A Button Class" handleInputChange={handleOtherPropsChange} />}
                {otherProps.pattern !== 'button' &&
                    <TextInputComponent divClass="pr-8" id="inputClass" type="text" value={otherProps.inputClass} label="Input Class" placeholder="Give A Input Class" handleInputChange={handleOtherPropsChange} />}
                <TextInputComponent divClass="pr-8" id="labelClass" type="text" value={otherProps.labelClass} label="Label Class" placeholder="Give A Label Class" handleInputChange={handleOtherPropsChange} />
                <TextInputComponent divClass="pr-8" id="hintClass" type="text" value={otherProps.hintClass} label="Hint Class" placeholder="Give A Hint Class" handleInputChange={handleOtherPropsChange} />
                <TextInputComponent divClass="pr-8" id="hintIconClass" type="text" value={otherProps.hintIconClass} label="Hint Icon Class" placeholder="Give A Hint Icon Class" handleInputChange={handleOtherPropsChange} />
                <TextInputComponent divClass="pr-8" id="hintTextClass" type="text" value={otherProps.hintTextClass} label="Hint Text Class" placeholder="Give A Hint Text Class" handleInputChange={handleOtherPropsChange} />
                {otherProps.pattern !== 'button' &&
                    <TextInputComponent divClass="pr-8" id="descriptionClass" type="text" value={otherProps.descriptionClass} label="Description Class" placeholder="Give A Description Class" handleInputChange={handleOtherPropsChange} />
                }
                <TextInputComponent divClass="pr-8" id="question" type="text" value={otherProps.question} label="Question" placeholder="Give A Question" handleInputChange={handleOtherPropsChange} />
                <TextInputComponent divClass="pr-8" id="questionHint" type="text" value={otherProps.questionHint} label="Question Hint" placeholder="Give A Question Hint" handleInputChange={handleOtherPropsChange} />
            </div>
        </form>
    )
}

export default CreateOtherProps