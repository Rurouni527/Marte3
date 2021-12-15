import { ToastContainer } from "react-toastify";
import Authentication from "./component/Authentication";
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './component/Register'
import Navbar from "./component/Navbar";
import UsersManage from './component/UsersManage'
import Home from './component/Home'
import UpdateUser from './component/UpdateUser'
import CreateProject from './component/CreateProject'
import ProgressProject from './component/ProgressProject'

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/usersManage" element={<UsersManage/>} />
        <Route path="/updateUser" element={<UpdateUser/>} />
        <Route path="/progressProject" element={<ProgressProject/>} />
      </Routes>
    </Router>
      <ToastContainer />
    </>
  );
}

export default App;
