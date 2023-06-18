import React, { useEffect } from "react";
import Facultynav from "../../facultypages/facultynav";
import "../../../styles/facultycss/faculty.css";
import axios from "axios";
import { useState } from "react";
import Chart from "chart.js/auto";

const ViewCOper = () => {
  const [studentID, setStudentID] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [courseId, setCourseId] = useState("");
  const [section, setSection] = useState("");
  const [grade, setGrade] = useState("");
  const [data, setData] = useState([]);
  const [StudentData, setStudentData] = useState([]);

  const [submitClick, setSubmitClick] = useState(false);

  useEffect(() => {
    if (studentID.length === 7) {
      axios
        .get(`http://localhost:3002/getCourse/${studentID}`)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        });
    } else {
      setData([]);
    }
  }, [studentID]);

  useEffect(() => {
    if (
      courseId !== "0" &&
      studentID !== "" &&
      year !== "0" &&
      semester !== "0"
    ) {
      axios
        .get(
          `http://localhost:3002/getGrade/${studentID}/${courseId}/${year}/${semester}`
        )
        .then((response) => {
          setStudentData(response.data);
          setGrade(response.data[0].grade);
        });
    } else {
      setStudentData([]);
    }
  }, [semester, year, courseId, studentID]);

  const coPercentages = {
    "A": [90, 90, 90, 90],
    "A-": [85, 85, 85, 85],
    "B+": [80, 80, 80, 80],
    "B": [75, 75, 75, 75],
    "B-": [70, 70, 70, 70],
    "C+": [65, 65, 65, 65],
    "C": [60, 60, 60, 60],
    "C-": [55, 55, 55, 55],
    "D+": [50, 50, 50, 50],
   "D": [45, 45, 45, 45],
    "F": [0, 0, 0, 0],
  };

  const gradeToPercentages = (grade) => {
    return coPercentages[grade];
  };

  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (chart) {
      chart.destroy();
    }
    if (
      submitClick &&
      section !== "0" &&
      StudentData.length > 0 &&
      year !== "0" &&
      semester !== "0"
    ) {
      const ctx = document.getElementById("myChart").getContext("2d");
      const myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["CO1", "CO2", "CO3", "CO4"],
          datasets: [
            {
              label: "CO Percentage",
              data: gradeToPercentages(StudentData[0].grade),
              backgroundColor: [
                "#ea588b",
                "blue",
                "green",
                "purple",
              ],
              borderColor: [
                "black",
                "black",
                "black",
                "black",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              min: 0,
              ticks: {
                stepSize: 10,
              },
            },
          },
        },
      });
      setChart(myChart);
    }
  }, [grade, section, year, semester,submitClick]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitClick(true);
  };
  return (
    <div>
      <Facultynav />
      <div className="main-content">
        <div className="grade">
          <h1>View Grade</h1>
          <form onSubmit={handleSubmit}>
            <div className="subgrade">
              <label>
                Student ID:
                <input
                  type="text"
                  value={studentID}
                  onChange={(event) => setStudentID(event.target.value)}
                />
              </label>

              <label>
                Course Id:
                <select
                  className="myselect"
                  value={courseId}
                  onChange={(event) => setCourseId(event.target.value)}
                >
                  <option value="0">Select Course</option>
                  {data.length > 0
                    ? [
                        ...new Set(data.map((item) => item.enrolled_course)),
                      ].map((courseValue, index) => (
                        <option key={index} value={courseValue}>
                          {courseValue}
                        </option>
                      ))
                    : null}
                </select>
              </label>
            </div>
            <div className="subgrade">
              <label>
                Year:
                <select
                  className="myselect"
                  value={year}
                  onChange={(event) => setYear(event.target.value)}
                >
                  <option value="0">Select Year</option>
                  {data.length > 0
                    ? [
                        ...new Set(
                          data
                            .filter((item) => item.enrolled_course === courseId)
                            .map((item) => item.educational_year)
                        ),
                      ].map((yearValue, index) => (
                        <option key={index} value={yearValue}>
                          {yearValue}
                        </option>
                      ))
                    : null}
                </select>
              </label>

              <label>
                Semester:
                <select
                  className="myselect"
                  value={semester}
                  onChange={(event) => setSemester(event.target.value)}
                >
                  <option value="0">Select Semester</option>
                  {data.length > 0
                    ? [
                        ...new Set(
                          data
                            .filter(
                              (item) =>
                                item.educational_year === parseInt(year) &&
                                item.enrolled_course === courseId
                            )
                            .map((item) => item.educational_semester)
                        ),
                      ].map((semesterValue, index) => (
                        <option key={index} value={semesterValue}>
                          {semesterValue}
                        </option>
                      ))
                    : null}
                </select>
              </label>
            </div>
            <div className="subgrade">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        {submitClick ? (
          StudentData.length > 0 ? (
            <div className="showGrades">
              <div className="showGradeTable">
                <label>Student ID: {studentID}</label>
                <label>Course ID: {courseId}</label>
                <label>Year: {year}</label>
                <label>Semester: {semester}</label>
                <label>Section: {StudentData[0].enrolled_section}</label>
                <label>Grade: {StudentData[0].grade}</label>
              </div>
              <div className="showGrade">
                <h1>Course Outcome Percentage</h1>
                <canvas id="myChart"></canvas>
              </div>
            </div>
          ) : (
            <div className="showGrades">No Grades to show</div>
          )
        ) : null}
      </div>
    </div>
  );
};

export default ViewCOper;
