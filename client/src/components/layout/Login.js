import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import axios from "axios"
import meme from './meme.jpg';

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const newErrors = {};
    if (!username) {
      newErrors.username = "Username is required.";
    }
    if (!password) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);


    if (Object.keys(newErrors).length === 0) {
      axios.post("http://localhost:5000/login", { username: username, password: password })
        .then((res) => {
          if (res.data === "Valid") {
            history.push({
              pathname: "/meme",
              state: {
                needsRefresh: true,
              },
            });
          }
          else if (res.data === "Invalid") {
            alert("Invalid Username or Passeword");
          }
          else if (res.data === "error") {
            alert("Error Occured, try again later.");
          }
        })
    }
  };



  return (
    <section className="myform-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="form-area login-form">
              <div className="form-content">
                <h2>MEME App</h2>
                <p>when nothing goes right..... go left</p>
                <img src={meme} alt="meme image" height={300} width={200} />
              </div>
              <div className="form-input">
                <h2>Login Form</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={handleChange}
                  />
                  {errors.username && <p className="error">{errors.username}</p>}
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleChange}
                  />
                  {errors.password && <p className="error">{errors.password}</p>}
                  <button className="myform-btn" type="submit">Login</button>
                  <button className="myform-btn" type="button" onClick={() => history.push("/Register")}>Register</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <div className="login-page">
    //   <h1>Login</h1>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       name="username"
    //       placeholder="Username"
    //       value={username}
    //       onChange={handleChange}
    //     />
    //     {errors.username && <p className="error">{errors.username}</p>}
    //     <input
    //       type="password"
    //       name="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={handleChange}
    //     />
    //     {errors.password && <p className="error">{errors.password}</p>}
    //     <button type="submit">Login</button>
    //     <button type="button" onClick={() => history.push("/Register")}>Register</button>
    //   </form>
    // </div>
  );
};

export default LoginForm;