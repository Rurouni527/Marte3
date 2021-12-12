import { ToastContainer } from "react-toastify";
import Authentication from "./component/Authentication";
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './component/Register'
import Navbar from "./component/Navbar";
import infoTotalProyecto from "./component/infoTotalProyecto"

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/login" element={<Authentication />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/info" element={<infoTotalProyecto/>} />
      </Routes>
    </Router>
      <ToastContainer />
    </>
  );
}

export default App;
