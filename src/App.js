import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cuser from './Cuser';
import Metamask from './Metamask';
import Metamaskweb from './Metamaskweb';

function App() {
  return (
    <div className="App">
     
       {/* <Metamask/>  */}
       <Metamaskweb/>
      {/* <Cuser/> */}
     
    </div>
  );
}

export default App;
