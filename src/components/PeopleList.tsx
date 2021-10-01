import React from "react";
import { People } from '../App';


interface IProps {
    people: People[]
}


const PeopleList: React.FC<IProps> = ({ people }) => {
    const renderList = (): JSX.Element[] => {
        return people.map(person => {
            return (
                <li className="list-container">
                    <div className="list-header">
                        <img className="list-img" src={person.url} alt="url" />
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} years old</p>
                    <p className="list-note">{person.note}</p>
                </li>
            )
        })
    }

    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default PeopleList;