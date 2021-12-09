import { ToastContainer } from "react-toastify";
import Authentication from "./component/Authentication";
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './component/Register'
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/login" element={<Authentication />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
      <ToastContainer />
    </>
  );
}

export default App;
