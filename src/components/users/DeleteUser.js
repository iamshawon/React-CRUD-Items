import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";

const DeleteUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data.reverse);
  };

  // for delete Module
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUser();
    history.push("/");
  };

  let history = useHistory();

  return (
    <div className="container py-5">
      <h1 className="mb-3"> Are u want to delete??</h1>
      <div>
        <button
          onClick={() => deleteUser(id)}
          type="button"
          class="btn btn-danger"
        >
          Delete
        </button>
        <Link to="/" className="m-2">
          <button type="button" class="btn btn-primary">
            Cancel
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DeleteUser;
