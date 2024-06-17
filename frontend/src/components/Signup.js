import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-secondary">
      <div className="bg-white  rounded">
        <form className="mx-5 my-3" onSubmit={handleSubmit}>
          <h2>Register</h2>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            id="name"
            placeholder="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            placeholder="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            placeholder="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit" className="w-100 mb-3 rounded btn btn-success">
            Register
          </button>
          <div className="d-flex gap-5">
            <p>Already have a account ?</p>
            <Link to="/login" className="text-decoration-none">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
