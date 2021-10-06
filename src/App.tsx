import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from "./state/index";
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

  const stateAccount = useSelector((state: any) => state.account);
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);

  console.log('reduxState', stateAccount);

  return (
    <div className="App">
      <h1>List of persons</h1>
      <PeopleList people={people} />
      <PeopleAdd people={people} setPeople={setPeople} />

      <section>
        <button onClick={() => depositMoney(5)}>Deposit 5 units</button>
        <button onClick={() => withdrawMoney(1)}>Withdraw 1 units</button>
        <span>Current deposit value: {stateAccount}</span>
      </section>
    </div>
  );
}

export default App;
