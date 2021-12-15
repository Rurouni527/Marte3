import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import {CREATE_PROGRESS} from '../graphql/Mutation'
import Cookies from 'universal-cookie'
import {useParams} from 'react-router-dom'
import { toast } from "react-toastify";

export default function ProgressProject() {
  const cookies = new Cookies();
  const params = useParams();

    const initialState = {
        idProject: "",
        idStudent: "",
        description: "",
        observations: ""
    }

    const [progress, setProgress] = useState(initialState);

    const [create] = useMutation(CREATE_PROGRESS, {
        variables:{
            record:{
              idProject: `${params.id}`,
              idStudent: `${cookies.get("_id")}`,
              description: `${progress.description}`,
              observations: ""
            }
        }
    })

    const handleOnChange = (e) => {
      setProgress({...progress, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
      e.preventDefault();

      const createProgress = async () => {
        await create();
      }

      try {
        createProgress();
        toast("Avance creado")
      } catch (error) {
        console.log(error)
        toast("No se pudo crear el avance")
      }
    }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="mt-5">
            <form
              className="card card-body col-md-5 mx-auto"
              onSubmit={handleSubmit}
            >
              <h1 className="">Write your progress</h1>

              <label className="mt-2">Description</label>
              <div>
                <textarea
                  className="col-md-12"
                  type="text"
                  name="description"
                  onChange={handleOnChange}
                  autoFocus
                  required
                />
              </div>

              <div className="mt-5">
                <button className="btn btn-primary me-5">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
