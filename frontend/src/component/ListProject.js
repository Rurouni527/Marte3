import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../graphql/Query";
import "./ListProject.css";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function ListProject() {

  const cookies = new Cookies();

  const Navigate = useNavigate();

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if(!cookies.get("_id")){
      Navigate("/")
     }
  }, [])

  const { data, loading, refetch } = useQuery(GET_PROJECTS);

  if (loading) return "loading";

  const formateProject = () => {
    data.projectAll.map((project) =>{
      return {
        ...project,
        createdAt: project.createdAt ? new Date(project.createdAt) : new Date(),
        updatedAt: project.updatedAt ? new Date(project.updatedAt) : new Date()
      }
    }).sort((a,b) => b.createdAt.getTime() - a.createdAt.getTime());

    setProjects(formateProject);
  }



  refetch()

  return (
    <div className="container p-4">
      <div>
        <button className="btn btn-primary" onClick={() => {Navigate("/createProject")}}>
          Create Project
        </button>
      </div>
      <div className="row">
        {data.projectAll.map((project) => (
          <div className="col-md-4">
            <div
              onClick={() => Navigate(`/dataProject/${project._id}`)}
              className="card card-body m-2 project"
            >
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
