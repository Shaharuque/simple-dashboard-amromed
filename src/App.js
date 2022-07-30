import logo from './logo.svg';
import './App.css';
import DashBoard from './components/Dashboard/DashBoard';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Table from './components/Table/Table';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<DashBoard></DashBoard>}></Route>
        <Route path='/home' element={<DashBoard></DashBoard>}></Route>
        <Route path='/table' element={<Table></Table>}></Route>
      </Routes>
    </div>
  );
}

export default App;
