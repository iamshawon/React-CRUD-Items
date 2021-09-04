import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ReadUser = () => {
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
    setUser(result.data);
  };

  return (
    <div className="container py-4">
      <h3 className="display-6"> User id: {id}</h3>

      <hr />
      <div>
        <ul className="list-group w-50">
          <li className="list-group-item">Name: {user.name}</li>
          <li className="list-group-item">Username: {user.username}</li>
          <li className="list-group-item">Email: {user.email}</li>
          <li className="list-group-item">Phone: {user.phone}</li>
          <li className="list-group-item">Website: {user.website}</li>
        </ul>
      </div>

      <div className="py-4">
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
      </div>
    </div>
  );
};

export default ReadUser;
