import React from 'react'
import Facultynav from '../../facultypages/facultynav'
import '../../../styles/facultycss/courseoutline.css'
import { useState } from 'react'
import axios, * as others from 'axios'

const AddCourseO = () => {
  const [courseCode, setCourseCode] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  const [courseType, setCourseType] = useState("");
  const [creditValue, setCreditValue] = useState("");
  const [contactHours, setContactHours] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseObjective, setCourseObjective] = useState("");
  const [coursePolicy, setCoursePolicy] = useState("");
  const [academicDishonesty, setAcademicDishonesty] = useState("");
  const [studentDisabilities, setStudentDisabilities] = useState("");
  const [nondiscriminationPolicy, setNondiscriminationPolicy] = useState("");
  const [prerequisite, setPrerequisite] = useState("");
  const [courseContent, setCourseContent] = useState(1);
  const [cloMatrixNo, setCloMatrixNo] = useState(1);
  const [courseReference, setCourseReference] = useState("");
  const [assessmentNo, setAssessmentNo] = useState(1);

  const [assessment, setAssessment] = useState({
    assessmentNo: 1,
    assesmentNo: [],
    assesmentType: [],
    assesmentTools: [],
    marksDistribution: [],
    bloomsCatagory: [],
    totalMarks: []
  });

  const assessmentInputs= [];
  for (let i = 1; i <= assessmentNo; i++) {
    assessmentInputs.push(
      <tr key={`assesment-${i}`}>
        <td className="smallrow"><input type="text" id={`assesmentType-${i}`} onChange={(e) => handleAssesmentTypeChange(e, i)} /></td>
        <td className="largerow"><input type="text" id={`assesmentTools-${i}`} onChange={(e) => handleAssesmentToolsChange(e, i)} /></td>
        <td className="smallrow"><input type="text" id={`marksDistribution-${i}`} onChange={(e) => handleMarksDistributionChange(e, i)} /></td>
        <td className="smallrow"><input type="text" id={`bloomsCatagory-${i}`} onChange={(e) => handleBloomsCatagoryChange(e, i)} /></td>
        <td className="smallrow"><input type="text" id={`totalMarks-${i}`} onChange={(e) => handleTotalMarksChange(e, i)} /></td>
      </tr>
    );
  }

  const handleAssesmentTypeChange = (e, i) => {
    const newAssesmentType = [...assessment.assesmentType];
    newAssesmentType[i - 1] = e.target.value;
    setAssessment({ ...assessment, assesmentType: newAssesmentType });
  };

  const handleAssesmentToolsChange = (e, i) => {
    const newAssesmentTools = [...assessment.assesmentTools];
    newAssesmentTools[i - 1] = e.target.value;
    setAssessment({ ...assessment, assesmentTools: newAssesmentTools });
  };

  const handleMarksDistributionChange = (e, i) => {
    const newMarksDistribution = [...assessment.marksDistribution];
    newMarksDistribution[i - 1] = e.target.value;
    setAssessment({ ...assessment, marksDistribution: newMarksDistribution });
  };

  const handleBloomsCatagoryChange = (e, i) => {
    const newBloomsCatagory = [...assessment.bloomsCatagory];
    newBloomsCatagory[i - 1] = e.target.value;
    setAssessment({ ...assessment, bloomsCatagory: newBloomsCatagory });
  };

  const handleTotalMarksChange = (e, i) => {
    const newTotalMarks = [...assessment.totalMarks];
    newTotalMarks[i - 1] = parseInt(e.target.value);
    setAssessment({ ...assessment, totalMarks: newTotalMarks });
  };


  const [lessonplanNo, setLessonplanNo] = useState(1);
  const [lessonplan, setLessonplan] = useState({
    lessonplanNo: 1,
    noOfWeeks: [],
    topics: [],
    teachingLearningStrategy: [],
    assessmentStrategy: [],
    coRespondingClo: []
  });
  const lessonplanInputs = [];

  for (let i = 1; i <= lessonplanNo; i++) {
    lessonplanInputs.push(
      <tr key={`lessonplan-${i}`}>
        <td className="smallrow"><input type="text" id={`noOfWeeks-${i}`} onChange={(e) => handleNoOfWeeksChange(e, i)} /></td>
        <td className="largerow"><input type="text" id={`topics-${i}`} onChange={(e) => handleTopicsChange(e, i)} /></td>
        <td className="largerow"><input type="text" id={`teachingLearningStrategy-${i}`} onChange={(e) => handleTeachingLearningStrategyChange(e, i)} /></td>
        <td className="largerow"><input type="text" id={`assessmentStrategy-${i}`} onChange={(e) => handleAssessmentStrategyChange(e, i)} /></td>
        <td className="largerow"><input type="text" id={`coRespondingClo-${i}`} onChange={(e) => handleCoRespondingCloChange(e, i)} /></td>
      </tr>
    );
  }

  const handleNoOfWeeksChange = (e, i) => {
    const newNoOfWeeks = [...lessonplan.noOfWeeks];
    newNoOfWeeks[i - 1] = parseInt(e.target.value);
    setLessonplan({ ...lessonplan, noOfWeeks: newNoOfWeeks });
  };

  const handleTopicsChange = (e, i) => {
    const newTopics = [...lessonplan.topics];
    newTopics[i - 1] = e.target.value;
    setLessonplan({ ...lessonplan, topics: newTopics });
  };

  const handleTeachingLearningStrategyChange = (e, i) => {
    const newTeachingLearningStrategy = [...lessonplan.teachingLearningStrategy];
    newTeachingLearningStrategy[i - 1] = e.target.value;
    setLessonplan({ ...lessonplan, teachingLearningStrategy: newTeachingLearningStrategy });
  };

  const handleAssessmentStrategyChange = (e, i) => {
    const newAssessmentStrategy = [...lessonplan.assessmentStrategy];
    newAssessmentStrategy[i - 1] = e.target.value;
    setLessonplan({ ...lessonplan, assessmentStrategy: newAssessmentStrategy });
  };

  const handleCoRespondingCloChange = (e, i) => {
    const newCoRespondingClo = [...lessonplan.coRespondingClo];
    newCoRespondingClo[i - 1] = e.target.value;
    setLessonplan({ ...lessonplan, coRespondingClo: newCoRespondingClo });
  };




  const [cloMatrix, setCloMatrix] = useState({
    cloMatrixNo: 1,
    cloName: [],
    cloMatrixDes:[],
    ploAssessed: [],
    ploCloCorelations: []
  });
  const [boomsLeaarningLevel, setBoomsLeaarningLevel] = useState({
    C: [],
    P: [],
    A: [],
    S: []
  });
  const cloMatrixInputs = [];

  for (let i = 1; i <= cloMatrixNo; i++) {
    cloMatrixInputs.push(
      <tr key={`cloMatrix-${i}`}>
        <td className="smallrow"><input type="text" id={`cloName-${i}`} onChange={(e) => handleCloNameChange(e,i)} /></td>
        <td className="largerow">
          <input type="text" id={`cloMatrixDes-${i}`} onChange={(e) => handleCloMatrixDesChange(e, i)} />
        </td>
        <td className="subrow">
          <tr >
            <td className="minicell"><input type="text" id={`boomsLeaarningLevel-C-${i}`} onChange={(e) => handleBoomsLeaarningLevelCChange(e, i)} /></td>
            <td className="minicell"><input type="text" id={`boomsLeaarningLevel-P-${i}`} onChange={(e) => handleBoomsLeaarningLevelPChange(e, i)} /></td>
            <td className="minicell"><input type="text" id={`boomsLeaarningLevel-A-${i}`} onChange={(e) => handleBoomsLeaarningLevelAChange(e, i)} /></td>
            <td className="minicell"><input type="text" id={`boomsLeaarningLevel-S-${i}`} onChange={(e) => handleBoomsLeaarningLevelSChange(e, i)} /></td>
          </tr>
        </td>
        <td className="smallrow"><input type="text" id={`ploAssessed-${i}`} onChange={(e) => handlePloAssessedChange(e, i)} /></td>
        <td className="smallrow"><input type="text" id={`ploCloCorelations-${i}`} onChange={(e) => handlePloCloCorelationsChange(e, i)} /></td>
      </tr>
    );
  }

  

  const handleBoomsLeaarningLevelCChange = (event, index) => {
    const newC = [...boomsLeaarningLevel.C];
    newC[index - 1] = parseInt(event.target.value);
    setBoomsLeaarningLevel({ ...boomsLeaarningLevel, C: newC });
  };

  const handleBoomsLeaarningLevelPChange = (event, index) => {
    const newP = [...boomsLeaarningLevel.P];
    newP[index - 1] = parseInt(event.target.value);
    setBoomsLeaarningLevel({ ...boomsLeaarningLevel, P: newP });
  };

  const handleBoomsLeaarningLevelAChange = (event, index) => {
    const newA = [...boomsLeaarningLevel.A];
    newA[index - 1] = parseInt(event.target.value);
    setBoomsLeaarningLevel({ ...boomsLeaarningLevel, A: newA });
  };

  const handleBoomsLeaarningLevelSChange = (event, index) => {
    const newS = [...boomsLeaarningLevel.S];
    newS[index - 1] = parseInt(event.target.value);
    setBoomsLeaarningLevel({ ...boomsLeaarningLevel, S: newS });
  };

  const handleCloNameChange = (e,index) => {
    const newCloName = [...cloMatrix.cloName];
    newCloName[index - 1] = e.target.value;
    setCloMatrix({ ...cloMatrix, cloName: newCloName });
  };


  const handleCloMatrixDesChange = (event, index) => {
    const newCloMatrixDes = [...cloMatrix.cloMatrixDes];
    newCloMatrixDes[index - 1] = event.target.value;
    setCloMatrix({ ...cloMatrix, cloMatrixDes: newCloMatrixDes });
  };

  const handlePloAssessedChange = (event, index) => {
    const newPloAssessed = [...cloMatrix.ploAssessed];
    newPloAssessed[index - 1] = event.target.value;
    setCloMatrix({ ...cloMatrix, ploAssessed: newPloAssessed });
  };

  const handlePloCloCorelationsChange = (event, index) => {
    const newPloCloCorelations = [...cloMatrix.ploCloCorelations];
    newPloCloCorelations[index - 1] = parseInt(event.target.value);
    setCloMatrix({ ...cloMatrix, ploCloCorelations: newPloCloCorelations });
  };


  // Keep track of the form data
  const [formData, setFormData] = useState({
    courseContent: 1,
    titles: [],
    descriptions: []
  });

  // Generate the necessary title and description inputs based on the selected value
  const titleInputs = [];

  for (let i = 1; i <= courseContent; i++) {
    titleInputs.push(
      <div className="my-title">
        <div key={`title-${i}`} className="titles">
          <label htmlFor={`title-${i}`}>Title {i}:</label>
          <input type="text" id={`title-${i}`} onChange={(e) => handleTitleChange(e, i)} />
        </div>
        <div key={`description-${i}`} className="descriptions">
          <label htmlFor={`description-${i}`}>Description {i}:</label>
          <textarea id={`description-${i}`} rows={4} onChange={(e) => handleDescriptionChange(e, i)} />
        </div>
      </div>
    );
  }

  // Update the titles array in formData when the user types something in a title input field
  const handleTitleChange = (event, index) => {
    const newTitles = [...formData.titles];
    newTitles[index - 1] = event.target.value;
    setFormData({ ...formData, titles: newTitles });
  };

  // Update the descriptions array in formData when the user types something in a description input field
  const handleDescriptionChange = (event, index) => {
    const newDescriptions = [...formData.descriptions];
    newDescriptions[index - 1] = event.target.value;
    setFormData({ ...formData, descriptions: newDescriptions });
  };

  // Send the form data to the server when the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();
    if(courseCode === "") {
      alert("Please fill all the fields");
    } else {
      const courseoutline = {
        courseCode,
        courseTitle,
        courseType,
        creditValue,
        coursePolicy,
        contactHours,
        courseObjective,
        courseDescription,
        academicDishonesty,
        nondiscriminationPolicy,
        prerequisite,
        studentDisabilities,
        courseReference
      };


      
      axios.post("http://localhost:3002/courseoutline/create",{
        courseoutline: courseoutline
      });
      axios.post("http://localhost:3002/clomatrix/create",{
        courseCode: courseCode,
        cloMatrix: cloMatrix
      });
      
      axios.post("http://localhost:3002/boomsleaarninglevel/create",{
        courseCode: courseCode,
        boomsLeaarningLevel: boomsLeaarningLevel
      });
      axios.post("http://localhost:3002/lessonplan/create",{
        courseCode: courseCode,
        lessonplan: lessonplan
      });
      axios.post("http://localhost:3002/assesment/create",{
        courseCode: courseCode,
        assessment: assessment
      });
      axios.post("http://localhost:3002/coursecontent/create",{
        courseCode: courseCode,
        formData: formData
      });
      alert("Course Outline Created");       
    }
 
  };
  return (
    <div>
      <Facultynav />
      <div className="main-content">
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="sub-content">
              <label>
                Course Code:
                <input type="text" value={courseCode} onChange={(e) => setCourseCode(
                  e.target.value.replace(/\s+/g, '').toUpperCase()
                )} />
              </label>
              <label>
                Course Title:
                <input type="text" value={courseTitle} onChange={(e) => setCourseTitle(e.target.value)} />
              </label>
              <label>
                Course Type:
                <input type="text" value={courseType} onChange={(e) => setCourseType(e.target.value)} />
              </label>
            </div>
            <div className="sub-content">
              <label>
                Credit Value:
                <input type="text" value={creditValue} onChange={(e) => setCreditValue(e.target.value)} />
              </label>
              <label>
                Contact Hours per Week:
                <input type="text" value={contactHours} onChange={(e) => setContactHours(e.target.value)} />
              </label>
              <label>
                Prerequisite(if any):
                <input type="text" value={prerequisite} onChange={(e) => setPrerequisite(e.target.value)} />
              </label>

            </div>
            <label>
              Course Description:
              <textarea value={courseDescription} onChange={(e) => setCourseDescription(e.target.value)} />
            </label>
            <label>
              Course Objective:
              <textarea value={courseObjective} onChange={(e) => setCourseObjective(e.target.value)} />
            </label>
            <label>
              Course Policy:
              <textarea value={coursePolicy} onChange={(e) => setCoursePolicy(e.target.value)} />
            </label>
            <label>
              Academic Dishonesty Section:
              <textarea value={academicDishonesty} onChange={(e) => setAcademicDishonesty(e.target.value)} />
            </label>
            <label>
              Student with Disabilities and Stress Section:
              <textarea value={studentDisabilities} onChange={(e) => setStudentDisabilities(e.target.value)} />
            </label>
            <label>
              Non-discrimination Policy Section:
              <textarea value={nondiscriminationPolicy} onChange={(e) => setNondiscriminationPolicy(e.target.value)} />
            </label>
            <div className="contentNo">
              {/* Render the dropdown menu */}
              <label htmlFor="courseContent">Course Content number:</label>
              <select
                id="courseContent"
                value={courseContent}
                onChange={(e) => {
                  setCourseContent(parseInt(e.target.value));
                  setFormData({
                    courseContent: parseInt(e.target.value),
                    titles: Array(parseInt(e.target.value)).fill(""),
                    descriptions: Array(parseInt(e.target.value)).fill("")
                  });
                }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div className="titleDiv">{titleInputs}</div>
            <div className="contentNo">
              <label htmlFor="cloMatrixNo">
                Number of CLO Matrix:
              </label>
              <select
                id="cloMatrixNo"
                value={cloMatrixNo}
                onChange={(e) => {
                  setCloMatrixNo(parseInt(e.target.value));
                  setCloMatrix({
                    cloMatrixNo: parseInt(e.target.value),
                    cloName: Array(parseInt(e.target.value)).fill(""),
                    cloMatrixDes: Array(parseInt(e.target.value)).fill(""),
                    ploAssessed: Array(parseInt(e.target.value)).fill(""),
                    ploCloCorelations: Array(parseInt(e.target.value)).fill(""),
                  });
                }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="cloMatrixDiv">
              <table>
                <thead>
                  <tr>
                    <th>CLOs</th>
                    <th>CO Description</th>
                    <th className="subrow">
                      <tr className="fullrow">
                        <th >Bloom's Learning Level</th>
                      </tr>
                      <tr>
                        <th className="minicell">C</th>
                        <th className="minicell">P</th>
                        <th className="minicell">A</th>
                        <th className="minicell">S</th>
                      </tr>


                    </th>
                    <th>PLO Assessed</th>
                    <th>PLO-CLO Correlations</th>
                  </tr>
                </thead>
                <tbody>
                  {cloMatrixInputs}
                </tbody>

              </table>
            </div>
            <div className="contentNo">
              <label htmlFor="lessonplanNo">
                Number of Lesson Plan:
              </label>
              <select
                id="lessonplanNo"
                value={lessonplanNo}
                onChange={(e) => {
                  setLessonplanNo(parseInt(e.target.value));
                  setLessonplan({
                    lessonplanNo: parseInt(e.target.value),
                    noOfWeeks: Array(parseInt(e.target.value)).fill(""),
                    topics: Array(parseInt(e.target.value)).fill(""),
                    teachingLearningStrategy: Array(parseInt(e.target.value)).fill(""),
                    assessmentStrategy: Array(parseInt(e.target.value)).fill(""),
                    coRespondingClo: Array(parseInt(e.target.value)).fill("")
                  });
                }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div className="lessonplanDiv">
              <table>
                <thead>
                  <tr>
                    <th>Weeks</th>
                    <th>Topics</th>
                    <th>Teaching-Learning Strategy</th>
                    <th>Assessment Strategy</th>
                    <th>Corresponding to CLOs</th>
                  </tr>
                </thead>
                <tbody>
                  {lessonplanInputs}
                </tbody>
              </table>
            </div>
            <div className="contentNo">
              <label htmlFor="assessmentNo">
                Number of Assessment:
              </label>
              <select
                id="assessmentNo"
                value={assessmentNo}
                onChange={(e) => {
                  setAssessmentNo(parseInt(e.target.value));
                  setAssessment({
                    assessmentNo: parseInt(e.target.value),
                    assesmentType: Array(parseInt(e.target.value)).fill(""),
                    assesmentTools: Array(parseInt(e.target.value)).fill(""),
                    marksDistribution: Array(parseInt(e.target.value)).fill(""),
                    bloomsCatagory: Array(parseInt(e.target.value)).fill(""),
                    totalMarks: Array(parseInt(e.target.value)).fill("")
                  });
                }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                </select>
            </div>
            <div className="assessmentDiv">
              <table>
                <thead>
                  <tr>
                    <th>Assessment Type</th>
                    <th>Assessment Tools</th>
                    <th>Marks Distribution</th>
                    <th>Bloom's Catagory</th>
                    <th>Total Marks</th>
                  </tr>
                </thead>
                <tbody>
                  {assessmentInputs}
                </tbody>
              </table>
            </div>
            <label >
              Course Reference:
              <textarea className="reference" value={courseReference} onChange={(e) => setCourseReference(e.target.value)} />
            </label>
            <div className="sub-content" >
            <button type="submit">Submit</button>
            </div>


           
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddCourseO