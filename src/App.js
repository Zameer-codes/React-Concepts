import { useEffect } from 'react';
import './App.css';
import Counter from './components/counter/Counter';
import LocalStorage from './components/local-storage/LocalStorage';
import { JSConcepts } from './JS-concepts/JSConcepts';
import CheckBox from './components/checkbox/CheckBox';
import Dropdown from './components/dropdown/Dropdown';
import Table from './components/table/Table';
import { UseContextHook } from './hooks/default-hooks/useContextHook';
import { UseMemoHook } from './hooks/default-hooks/useMemoHook';
import { UseRefHook } from './hooks/default-hooks/useRefHook';
import { UseReducerHook } from './hooks/default-hooks/useReducerHook';
import UnControlledComponent from './components/controlledanduncontrolled/UnControlledComponent';
import ControlledComponent from './components/controlledanduncontrolled/ControlledComponent';
import { ToDoList } from './components/todolist/ToDoList';
import { PseudoClassConcepts } from './Css-concepts/PseudoClass';
import Movies from './components/movies-app/movies';

function Learning() {
  return (
    <div>
      <h1 className='header'>React Concepts</h1>
      <Movies />
      <LocalStorage />
      <Counter />
      <Dropdown />
      <CheckBox />
      <Table />
      <UseContextHook />
      <UseMemoHook />
      <UseRefHook />
      <UseReducerHook />
      <UnControlledComponent />
      <ControlledComponent />
      <ToDoList />
      <PseudoClassConcepts />
    </div>
  )
}

function App() {
  useEffect(() => {
    JSConcepts();
  }, []);
  return (
    <div>
      <Learning/>
    </div>
  );
}

export default App;
