import styled from "styled-components";
import { Link } from "react-router-dom";
function register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("form");
  };

  const handleChange = (e) => {
    console.log("object");
  };
  return (
    <>
      <formContainer>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="brand">
            <img src="" alt="" />
            <h1>Real Time Chat</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
        </form>
        <button type="submit">Create User</button>
        <span>
          Already have an account ? <Link to="/login">Login</Link>{" "}
        </span>
      </formContainer>
    </>
  );
}

const formContainer = styled.div``;

export default register;
