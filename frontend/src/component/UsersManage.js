import React from "react";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_USERS_PENING } from "../graphql/Query";
import { UPDATE_USER } from "../graphql/Mutation";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function UsersManage() {
  const [selecUser, setSelecUser] = useState({ id: "" });
  const Navigate = useNavigate();

  const [updateUser] = useMutation(UPDATE_USER);

  const { loading, error, data } = useQuery(GET_USERS_PENING, {
    variables: {
      filter: {
        state: "pendiente",
      },
    },
  });

  if (loading) return <p>loading...</p>;
  if (error) return <p>error</p>;

  const userSelec = (_id) => {
    setSelecUser({ ...selecUser, id: _id });
  };

  const handleinputChange = (e) => {
    const action = e.target.value;

    const update = async () => {
      await updateUser({
        variables: {
          _id: `${selecUser.id}`,
          record: { state: `${e.target.value}` },
        },
      });
    };

    try {
      update();
      if (action === "autorizado") {
        toast("Usuario Autorizado");
      } else if (action === "no autorizado") {
        toast("Usuario no Autorizado");
      }
      Navigate("/usersManage");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <table className="table container">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">User Type</th>
            <th scope="col">State</th>
          </tr>
        </thead>
        <tbody>
          {data.userMany.map((user, i) => (
            <tr key={user._id}>
              <th scope="row">{i + 1}</th>

              <td>{user.fullName}</td>
              <td>{user.state}</td>
              <td>
                <select
                  name="action"
                  className="form-select"
                  aria-label="Default select example"
                  onClick={() => {
                    userSelec(user._id);
                  }}
                  onChange={handleinputChange}
                >
                  <option selected>Pendiente</option>
                  <option value={"autorizado"}>Autorizado</option>
                  <option value={"no autorizado"}>No Autorizado</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
