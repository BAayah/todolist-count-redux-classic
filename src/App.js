import { Provider } from 'react-redux';
import './App.css';
import { createStore } from 'redux';
import { useState } from 'react';

import rootReducer from "./store/reducers"
import TodoList from './components/TodoList';
import { Counter } from './components/Counter';

const store = createStore(rootReducer)

function App() {
  const [switchComponent, setSwitch] = useState(false)
  return (
    <div className='App'>
      <Provider store={store}>
        <button onClick={() => setSwitch(!switchComponent)}>switch</button>
        {switchComponent ? <Counter /> : <TodoList />}
        {/* <TodoList /> */}
        {/* <Counter /> */}
      </Provider>
    </div>
  );
}

export default App;
