//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Post from './Post';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './View';
import ViewDetails from './ViewDetails';
import DateCalculator from './DateCalculator';
function App() {
  return (
    <div className="App">
      <DateCalculator/>
         <BrowserRouter>
         <Routes>
           <Route path="/" element={<Post/>}></Route>
           <Route path="/view/:id" element={<View/>}></Route>
           <Route path="/viewdetails" element={<ViewDetails/>}></Route>
         </Routes>
         </BrowserRouter>
          </div>
  );
}

export default App;
