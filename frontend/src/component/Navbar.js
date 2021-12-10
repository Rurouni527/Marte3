import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='p-2'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/usersManage">Users Manage</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="#">Ver Proyectos</Link>
              <Link className="nav-link" to="/update/:id">Actualizar Datos</Link>
              <Link className="nav-link disabled" to="#" tabIndex={-1} aria-disabled="true">Disabled</Link>
            </div>
          </div>
        </div>
      </nav>
        </div>
    )
}
