import React from "react";
import { People } from '../App';


interface IProps {
    people: People[]
}


const PeopleList = ({ people }: IProps) => {
    return (
        <div>
            I am a list
        </div>
    )
}

export default PeopleList;