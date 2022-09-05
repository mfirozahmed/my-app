import { ChangeEvent, FormEvent, useState } from 'react';

import TextInputComponent from 'common/textInputComponent';
import VsCheckbox from 'components/checkbox';

const initialNewData = {
    id: "",
    name: "",
    value: "",
    label: "",
    description: "",
    disabled: false,
    hint: "",
}

const isDisabledCheckOption = {
    id: "disable",
    value: "disable",
    label: "Is Disabled?"
}

interface CreateDataType {
    data: DataType[];
    sendData: (items: DataType[]) => void;
}

const CreateData = ({ data, sendData }: CreateDataType) => {
    const [newData, setNewData] = useState<DataType>({ ...initialNewData });

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setNewData({ ...newData, [name]: value });
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (data?.length) {
            const items = [...data];
            items.push(newData);
            sendData(items);
        } else {
            sendData([newData]);
        }

        setNewData({ ...initialNewData });
    }

    const handleCheckChange = (item: DataType[]) => {
        if (item.length) {
            setNewData({ ...newData, disabled: true });
        } else {
            setNewData({ ...newData, disabled: false });
        }
    }

    return (
        <form className="px-8 py-4 rounded-md bg-gray-300 text-black text-lg font-medium" onSubmit={handleSubmit}>
            <div className="flex flex-wrap justify-between gap-x-2 gap-y-4">
                <TextInputComponent divClass="w-3/10" id="id" type="text" value={newData.id} label="Id" placeholder="Give An Unique Id" handleInputChange={handleInputChange} />
                <TextInputComponent divClass="w-3/10" id="name" type="text" value={newData.name} label="Name (Optional)" placeholder="Give A Name" handleInputChange={handleInputChange} />
                <TextInputComponent divClass="w-3/10" id="value" type="text" value={newData.value} label="Value" placeholder="Give A Value" handleInputChange={handleInputChange} />
                <TextInputComponent divClass="w-3/10" id="label" type="text" value={newData.label} label="Label (Optional)" placeholder="Give A Label" handleInputChange={handleInputChange} />
                <TextInputComponent divClass="w-3/10" id="description" type="text" value={newData.description} label="Description (Optional)" placeholder="Give A Description" handleInputChange={handleInputChange} />
                <TextInputComponent divClass="w-3/10" id="hint" type="text" value={newData.hint} label="Hint (Optional" placeholder="Give A Hint (Optional" handleInputChange={handleInputChange} />

                <VsCheckbox
                    data={[isDisabledCheckOption]}
                    prevState={newData.disabled ? [isDisabledCheckOption] : []}
                    getData={handleCheckChange}
                    componentClass="gap-0"
                    itemClass="px-0"
                    boxColor='dark'
                />

            </div>
            <button className="my-4 px-4 py-1 border border-black rounded-md bg-gray-600 hover:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-40 disabled:bg-gray-600 transition-all duration-300 text-white" type="submit" disabled={!newData.id || !newData.value.toString().length} >Add</button>
        </form>
    )
}

export default CreateData