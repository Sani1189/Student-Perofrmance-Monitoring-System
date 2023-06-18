import React, { useEffect } from "react";
import Facultynav from "../../facultypages/facultynav";
import "../../../styles/facultycss/faculty.css";
import axios from "axios";
import { useState } from "react";

const ViewQues = () => {
  const [courseID, setCourseID] = useState("");
  const [qtype, setQtype] = useState("");
  const [marks, setMarks] = useState("");
  const [cloNo, setCloNo] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [question, setQuestion] = useState([]);
  const [qID, setQID] = useState("");
  const [course, setCourse] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/getqCourse").then((response) => {
      setCourse(response.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(courseID);
    console.log(qtype);
    if (courseID === "" || qtype === "") {
      alert("Please fill all the fields");
    } else {
      axios
        .get(`http://localhost:3002/getQuestion/${courseID}/${qtype}`)
        .then((response) => {
          console.log(response.data);
          setQuestion(response.data);
        });
    }
  };

  return (
    <div>
      <Facultynav />
      <div className="main-content">
        <div className="grade">
          <h1>View Question</h1>
          <form onSubmit={handleSubmit}>
            <div className="subgrade">
              <label>
                Course ID
                <select
                  className="myselect"
                  value={courseID}
                  onChange={(event) => setCourseID(event.target.value)}
                >
                  <option value="">Select Course</option>
                  {course.length > 0
                    ? [
                        ...new Set(
                          course.map((val) => {
                            return val.courseID;
                          })
                        ),
                      ].map((val) => {
                        return <option value={val}>{val}</option>;
                      })
                    : null}       
                </select>
              </label>
              <label>
                Question Type
                <select
                  className="myselect"
                  value={qtype}
                  onChange={(event) => setQtype(event.target.value)}
                >
                  <option value="">Select Type</option>
                  {course.length > 0
                    ? [
                        ...new Set(
                          course
                            .filter((val) => {
                              return val.courseID === courseID;
                            })
                            .map((val) => {
                              return val.qtype;
                            })
                        ),
                      ].map((val) => {
                        return <option value={val}>{val}</option>;
                      })
                    : null}
                </select>
              </label>
            </div>
            <div className="subgrade">
              <button type="submit">View</button>
            </div>
          </form>
        </div>
        {question.length > 0 ? (
          <div className="viewQues">
            <table>
              <tr>
                <th>Course ID</th>
                <th>Question Type</th>
                <th>Marks</th>
                <th>CLO No</th>
                <th>Difficulty</th>
                <th style={
                  {
                    width: "50%",
                    wordWrap: "break-word"
                  }
                }>Question</th>
              </tr>
              {question.map((val) => {
                return (
                  <tr>
                    <td>{val.courseID}</td>
                    <td>{val.qtype}</td>
                    <td>{val.marks}</td>
                    <td>{val.cloNo}</td>
                    <td>{val.difficulty}</td>
                    <td style={{
                      width: "50%",
                      wordWrap: "break-word"
                    }} >{val.question}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ViewQues;
