import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { name, username, email, phone, website } = user;

  const onSubmitForm = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    history.push("/");
  };

  let history = useHistory();

  //For edit Module
  const { id } = useParams();

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Edit Page</h1>
      </div>

      <div className="w-75 mx-auto shadow p-4">
        <h4 className="text-center mb-4">Edit this User</h4>
        <form onSubmit={(e) => onSubmitForm(e)}>
          <div className="form-group mb-3">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
              className="form-control form-control-lg"
              placeholder="Enter your Name"
              required
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
              className="form-control form-control-lg"
              placeholder="Enter your Username"
              required
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
              className="form-control form-control-lg"
              placeholder="Enter your Email Addrss"
              required
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
              className="form-control form-control-lg"
              placeholder="Enter your Phone Number"
              required
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="text"
              name="website"
              value={website}
              onChange={(e) => onInputChange(e)}
              className="form-control form-control-lg"
              placeholder="Enter your Website"
              required
            />
          </div>

          <div class="d-grid gap-2 mb-3">
            <button type="submit" class="btn btn-warning">
              Update User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
