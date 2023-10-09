import React, { useState } from "react";
import "./FeedbackForm.css";
import axios from "axios";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "feedback") {
      setFeedback(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    const newErrors = {};
    if (!name) {
      newErrors.name = "Name is required.";
    }
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!feedback) {
      newErrors.feedback = "Feedback is required.";
    }

    setErrors(newErrors);

    // Submit the form if there are no errors
    if (Object.keys(newErrors).length === 0) {
      axios.post("http://localhost:5000/feedback", { name: name, email: email, feedback: feedback })
			.then((res) => {
				if (res.data === "Done") {
					alert("Feedback Added");
					setEmail("")
          setName("")
          setFeedback("")

				}
				else if (res.data === "error") {
					alert("Error Occured, try again later");
				}
			})
    }
  };

  return (
    <div className="mainContainer2">
    <div className="feedback-form">
      <h1>Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <textarea
          name="feedback"
          placeholder="Feedback"
          value={feedback}
          onChange={handleChange}
        />
        {errors.feedback && <p className="error">{errors.feedback}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default FeedbackForm;
