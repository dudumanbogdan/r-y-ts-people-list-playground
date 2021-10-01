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
  const [people, setPeople] = useState<IState["people"]>([]);


  return (
    <div className="App">
      <h1>List of persons</h1>
      <PeopleList people={people} />
    </div>
  );
}

export default App;
