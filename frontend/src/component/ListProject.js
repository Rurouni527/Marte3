import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../graphql/Query";
import "./ListProject.css"
import {useNavigate} from "react-router-dom"

function ListProject() {
    const Navigate=useNavigate()
  const { data, loading } = useQuery(GET_PROJECTS);
  if (loading) return "loading";
  return (
    <div className="container p-4">
      <div>
        <button className="btn btn-primary">Create Project</button>
      </div>
      <div className="row">
        {data.projectAll.map((project) => (
          <div className="col-md-4">
            <div onClick={()=> Navigate (`/dataProject/${project._id}`)} className="card card-body m-2 project">
              <div>
                <div>
                  <h1>{project.name}</h1>
                </div>
                <h4 className="mt-3">start Date</h4>
                <div>{project.startDate}</div>
                <h4 className="mt-3">end Date</h4>
                <div>{project.endDate}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListProject;
