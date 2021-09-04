import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUsers(result.data.reverse());
  };

  // for delete Module
  // const deleteUser = async (id) => {
  //   await axios.delete(`http://localhost:3003/users/${id}`);
  //   loadUsers();
  // };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
      </div>
      <div>
        <table class="table border shadow table-striped table-hover">
          <thead>
            <tr class="table-dark">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/users/${user.id}`} class="btn btn-primary m-1">
                    View
                  </Link>

                  <Link
                    to={`/users/edit/${user.id}`}
                    class="btn btn-success m-1"
                  >
                    Edit
                  </Link>

                  <Link
                    to={`/users/delete/${user.id}`}
                    class="btn btn-danger m-1"
                    // onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
