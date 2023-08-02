import logo from './logo.svg';
import './App.css';

import {  Counter } from './features/counter/counter';
import CakeView from './features/cake/CakeView';
import IceCreameView from './features/iceCreame/IceCreameView';
import UserView from './features/user/UserView';
import Registration from './Registration';



function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
     <Counter/>
     <CakeView/>
     <IceCreameView/>
     <UserView />
     <Registration/>
    </div>
  );
}

export default App;
