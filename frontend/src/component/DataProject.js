import React from "react";
import {useQuery} from "@apollo/client"
import {useParams} from "react-router-dom"
import {GET_PROJECT} from "../graphql/Query"
import Cookies from "universal-cookie";

function DataProject() {

    const cookies=new Cookies()

    const params=useParams()

    const {data, loading}=useQuery (GET_PROJECT, {
      variables:{_id:`${params.id}`
    }
  })

    let userRegistered=false

    console.log(params.id)

    if (loading) return "loading"

    console.log(data)

    // console.log(data.projectById)

    // console.log(data.projectById.idStudent)
    // if (data.projectById.idStudent) { 
    //     if(data.projectById.idStudent===cookies.get("_id")){
    //         userRegistered=true
    //     }
    // }
  return (
    <>
      <div className="container p-2">
        <div className="mb-3 row">
          <div className="col-md-5 mx-auto p-5">
            <form>
              <label className="mt-2">Name</label>

              <div>
                <input
                  className="col-md-12"
                  type="text"
                  name="name"
                  autoFocus
                  required
                />
              </div>

              <label className="mt-2">General objectives</label>

              <div>
                <input
                  className="col-md-12"
                  type="text"
                  name="General Objectives"
                  required
                />
              </div>

              <label className="mt-2">Specific Objectives</label>

              <div>
                <input
                  className="col-md-12"
                  type="text"
                  required
                />
              </div>

              <label className="mt-2">Start Date</label>

              <div>
                <input
                  className="col-md-12"
                  type="text"
                  required
                />
              </div>

              <label className="mt-2">End Date</label>
              <div>
                <input
                  className="col-md-12"
                  type="text"
                  required
                />
              </div>
              <label className="mt-2">Leader</label>
              <div>
                <input
                  className="col-md-12"
                  type="text"
                  required
                />
              </div>
              <label className="mt-2">Phase</label>
              <div>
                <input
                  className="col-md-12"
                  type="text"
                  required
                />
              </div>
              {
                  userRegistered ? <button> Crear avance</button>: <button>Inscribirse</button>
              }

              
              </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataProject;
