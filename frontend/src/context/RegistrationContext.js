import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userName, setUserName] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          navigate("/");
          console.log(result.data.name);
          setUserName(result.data.name);
        } else if (result.status === 401) {
          console.log("Not Match");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <RegistrationContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        handleSubmit,
        userName,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

export default RegistrationContext;
