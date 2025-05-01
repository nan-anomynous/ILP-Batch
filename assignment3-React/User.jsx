import React, { Component } from "react";
import "./User.css";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Guest",
    };
  }

  componentWillUnmount() {
    alert(`Bye ${this.state.name}`);
  }

  handleUnmount = () => {
    this.props.onUnmount();
  }

  greetUser = () => {
    const nameInput = document.getElementById("name").value;
    if (nameInput === "") {
      this.setState({ name: "Guest" }, () => {
        alert(`Hello ${this.state.name}!!`);
      });
    } else {
      this.setState({ name: nameInput }, () => {
        alert(`Hello ${this.state.name}`);
      });
    }
  };

  render() {
    return (
        <div className="classic-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
        />
        <button type="button" onClick={this.greetUser}>SUBMIT</button>
        <button type="button" onClick={this.handleUnmount}>UNMOUNT</button>
      </div>
      
        
      
    );
  }
}