import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RegistrationContext from "../context/RegistrationContext";

const Home = () => {
  const { userName } = useContext(RegistrationContext);
  return (
    <div className="d-flex justify-content-center flex-column align-items-center vh-100 ">
      {userName ? (
        <h1 className="text-center">
          Hello {userName}, <br /> You are successfully Logined in
        </h1>
      ) : (
        <>
          <h1>Welcome to My Webpage</h1>
          <div className="d-flex gap-5 mt-2">
            <p>
              If you are a new user please{" "}
              <Link to="/register" className="text-decoration-none">
                Signup
              </Link>
            </p>
            <p>
              Already have a account?{" "}
              <Link to="/login" className="text-decoration-none">
                Login
              </Link>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
