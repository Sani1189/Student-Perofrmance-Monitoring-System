import { useState, React } from "react";
import "../styles/login.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { setGlobal, getGlobal } from "reactn";



export const Login = () => {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();

  const loginnavigate = (userID, type) => {
    
    if(type== "faculty"){
      Axios.get(`http://localhost:3002/getFaculty/${userID}`).then((response) => {
        const faculty = response.data[0];
        setGlobal({
          user: faculty,
        });

        console.log(getGlobal().user);
        navigate("/faculty/dashboard");
    });
    }
    else if(type== "student"){
      Axios.get(`http://localhost:3002/getStudent/${userID}`).then((response) => {
        const student = response.data[0];
        setGlobal({
          user: student,
        });

        console.log(getGlobal().user);
        navigate("/faculty/dashboard");
    });
    }
  };




  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3002/login", {
      userID: parseInt(userid),
      password: password,
    }).then((response) => {
      console.log(response);
      if (response.data.length > 0) {
        const userID = response.data[0].userID;
        const type = response.data[0].type;
        loginnavigate(userID, type);
      } else {
        alert("Wrong username/password combination!");
      }
    });
  };

  return (
    <div className="mycontainer">
      <h1 className="myheading">Student Performance Monitoring System</h1>
      <form className="myform" onSubmit={handleSubmit}>
        <div className="formlabel">
          <FaUser className="myicons" />
          <input
            type="text"
            id="userid"
            placeholder="userID"
            onChange={(e) => {
              setUserid(e.target.value);
            }}
          />
        </div>
        <div className="formlabel">
          <FaLock className="myicons" />
          <input
            type="password"
            id="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" id="loginbtn">
          Login
        </button>
      </form>
    </div>
  );
};
