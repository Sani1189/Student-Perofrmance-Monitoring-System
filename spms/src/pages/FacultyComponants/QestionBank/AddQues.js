import Facultynav from "../../facultypages/facultynav";
import "../../../styles/facultycss/faculty.css";
import { useState, React, useEffect } from "react";
import axios from "axios";

const AddQues = () => {
  const [question, setQuestion] = useState("");
  const [courseID, setCourseID] = useState("");
  const [qtype, setQtype] = useState("");
  const [marks, setMarks] = useState("");
  const [cloNo, setCloNo] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(question);
    console.log(courseID);
    console.log(qtype);
    console.log(marks);
    if(question==="" || courseID==="" || qtype==="" || marks==="" || cloNo==="" || difficulty===""){
      alert("Please fill all the fields");
    }
    else{
      axios.post("http://localhost:3002/addQuestion", {
      courseID: courseID,
      question: question,
      qtype: qtype,
      marks: marks,
      cloNo: cloNo,
      difficulty: difficulty,
    });
    alert("Question added successfully!");
    }
  };
  return (
    <div>
      <Facultynav />
      <div className="main-content">
        <div className="grade">
          <h1>Add Question</h1>
          <form onSubmit={handleSubmit}>
            <div className="subgrade">
              <label>
                Course ID
                <select
                  className="myselect"
                  value={courseID}
                  onChange={(event) => setCourseID(event.target.value)}
                >
                  <option value=""></option>
                  <option value="CSE101">CSE101</option>
                  <option value="CSE104">CSE104</option>
                  <option value="CSE202">CSE202</option>
                  <option value="CSE303">CSE303</option>
                  <option value="CSE211">CSE211</option>
                  <option value="CSE214">CSE214</option>
                  <option value="CSE213">CSE213</option>
                </select>
              </label>
              <label>
                Question Type
                <select
                  className="myselect"
                  value={qtype}
                  onChange={(event) => setQtype(event.target.value)}
                >
                  <option value=""></option>
                  <option value="quiz">Quiz</option>
                  <option value="mid">Mid</option>
                  <option value="final">Final</option>
                </select>
              </label>
              <label>
                Difficulty Level
                <select className="myselect" value={difficulty} onChange={(event) => setDifficulty(event.target.value)}>
                  <option value=""></option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                  </select>
              </label>
            </div>
            <div className="subgrade">
            <label>
                Marks
                <input
                  type="text"
                  value={marks}
                  onChange={(event) => setMarks(event.target.value)}
                />
              </label>
              <label>
                CLO No
                <select className="myselect" value={cloNo} onChange={(event) => setCloNo(event.target.value)}>
                  <option value=""></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  </select>
              </label>
            </div>

            <div className="subgrade">
              <label>
                Question
                <textarea
                  className="myarea"
                  value={question}
                  onChange={(event) => setQuestion(event.target.value)}
                ></textarea>
              </label>
            </div>
            <div className="subgrade">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddQues;
