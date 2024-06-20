import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RegistrationContext from "../context/RegistrationContext";

const Login = () => {
  const { email, setEmail, password, setPassword, handleSubmit } =
    useContext(RegistrationContext);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-secondary">
      <div className="bg-white  rounded">
        <form className="mx-5 my-3" onSubmit={handleSubmit}>
          <h2>Login</h2>
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
            <p>New User?</p>
            <Link to="/register" className="text-decoration-none">
              Signup
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
