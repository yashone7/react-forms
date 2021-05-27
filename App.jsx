import React, { useState, useEffect } from "react";
import Posts from "./components/Posts";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    shouldRemember: false,
  });

  const [isBlurred, setIsBlurred] = useState({
    email: false,
    password: false,
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (e.target.type === "checkbox") {
      console.log("test");
      setFormData({ ...formData, [e.target.id]: !shouldRemember });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isBlurred.email && !isBlurred.password) {
      alert("please fill all field");
    } else console.log(formData);
  };

  const handleFocus = (e) => {
    setIsBlurred({ ...isBlurred, [e.target.id]: false });
    console.log(isBlurred);
  };

  const handleBlur = (e) => {
    e.target.value > 0 && setIsBlurred({ ...isBlurred, [e.target.id]: true });
    console.log(isBlurred);
  };

  const { email, password, shouldRemember } = formData;
  const { email: _email, password: _password } = isBlurred;
  return (
    <div className="container">
      <div className="columns is-centered mt-2">
        <div className="column is-4">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="email" className="label">
                Email
              </label>
              <div className="control">
                <input
                  type="text"
                  value={email}
                  id="email"
                  name="email"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className={`input ${email ? "" : "is-danger"}`}
                  onChange={handleChange}
                />
                {email ? "" : <p className="help is-danger">required</p>}
              </div>
            </div>
            <div className="field">
              <label htmlFor="password" className="label">
                Password
              </label>
              <div className="control">
                <input
                  type="password"
                  value={password}
                  id="password"
                  name="password"
                  className={`input ${password ? "" : "is-danger"}`}
                  onBlur={(e) => handleBlur(e)}
                  onFocus={(e) => handleFocus(e)}
                  onChange={handleChange}
                />
                {password ? "" : <p className="help is-danger">required</p>}
              </div>
            </div>
            <div className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  id="shouldRemember"
                  checked={shouldRemember}
                  onChange={handleChange}
                />
                Remember me
              </label>
            </div>
            <div className="control">
              <button className="button is-info is-light" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>{/* <Posts /> */}</div>
    </div>
  );
}

export default App;
