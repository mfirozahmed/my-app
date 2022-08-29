import VsCheckbox from "components/checkbox";
import { dummyData } from "components/checkbox/utils";
import { ChangeEvent, FormEvent, useState } from "react"

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

const Checkbox = () => {
    const [data, setData] = useState<dataType[]>([]);
    const [newData, setNewData] = useState<dataType>({ ...initialNewData });
    const [selectedData, setSelectedData] = useState<dataType[]>([]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setNewData({ ...newData, [name]: value });
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (data?.length) {
            const items = [...data];
            items.push(newData);
            setData(items);
        } else {
            setData([newData]);
        }

        setNewData({ ...initialNewData });
    }

    const getData = (data: dataType[]) => {
        setSelectedData(data);
    }

    const handleCheckChange = (data: dataType[]) => {
        if (data.length) {
            setNewData({ ...newData, disabled: true });
        } else {
            setNewData({ ...newData, disabled: false });
        }
    }

    return (
        <div className="h-screen">
            <div className="container mx-auto">
                <h1 className="py-10 text-4xl font-semibold">Check Checkbox Component
                </h1>

                <h3 className="my-4 text-2xl font-medium">Input Data</h3>
                <form className="px-8 py-4 rounded-md bg-gray-300 text-black text-lg font-medium" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap justify-between items-center gap-x-2 gap-y-4">
                        <div className="flex flex-col w-[48%] xl:w-1/4">
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
                        <div className="flex flex-col w-[48%] xl:w-1/4">
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
                        <div className="flex flex-col w-[48%] xl:w-1/4">
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
                        <div className="flex flex-col w-[48%] xl:w-1/4">
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
                        <div className="flex flex-col w-[48%] xl:w-1/4">
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
                        <div className="flex flex-col w-[48%] xl:w-1/4">
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

                <div className="mt-20 flex flex-row">
                    <div className="w-[48%]">
                        <VsCheckbox
                            data={data}
                            prevState={[]}
                            getData={getData}
                        />
                    </div>
                    <div className="w-[48%]">
                        <label htmlFor="">Selected Data</label>
                        <ul>
                            {selectedData?.map(data => (
                                <li key={data.id}>{data.label}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkbox