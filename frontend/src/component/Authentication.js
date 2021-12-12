import React, { useEffect } from "react";
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import { useQuery } from "@apollo/client";
import {GET_USER} from "../graphql/Query";
import Cookies from 'universal-cookie'
import {toast} from 'react-toastify'


export default function Authentication() {

  const Navigate = useNavigate();
  const cookies = new Cookies();

  const [authentication, setAuthentication] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setAuthentication({ ...authentication, [e.target.name]: e.target.value });
  };

    const { data } = useQuery(GET_USER, {
      variables: {
        filter: {
          email: `${authentication.email}`,
          password: `${authentication.password}`,
        },
      },
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataUser = data.userOne

    if(dataUser){
      if(dataUser.state === "pendiente"){
        toast("Usuario a espera de aprobacion")
        
      }else if(dataUser.state === "no autorizado"){
        toast("Usuario no autorizado")
      }else{

        cookies.set("_id", dataUser._id, {path:"/"});
        cookies.set("email", dataUser.email, {path:"/"});
        cookies.set("state", dataUser.state, {path:"/"});
        cookies.set("userType", dataUser.userType, {path:"/"})
        cookies.set("fullName", dataUser.fullName, {path:"/"})

        toast(`Bienvenido ${dataUser.fullName}`)

        Navigate("/home")
      }
      
    }else {
      toast("Usuario incorrecto")
    }
  };

  useEffect(() => {
   if(cookies.get("email")){
    Navigate("/home")
   }
  }, [])

  return (
    <div className="container " style={{ height: " 500px" }}>
    <h2>Bienvenido a tu administrador de proyectos Marte3</h2>
      <div className="row" style={{ height: " 500px" }}>
        <div className="col-md-6 mx-auto p-5">
          <div className="card bg-secondary">
            <div className="card-body">
              <h2>Login</h2>

              <form onSubmit={handleSubmit}>
                <label htmlFor="inputEmail3" className="col-form-label">
                  Email
                </label>
                <div className="form-group p-1">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    autoFocus
                    required
                    onChange={handleInputChange}
                  />
                </div>

                <label htmlFor="inputPassword3" className="col-form-label">
                  Password
                </label>
                <div className="form-group p-1">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="d-flex justify-content-between p-2">
                  <button className="btn btn-primary" >Sign in</button>
                  <Link className="btn btn-primary" to="/register">
                    Register
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
