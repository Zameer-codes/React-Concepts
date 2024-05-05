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


function App() {
  useEffect(() => {
    JSConcepts();
  }, []);
  return (
    <div>
      <h1 className='header'>React Concepts</h1>
      <LocalStorage/>
      <Counter />
      <Dropdown/>
      <CheckBox/>
      <Table/>
      <UseContextHook/>
      <UseMemoHook/>
      <UseRefHook/>
      <UseReducerHook/>
    </div>
  );
}

export default App;
