import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

export default function Navbar() {

  const Navigate = useNavigate();

  const cookies = new Cookies();
  const cerrarSesion = () => {
    cookies.remove("_id", { path: "/" });
    cookies.remove("email", { path: "/" });
    cookies.remove("fullName", { path: "/" });
    cookies.remove("userType", { path: "/" })

  }

  const udtate = () =>{
    Navigate(`/update/${cookies.get("_id")}`)
  }
  

  return (
    <div className='p-2'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">Home</Link>
          
         <Link className="navbar-brand" to="/usersManage">Users Manage</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="#">Ver Proyectos</Link>
              <Link className='nav-link' to="/updateUser">Update User</Link>
              <Link className="nav-link" to="/ProgressProject">crear proyecto</Link>
              <Link className="navbar-brand" to="/" onClick={cerrarSesion}>Salir</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
