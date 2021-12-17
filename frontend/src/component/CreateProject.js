import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import { CREATE_PROJECT } from "../graphql/Mutation";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function () {
  const cookies = new Cookies();
  const Navigate = useNavigate();
  
  const initialState = {
    name: "",
    generalObjectives: "",
    specificObjectives: "",
    butget: "",
    idStudent: "",
    leader: {
      id: `${cookies.get("_id")}`,
    },
    state: "inactivo",
    phase: "",
  };

  const [projetc, setProjet] = useState(initialState);
  const [startDate, setStartDate] = useState({ startDate: "" });
  const [endDate, setEndDate] = useState({ endDate: "" });

  const handleOnChange = (e) => {
    setProjet({ ...projetc, [e.target.name]: e.target.value });
  };

  const [createProject] = useMutation(CREATE_PROJECT, {
    variables: {
      record: {
        name: `${projetc.name}`,
        generalObjectives: `${projetc.generalObjectives}`,
        specificObjectives: `${projetc.specificObjectives}`,
        butget: `${projetc.butget}`,
        startDate: `${startDate.startDate}`,
        endDate: `${endDate.endDate}`,
        idStudent: "",
        leader: {
          id: `${projetc.leader.id}`,
        },
        state: `${projetc.state}`,
        phase: `${projetc.phase}`,
      },
    },
  });

  const handleOnChangeDataStart = (fecha) => {
    setStartDate({ ...projetc, startDate: fecha });
    console.log(fecha);
  };

  const handleOnChangeDataEnd = (fecha) => {
    setEndDate({ ...projetc, endDate: fecha });
    console.log(fecha);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const create = async () => {
      await createProject();
    };

    try {
      create();
      toast("Proyecto creado correctamente");
      Navigate("/listProject")
    } catch (error) {
      console.log(error);
      toast("El proyecto no se pudo crear");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div>
            <form
              className="card card-body col-md-5 mx-auto"
              onSubmit={handleSubmit}
            >
              <label className="mt-2">Name</label>
              <div>
                <input
                  className="col-md-12"
                  type="text"
                  name="name"
                  onChange={handleOnChange}
                  autoFocus
                  required
                />
              </div>
              <label className="mt-2">General Objectives</label>
              <div>
                <textarea
                  className="col-md-12"
                  type="text"
                  name="generalObjectives"
                  onChange={handleOnChange}
                  required
                />
              </div>

              <label className="mt-2">Specific Objectives</label>
              <div>
                <textarea
                  className="col-md-12"
                  type="text"
                  name="specificObjectives"
                  onChange={handleOnChange}
                  required
                />
              </div>

              <label className="mt-2">Budget</label>
              <div>
                <input
                  className="col-md-12"
                  type="text"
                  name="butget"
                  onChange={handleOnChange}
                  required
                />
              </div>

              <div className="d-flex justify-content-between ">
                <div>
                  <label className="mt-2">Start Date</label>
                  <div>
                    <Flatpickr
                      onChange={handleOnChangeDataStart}
                      name="startDate"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mt-2">End Date</label>
                  <div>
                    <Flatpickr
                      onChange={handleOnChangeDataEnd}
                      name="endDate"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <button className="btn btn-primary me-5">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
