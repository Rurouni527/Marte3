import React, { useState, useEffect } from 'react'
import {useQuery, useMutation, useLazyQuery} from '@apollo/client'
import {GET_USER} from '../graphql/Query'
import {UPDATE_USER} from '../graphql/Mutation'
import {toast} from 'react-toastify'
import Cookies from 'universal-cookie'

export default function UpdateUser() {

    const cookies =  new Cookies();

    const initialState = {
        email: "",
        identificacion: "",
        fullName: "",
        password: ""
      };

    const [dataUser, setDataUser] = useState(initialState)

    const {data, loading} = useQuery(GET_USER, {
        variables:{
            filter: {
                _id: `${cookies.get("_id")}`
            }
        }
    })

    if(loading) return "loading..."

      // const [updateUser, {data:dataUpdate}] = useMutation(UPDATE_USER, {
      //     variables:{
      //         _id: `${cookies.get("_id")}`,
      //         record:{
      //             email: `${dataUser.email}`,
      //             identificacion: `${dataUser.id}`,
      //             name: `${dataUser.name}`,
      //             password: `${dataUser.password}`
      //         }
      //     }
      // })

    const handleInputChange = (e) =>{
        setDataUser({...dataUser, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div>
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
                  value={data.userOne.email}
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
                  value={data.userOne.identificacion}
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
                  value={data.userOne.fullName}
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
                  value={data.userOne.password}
                />
              </div>
                  
                    <div className="mt-5">
                      <button className="btn btn-primary">Update</button>
                    </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
            
        </div>
    )
}
