
import { useState } from "react"

import VsCheckbox from "components/checkbox";

import CreateData from "features/checkbox/createData";
import CreateOtherProps from "features/checkbox/createOtherProps";

import { dummyData } from "../data";


const initialOtherProps: OtherPropsType = {
    containerStyle: "block",
    size: "md",
    boxBorderStyle: "default",
    boxColor: "default",
    alignment: "default",
    pattern: "default",

    componentClass: "",
    questionLabelClass: "",
    containerClass: "",
    itemClass: "",
    inputClass: "",
    buttonClass: "",
    labelClass: "",
    hintClass: "",
    hintIconClass: "",
    hintTextClass: "",
    descriptionClass: "",

    question: "",
    questionHint: "",
}


const Checkbox = () => {
    const [data, setData] = useState<DataType[]>(dummyData);
    const [otherProps, setOtherProps] = useState({ ...initialOtherProps })
    const [selectedData, setSelectedData] = useState<DataType[]>([]);

    const getData = (data: DataType[]) => {
        setSelectedData(data);
    }

    const handleRemoveData = (event: React.MouseEvent<HTMLSpanElement>) => {
        const removeDataId = event.currentTarget.dataset.item;
        let tempData = data.filter(item => item.id !== removeDataId);
        setData(tempData);
        tempData = selectedData.filter(item => item.id !== removeDataId);
        setSelectedData(tempData);
    }

    return (
        <div className="h-screen">
            <div className="container mx-auto">
                <h1 className="py-10 text-4xl font-semibold">Check Checkbox Component
                </h1>

                <div className="w-full mb-10">
                    <h3 className="my-4 text-2xl font-medium">Input Data</h3>
                    <CreateData data={data} sendData={(data) => setData(data)} />
                </div>

                <h3 className="my-4 text-2xl font-medium">Data</h3>
                <div className="mb-10 flex flex-wrap items-center gap-2">
                    {data?.length ? data.map(item => (
                        <p key={item.id} className="relative px-5 pt-4 pb-3 bg-blue-300 rounded-md text-black font-medium">
                            <label>{item.label ? item.label : "(No Label)"}</label>
                            <span data-item={item.id} className="absolute top-0 right-1 text-sm text-red-700 cursor-pointer" onClick={handleRemoveData}>X</span>
                        </p>
                    )) :
                        <p>No Data Found!!</p>
                    }
                </div>

                <div className="pb-20 flex flex-row justify-between">
                    <div className="w-3/10">
                        <h3 className="my-4 text-2xl font-medium">Other Props</h3>
                        <CreateOtherProps otherProps={otherProps} sendData={(data) => setOtherProps(data)} />
                    </div>
                    <div className="w-3/10">
                        <h3 className="my-4 text-2xl font-medium">Component</h3>
                        <VsCheckbox
                            containerStyle={otherProps.containerStyle}
                            size={otherProps.size}
                            boxBorderStyle={otherProps.boxBorderStyle}
                            boxColor={otherProps.boxColor}
                            alignment={otherProps.alignment}
                            pattern={otherProps.pattern}

                            componentClass={otherProps.componentClass}
                            questionLabelClass={otherProps.questionLabelClass}
                            containerClass={otherProps.containerClass}
                            itemClass={otherProps.itemClass}
                            inputClass={otherProps.inputClass}
                            buttonClass={otherProps.buttonClass}
                            labelClass={otherProps.labelClass}
                            hintClass={otherProps.hintClass}
                            hintIconClass={otherProps.hintIconClass}
                            hintTextClass={otherProps.hintTextClass}
                            descriptionClass={otherProps.descriptionClass}

                            question={otherProps.question}
                            questionHint={otherProps.questionHint}

                            data={data}
                            prevState={selectedData}
                            onChange={getData}
                        />
                    </div>
                    <div className="w-3/10">
                        <h3 className="my-4 text-2xl font-medium">Selected Data</h3>
                        <ul>
                            {selectedData?.length ? selectedData.map(data => (
                                <li key={data.id} className="mb-2 px-4 py-2 w-max border border-black rounded-md bg-green-700 font-medium">{data.label}</li>
                            )) : <li>No Data is selected!!</li>}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkbox