
import React from 'react'
import {Provider} from 'react-redux'
import './App.css'
import store from './services/store';
import Contador from './components/Contador/Contador';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux</h1>
        <Contador/>
      </div>
    </Provider>
  );
}


export default App
 