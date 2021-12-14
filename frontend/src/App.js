import { ToastContainer } from "react-toastify";
import Authentication from "./component/Authentication";
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './component/Register'
import Navbar from "./component/Navbar";
import UsersManage from './component/UsersManage'
import Home from './component/Home'
import ListProject from "./component/ListProject";
import DataProject from "./component/DataProject";

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/listProject" element={<ListProject/>} />
        <Route path="/usersManage" element={<UsersManage/>} />
        <Route path="/update/:id" element={<Register/>} />
        <Route path="/dataProject/:id" element={<DataProject/>} />


        

      </Routes>
    </Router>
      <ToastContainer />
    </>
  );
}

export default App;
