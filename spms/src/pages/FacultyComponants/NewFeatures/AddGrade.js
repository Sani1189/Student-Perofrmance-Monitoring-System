import React from "react";
import Facultynav from "../../facultypages/facultynav";
import "../../../styles/facultycss/faculty.css";
import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import Papa from "papaparse";

const AddGrade = () => {
  const [studentId, setStudentId] = useState('');
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [course, setCourse] = useState('');
  const [section, setSection] = useState('');
  const [grade, setGrade] = useState('');
  const [csvData, setCsvData] = useState([]);


  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const mydata = results.data.map(row => {
          return {
            studentID: parseInt(row.studentID),
            educational_year: parseInt(row.educational_year),
            educational_semester: row.educational_semester,
            enrolled_course: row.enrolled_course,
            enrolled_section: parseInt(row.enrolled_section),
            grade: row.grade
          }
        });
        setCsvData(mydata);
      }
    });
  }
  const submitFile = (e) => {
    e.preventDefault();
    if (csvData.length > 0) {
      axios.post('http://localhost:3002/uploadGrade', {
        data: csvData
      }).then((response) => {
        alert('Grade added successfully!');
      })

    }
    else {
      alert('Please upload a file!');
    }
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3002/addgrade', {
      studentID: parseInt(studentId),
      educational_year: parseInt(year),
      educational_semester: semester,
      enrolled_course: course,
      enrolled_section: parseInt(section),
      grade: grade
    }).then((response) => {
      console.log(response);
      alert('Grade added successfully!');
    })

  };
  return (
    <div>
      <Facultynav />
      <div className="main-content">
        <div className="grade">
          <h1>Add Grade</h1>
          <form onSubmit={handleSubmit}>
            <div className="subgrade">
              <label>
                Student ID:
                <input
                  type="text"
                  value={studentId}
                  onChange={(event) => setStudentId(event.target.value)}
                />
              </label>
              <label>
                Educational year:
                <input
                  type="text"
                  value={year}
                  onChange={(event) => setYear(event.target.value)}
                />
              </label>
              <label>
                Educational semester:
                <select className="myselect" value={semester} onChange={(event) => setSemester(event.target.value)}>
                  <option value=""></option>
                  <option value="spring">Spring</option>
                  <option value="summer">Summer</option>
                  <option value="autumn">Autumn</option>
                </select>
              </label>
            </div>
            <div className="subgrade">
              <label>
                Enrolled course:
                <select className="myselect" value={course} onChange={(event) => setCourse(event.target.value)}>
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
                Enrolled section:
                <select className="myselect" value={section} onChange={(event) => setSection(event.target.value)}>
                  <option value=""></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
              <label>
                Obtained grade:
                <select className="myselect" value={grade} onChange={(event) => setGrade(event.target.value)}>
                  <option value=""></option>
                  <option value="A">A</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B">B</option>
                  <option value="B-">B-</option>
                  <option value="C+">C+</option>
                  <option value="C">C</option>
                  <option value="C-">C-</option>
                  <option value="D+">D+</option>
                  <option value="D">D</option>
                  <option value="F">F</option>
                  <option value="W">W</option>
                </select>
              </label>
            </div>
            <div className="subgrade">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div className="grade">
          <h1>Upload Grade</h1>
          <form onSubmit={submitFile}>
            <div className="subgrade">
              <label>
                Upload file:
                <input type="file" onChange={handleFileUpload} />
              </label>
            </div>
            <div className="subgrade">
              <button type="submit">Upload</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddGrade;
