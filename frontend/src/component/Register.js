import React from "react";
import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_USER } from "../graphql/Mutation";
import { GET_USER } from "../graphql/Query";
import {useNavigate, useParams} from 'react-router-dom'
import { toast } from "react-toastify";
import Cookies from 'universal-cookie'

export default function Register() {
  const cookies = new Cookies()

  const params = useParams();

  const initialState = {
    email: "",
    id: "",
    name: "",
    password: "",
    typeUser: "",
    state: "pendiente",
  };

  const [user, setUser] = useState(initialState);
  const Navigate = useNavigate();

  //definicion de la mutacion
  const [createUser] = useMutation(CREATE_USER, {
    variables: {
      record: {
        email: `${user.email}`,
        identificacion: `${user.id}`,
        fullName: `${user.name}`,
        password: `${user.password}`,
        userType: `${user.typeUser}`,
        state: `${user.state}`,
      },
    },
  });

  const {data} = useQuery(GET_USER, {
    variables: {
        filter: {
          OR: [{email:`${user.email}` }, {identificacion: `${user.id}`}]
        },
    },
  })

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
     e.preventDefault();

    //realiza la mutacion
    const crear = async () => {
      await createUser();
    };

    if(data.userOne){
        console.log(data.userOne)
        toast("Usuario existente");
    }else{
        try {
            crear();
            toast("El usuario se activara en 24 horas");
            Navigate("/login")
          } catch (error) {
            toast("El usuario no se pudo crear");
          }
    }
  };

  useEffect(() => {
    if(!cookies.get("_id")){
     Navigate("/")
    }
   }, [])

 
  return (
    <>
      <div className="container p-2">
        <div className="mb-3 row">
          <div className="col-md-5 mx-auto p-5">
            <form onSubmit={handleSubmit}>
              <label className="mt-2">Email</label>

              <div>
                <input
                  className="col-md-12"
                  type="email"
                  name="email"
                  placeholder="ejemplo@gmail.com"
                  onChange={handleInputChange}
                  autoFocus
                  required
                />
              </div>

              <label className="mt-2">ID</label>

              <div>
                <input
                  className="col-md-12"
                  type="text"
                  name="id"
                  placeholder="123456789"
                  onChange={handleInputChange}
                  required
                />
              </div>

              <label className="mt-2">Name</label>

              <div>
                <input
                  className="col-md-12"
                  type="text"
                  name="name"
                  placeholder="Pepito Perez"
                  onChange={handleInputChange}
                  required
                />
              </div>

              <label className="mt-2">Password</label>

              <div>
                <input
                  className="col-md-12"
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={handleInputChange}
                  required
                />
              </div>

              <label className="mt-2">Type User</label>

              <select
                name="typeUser"
                className="form-select"
                aria-label="Default select example"
                onChange={handleInputChange}
              >
                <option selected>...</option>
                <option value={"student"}>student</option>
                <option value={"administrator"}>Administrator</option>
                <option value={"leader"}>Leader</option>
              </select>

              
              {
                params.id ? (
                  <div className="mt-5">
                  <button className="btn btn-primary">Update</button>
                  </div>
                ):(
                  <div className="mt-5">
                  <button onClick={() =>{Navigate("/")}} className="btn btn-primary me-5">Behind</button>
                <button className="btn btn-primary">Register</button>
                {
                  console.log(params.id)
                }
                </div>
                )
              }
             
             
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
