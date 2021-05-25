import React, { Component } from "react";

class App extends Component {
  state = {
    email: "",
    password: "",
    shouldRemember: false,
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value,
    });
    if (e.target.type === "checkbox") {
      this.setState({
        ...this.state,
        shouldRemember: !this.state.shouldRemember,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    const { email, password, shouldRemember } = this.state;
    return (
      <div className="container">
        <div className="columns is-centered mt-2">
          <div className="column is-4">
            <form onSubmit={this.handleSubmit}>
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
                    className="input"
                    onChange={this.handleChange}
                  />
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
                    className="input"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="control">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    checked={shouldRemember}
                    onChange={this.handleChange}
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
      </div>
    );
  }
}

export default App;
