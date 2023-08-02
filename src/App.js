//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Edits from './Edits';
import Home from './Home';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}>Login</Route>
        <Route path="/home" element={<Home/>}>Home</Route>
        <Route path="/edits" element={<Edits/>}>Edits</Route>
      </Routes>
      </BrowserRouter>
     
        </div>
  );
}

export default App;
