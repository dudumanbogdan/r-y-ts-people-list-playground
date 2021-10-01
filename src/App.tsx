import React, { useState } from 'react';
import './App.css';
import PeopleAdd from './components/PeopleAdd';
import PeopleList from './components/PeopleList';
import { IPeopleProp } from './interfaces/IPeopleProp';
import { People } from './interfaces/People';

function App() {
  const [people, setPeople] = useState<IPeopleProp["people"]>([
    {
      id: "1",
      name: "Random name1",
      url: "https://picsum.photos/id/237/200/300",
      age: "17",
      note: "Sample note"
    } as People,
    {
      id: "2",
      name: "Random name2",
      url: "https://picsum.photos/seed/picsum/200/300",
      age: "18",
      note: "Sample note 2"
    } as People
  ]);


  return (
    <div className="App">
      <h1>List of persons</h1>
      <PeopleList people={people} />
      <PeopleAdd people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
