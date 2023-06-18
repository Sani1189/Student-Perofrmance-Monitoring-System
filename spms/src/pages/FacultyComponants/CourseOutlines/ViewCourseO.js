import React, { useEffect } from 'react'
import Facultynav from '../../facultypages/facultynav'
import '../../../styles/facultycss/faculty.css'
import '../../../styles/facultycss/courseoutlineview.css'
import { useState } from 'react'
import axios from 'axios'
import { PDFDownloadLink, Document, Page, Text, View } from '@react-pdf/renderer';
import { Component } from 'react';
import { render } from 'react-dom';
import CourseOutline from './CourseOutline';


const ViewCourseO = () => {

  const [courseCode, setCourseCode] = useState("");

  const [courses, setCourses] = useState([]);
  const [courseoutline, setCourseoutline] = useState([]);
  const [cloMatrix, setCloMatrix] = useState([]);
  const [bloomsLearning, setBloomsLearning] = useState([]);
  const [courseAssessment, setCourseAssessment] = useState([]);
  const [lessonplan, setLessonplan] = useState([]);
  const [courseContent, setCourseContent] = useState([]);
  const [data, setData] = useState({
    courseoutline: [],
    cloMatrix: [],
    bloomsLearning: [],
    courseAssessment: [],
    lessonplan: [],
    courseContent: []  
  });

  const [clicked, setClicked] = useState(false);



  useEffect(() => {
    axios.get('http://localhost:3002/courseoutline/view')
      .then(res => {
        setCourses(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (courseCode === "") {
      alert("Please select course code");
      setClicked(false);
      return;
    }
    else {
      axios.get(`http://localhost:3002/courseoutline/main/${courseCode}`)
        .then(res => {
          setCourseoutline(res.data)
        }
        )
      axios.get(`http://localhost:3002/courseoutline/cloMatrix/${courseCode}`)
        .then(res => {
          setCloMatrix(res.data)

        }
        )
      axios.get(`http://localhost:3002/courseoutline/bloomsLearningLevel/${courseCode}`)
        .then(res => {
          setBloomsLearning(res.data)
        }
        )
      axios.get(`http://localhost:3002/courseoutline/assessment/${courseCode}`)
        .then(res => {
          setCourseAssessment(res.data)
        }
        )
      axios.get(`http://localhost:3002/courseoutline/lessonplan/${courseCode}`)
        .then(res => {
          setLessonplan(res.data)
        }
        )
      axios.get(`http://localhost:3002/courseoutline/courseContent/${courseCode}`)
        .then(res => {
          setCourseContent(res.data)
        }
        )
      const data = {
        courseoutline: courseoutline,
        cloMatrix: cloMatrix,
        bloomsLearning: bloomsLearning,
        courseAssessment: courseAssessment,
        lessonplan: lessonplan,
        courseContent: courseContent

      }
      setData(data);
      if(data.courseoutline[0] === undefined || data.cloMatrix[0] === undefined || data.bloomsLearning[0] === undefined || data.courseAssessment[0] === undefined || data.lessonplan[0] === undefined || data.courseContent[0] === undefined){
        setClicked(false);
      }

      else{
        alert("Data loaded");
        setClicked(true);
      }

    }
  }



  return (
    <div>
      <Facultynav />
      <div className="main-content">
        <form onSubmit={handleSubmit} className="course-form">
          <div>
            <label htmlFor="courseCode">Course Code:</label>
            <select name="courseCode" id="courseCode" onChange={(e) => setCourseCode(e.target.value)}>
              <option value="">Select Course Code</option>
              {courses.map((course) => (
                <option value={course.courseCode}>{course.courseCode}</option>
              ))}
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
        {clicked ? (
          <div className="tempdiv">
            <PDFDownloadLink document={<CourseOutline courseoutline={courseoutline} cloMatrix={cloMatrix} bloomsLearning={bloomsLearning} courseAssessment={courseAssessment} lessonplan={lessonplan} courseContent={courseContent} />} fileName="CourseOutline.pdf">
              {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
            </PDFDownloadLink>
            </div>
        ) : (
          <div></div>
        )}

      </div>

    </div>

  )
}

export default ViewCourseO