import React, { useState } from "react";
import "./Register.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const history = useHistory();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is required.";
    }
    if (!formData.gender) {
      newErrors.gender = "Gender is required.";
    }
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.username) {
      newErrors.username = "Username is required.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%^&*()])[A-Za-z0-9!@#%^&*()]{8,}$/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required.";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Confirm password does not match password.";
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (
      !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
        formData.phoneNumber
      )
    ) {
      newErrors.phoneNumber = "Invalid phone number.";
    }

    setErrors(newErrors);

    // Submit the form if there are no errors
    if (Object.keys(newErrors).length === 0) {
      axios.post("http://localhost:5000/signin", { name: formData.name, gender: formData.gender, email: formData.email, username: formData.username, password: formData.password, phoneNumber: formData.phoneNumber })
        .then((res) => {
          if (res.data === "Added") {
            alert("Account created successfully!");
            history.push({
              pathname: "/",
              state: {
                needsRefresh: true,
              },
            });
          }
          else if (res.data === "error") {
            alert("Error Occured, try again later");
          }
        })
    }
  };

  return (
    <section className="myform-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="form-area signin-form">
              <div className="form-content">
                <h2>MEME App</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non aperiam cum quas quod reprehenderit.</p>
                <img src="" />
              </div>
              <div className="form-input">
                <h2>Signin Form</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p className="error">{errors.name}</p>}
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && <p className="error">{errors.gender}</p>}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="error">{errors.email}</p>}

                  <input type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                  {errors.username && <p className="error">{errors.username}</p>}

                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && <p className="error">{errors.password}</p>}

                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  {errors.confirmPassword && (
                    <p className="error">{errors.confirmPassword}</p>
                  )}

                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                  {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}

                  <button className="myform-btn" type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    //     <div className="registration-page">
    //       <h1>Registration</h1>
    //       <form onSubmit={handleSubmit}>
    //         <input
    //           type="text"
    //           name="name"
    //           placeholder="Name"
    //           value={formData.name}
    //           onChange={handleChange}
    //         />
    //         {errors.name && <p className="error">{errors.name}</p>}
    //         <select
    //           name="gender"
    //           value={formData.gender}
    //           onChange={handleChange}
    //         >
    //           <option value="">Select gender</option>
    //           <option value="male">Male</option>
    //           <option value="female">Female</option>
    //           <option value="other">Other</option>
    //         </select>
    //         {errors.gender && <p className="error">{errors.gender}</p>}
    //         <input
    //           type="email"
    //           name="email"
    //           placeholder="Email"
    //           value={formData.email}
    //           onChange={handleChange}
    //         />
    //         {errors.email && <p className="error">{errors.email}</p>}

    // <input type="text"
    //   name="username"
    //   placeholder="Username"
    //   value={formData.username}
    //   onChange={handleChange}
    // />
    // {errors.username && <p className="error">{errors.username}</p>}

    // <input
    //   type="password"
    //   name="password"
    //   placeholder="Password"
    //   value={formData.password}
    //   onChange={handleChange}
    // />
    // {errors.password && <p className="error">{errors.password}</p>}

    // <input
    //   type="password"
    //   name="confirmPassword"
    //   placeholder="Confirm Password"
    //   value={formData.confirmPassword}
    //   onChange={handleChange}
    // />
    // {errors.confirmPassword && (
    //   <p className="error">{errors.confirmPassword}</p>
    // )}

    // <input
    //   type="text"
    //   name="phoneNumber"
    //   placeholder="Phone Number"
    //   value={formData.phoneNumber}
    //   onChange={handleChange}
    // />
    // {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}

    //         <button type="submit">Submit</button>
    //       </form>
    //     </div>
  );
};

export default RegistrationForm;
