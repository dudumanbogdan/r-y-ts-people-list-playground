import React, { useState } from "react";
import { People } from "../interfaces/People";

interface IProps {
    people: People[];
    setPeople: React.Dispatch<React.SetStateAction<People[]>>;
}

const PeopleAdd: React.FC<IProps> = ({ people, setPeople }) => {
    const emptyAddState = {
        id: '0',
        name: '',
        age: '',
        url: '',
        note: ''
    } as People;

    const [input, setInput] = useState(emptyAddState);
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInput({ ...input, [e.target.name]: e.target.value })
    };

    const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setInput({ ...input, [e.target.name]: e.target.value })
    };

    const handleAddItem = (): void => {
        if (!input.name) {
            return;
        }
        const currentId = people && people.length > 0 ? people.length + 1 : 1;

        setPeople([
            ...people, { ...input, id: currentId.toString() }
        ]);

        setInput(emptyAddState);
    }

    return (
        <div className="add-container">
            <input
                type="text"
                placeholder="Name"
                className="add-input"
                name="name"
                value={input.name}
                onChange={handleChangeInput}
            ></input>
            <input
                type="number"
                placeholder="Age"
                name="age"
                className="add-input"
                value={input.age}
                onChange={handleChangeInput}
            ></input>
            <input
                type="text"
                placeholder="Url"
                name="url"
                className="add-input"
                value={input.url}
                onChange={handleChangeInput}
            ></input>
            <textarea
                placeholder="Note"
                className="add-input"
                name="note"
                value={input.note}
                onChange={handleChangeTextArea}
            ></textarea>
            <button className="add-btn" onClick={handleAddItem}>Add item</button>
        </div>
    )
}

export default PeopleAdd;