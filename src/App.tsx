import React, { useState } from 'react';
import './App.css';
import PeopleList from './components/PeopleList';

export interface People {
  name: string;
  age: number;
  url: string;
  note?: string;
}

interface IState {
  people: People[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Random name1",
      url: "https://picsum.photos/id/237/200/300",
      age: 17,
      note: "Sample note"
    },
    {
      name: "Random name2",
      url: "https://picsum.photos/seed/picsum/200/300",
      age: 18,
      note: "Sample note 2"
    }
  ]);


  return (
    <div className="App">
      <h1>List of persons</h1>
      <PeopleList people={people} />
    </div>
  );
}

export default App;
