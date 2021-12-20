import React from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'

export default function Navbar() {

  const cookies = new Cookies();
  const cerrarSesion = () => {
    cookies.remove("_id", { path: "/" });
    cookies.remove("email", { path: "/" });
    cookies.remove("fullName", { path: "/" });
    cookies.remove("userType", { path: "/" })

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

              <Link className="nav-link" to="/listProject">See Project</Link>
              <Link className="nav-link" to="/updateUser">Update data</Link>

              <Link className="navbar-brand" to="/" onClick={cerrarSesion}>Salir</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
