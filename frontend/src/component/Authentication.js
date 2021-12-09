import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom'
import { useQuery } from "@apollo/client";
import {GET_USER} from "../graphql/Query";
import {toast} from 'react-toastify'

export const DataUser = {
  id: "",
  userType: ""
}

export default function Authentication() {
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

    if(data.userOne){
      if(data.userOne.state === "pendiente"){
        toast("Usuario a espera de aprobacion")
        console.log(data.userOne.state);
        
      }else if(data.userOne.state === "noautorizado"){
        toast("Usuario no autorizado")
      }else{

        toast("usuario correcto")
        DataUser.id = data.userOne._id;
        DataUser.userType = data.userOne.userType;

        console.log(DataUser)
      }
      
    }else {
      toast("Usuario incorrecto")
    }
  };

  return (
    <div className="container " style={{ height: " 500px" }}>
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
                  <button className="btn btn-primary">Sign in</button>
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
