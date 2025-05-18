import "./App.css";
import axios from "axios";

function App() {
  const getAllUsers = async () => {
    const response = await axios.get("http://localhost:5261/users");
    console.log(response.data);
  };
  const updateUser = async () => {
    const response = await axios.put(`http://localhost:5261/user/update?id=${1}`);
    console.log(response.data);
  };
  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5261/users/get?id=${1}`);
    console.log(response.data);
  };
  const addUser = async () => {
    const response = await axios.post("http://localhost:5261/users/add",{id:2});
    console.log(response.data);
  };
  const deleteUser = async () => {
    const response =await  axios.delete(`http://localhost:5261/users/delete?id=${2}`);
    console.log(response.data);
  };
  const buttonStyle = {
    margin: "8px",
    padding: "12px 26px",
    background: "linear-gradient(to right, #6a11cb, #2575fc)",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease",
  };

  return (
    <div className="App">
      <h1>HELLO USER</h1>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={updateUser} style={buttonStyle}>
          UPDATE USER
        </button>
        <button onClick={deleteUser} style={buttonStyle}>
          DELETE USER
        </button>
        <button onClick={addUser} style={buttonStyle}>
          ADD USER
        </button>
        <button onClick={getAllUsers} style={buttonStyle}>
          GET ALL USERS
        </button>
        <button onClick={getUserById} style={buttonStyle}>
          GET USER BY ID
        </button>
      </div>
    </div>
  );
}

export default App;
