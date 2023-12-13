import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

//logo
import logolinkup from "../assets/logoLinkUp.png";
import { loginRoute } from "../utils/APIRoutes";

//COMPONENT
function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  //handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const { password, username } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem("chat-app-user", JSON.stringify(data.user));
      }
      navigate("/");
    }
  };

  //handle Change
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleValidation = () => {
    const { password, username } = values;
    if (password === "") {
      toast.error("PASSWORD is required", toastOptions);
      return false;
    } else if (username.length === "") {
      toast.error("USERNAME is required", toastOptions);
      return false;
    }
    return true;
  };
  return (
    <>
      <FormContainer>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="brand">
            <img src={logolinkup} alt="logo" />
            <h1>LinkUp</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
            min="3"
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
        </form>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
        <span>
          Do not have an account ? <Link to="/register">Register</Link>{" "}
        </span>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

//Styles
const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #191919;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      width: 80px;
    }
    h1 {
      color: #ffdbc3;
      text-transform: uppercase;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    background-color: #0f0f0f;
    padding: 3rem 5rem;
    border-radius: 2rem;
    input {
      background-color: transparent;
      padding: 1rem;
      border-radius: 0.5rem;
      border: solid #ffdbc3 1px;
      color: #ffdbc3;
      width: 100%;
      font-size: 1rem;
      &:focus {
        border: #ffdbc3 0.1rem solid;
        outline: none;
      }
    }
  }
  button {
    background-color: #5c4b99;
    color: #ffdbc3;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    font-weight: bold;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #ffdbc3;
      color: #0f0f0f;
    }
  }
  span {
    color: #ffdbc3;
    font-weight: lighter;
    a {
      color: #ffdbc3;
      font-size: 1.1rem;
      font-weight: 800;
      text-decoration: none;
    }
  }
`;

export default Login;
