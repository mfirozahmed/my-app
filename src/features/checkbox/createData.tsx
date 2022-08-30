import { ChangeEvent, FormEvent, useState } from 'react';
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
                <div className="flex flex-col w-[30%]">
                    <label className="my-1" htmlFor="id">Id</label>
                    <input
                        id="id"
                        type="text"
                        name="id"
                        className="rounded-md"
                        value={newData.id}
                        placeholder="Give An Unique Id"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="flex flex-col w-[30%]">
                    <label className="my-1" htmlFor="name">Name (Optional)</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        className="rounded-md"
                        value={newData.name}
                        placeholder="Give A Name"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="flex flex-col w-[30%]">
                    <label className="my-1" htmlFor="value">Value</label>
                    <input
                        id="value"
                        type="text"
                        name="value"
                        className="rounded-md"
                        value={newData.value}
                        placeholder="Give A Value"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="flex flex-col w-[30%]">
                    <label className="my-1" htmlFor="label">Label (Optional)</label>
                    <input
                        id="label"
                        type="text"
                        name="label"
                        className="rounded-md"
                        value={newData.label}
                        placeholder="Give A Label"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="flex flex-col w-[30%]">
                    <label className="my-1" htmlFor="description">Description (Optional)</label>
                    <input
                        id="description"
                        type="text"
                        name="description"
                        className="rounded-md"
                        value={newData.description}
                        placeholder="Give A Description"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="flex flex-col w-[30%]">
                    <label className="my-1" htmlFor="hint">Hint (Optional)</label>
                    <input
                        id="hint"
                        type="text"
                        name="hint"
                        className="rounded-md"
                        value={newData.hint}
                        placeholder="Give A Hint"
                        onChange={handleInputChange}
                    />
                </div>

                <VsCheckbox
                    data={[isDisabledCheckOption]}
                    prevState={newData.disabled ? [isDisabledCheckOption] : []}
                    getData={handleCheckChange}
                    componentClass="gap-0"
                    itemClass="px-0"
                />

            </div>
            <button className="my-4 px-4 py-1 border border-black rounded-md bg-gray-600 hover:bg-gray-500 disabled:cursor-not-allowed disabled:bg-gray-500 transition-all duration-300 text-white" type="submit" disabled={!newData.id || !newData.value.toString().length} >Add</button>
        </form>
    )
}

export default CreateData