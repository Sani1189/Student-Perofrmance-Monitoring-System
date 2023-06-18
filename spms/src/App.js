import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import ProgWA from './pages/FacultyComponants/PloAnalysis/ProgWA';
import DeptWA from './pages/FacultyComponants/PloAnalysis/DeptWA';
import SchoolWA from './pages/FacultyComponants/PloAnalysis/SchoolWA';
import StudentWA from './pages/FacultyComponants/PloAnalysis/StudentWA';
import CourseWA from './pages/FacultyComponants/PloAnalysis/CourseWA';
import CourseWAc from './pages/FacultyComponants/CoPoAchievement/CourseWAc';
import ProgWAc from './pages/FacultyComponants/CoPoAchievement/ProgWAc';
import DepWAc from './pages/FacultyComponants/CoPoAchievement/DepWAc';
import SchoolWAc from './pages/FacultyComponants/CoPoAchievement/SchoolWAc';
import AddQues from './pages/FacultyComponants/QestionBank/AddQues';
import ViewQues from './pages/FacultyComponants/QestionBank/ViewQues';
import AddCourseO from './pages/FacultyComponants/CourseOutlines/AddCourseO';
import ViewCourseO from './pages/FacultyComponants/CourseOutlines/ViewCourseO';
import CourseWSP from './pages/FacultyComponants/StudentPerformances/CourseWSP';
import ProgWSP from './pages/FacultyComponants/StudentPerformances/ProgWSP';
import DepWSP from './pages/FacultyComponants/StudentPerformances/DepWSP';
import SchoolWSP from './pages/FacultyComponants/StudentPerformances/SchoolWSP';
import InstructorWSP from './pages/FacultyComponants/StudentPerformances/InstructorWSP';
import AddGrade from './pages/FacultyComponants/NewFeatures/AddGrade';
import ViewCOper from './pages/FacultyComponants/NewFeatures/ViewCOper';
import { Faculty } from './pages/facultypages/Faculty';
import CourseWC from './pages/FacultyComponants/PloComparison/CourseWC';
import StudentWC from './pages/FacultyComponants/PloComparison/StudentWC';
import StudentWAc from './pages/FacultyComponants/CoPoAchievement/StudentWAc';





function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/faculty/dashboard" element={<Faculty />} />
        <Route path="/faculty/plo-analysis-course" element={<CourseWA />} />
        <Route path="/faculty/plo-analysis-program" element={<ProgWA />} />
        <Route path="/faculty/plo-analysis-department" element={<DeptWA />} />
        <Route path="/faculty/plo-analysis-student" element={<StudentWA />} />
        <Route path="/faculty/plo-analysis-school" element={<SchoolWA />} />
        <Route path="/faculty/plo-comparison-course" element={<CourseWC />} />
        <Route path="/faculty/plo-comparison-student" element={<StudentWC />} />

        <Route
          path="/faculty/co-po-achievements-course"
          element={<CourseWAc />}
        />
        <Route path="/faculty/co-po-achievements-student" element={<StudentWAc />} />
        <Route
          path="/faculty/co-po-achievements-program"
          element={<ProgWAc />}
        />
        <Route
          path="/faculty/co-po-achievements-department"
          element={<DepWAc />}
        />
        <Route path="/faculty/co-po-achievements-school" element={<SchoolWAc />} />
        <Route path="/faculty/question-bank-add" element={<AddQues />} />
        <Route path="/faculty/question-bank-view" element={<ViewQues />} />
        <Route path="/faculty/course-outlines-add" element={<AddCourseO />} />
        <Route path="/faculty/course-outlines-view" element={<ViewCourseO />} />
        <Route
          path="/faculty/student-performance-course"
          element={<CourseWSP />}
        />
        <Route
          path="/faculty/student-performance-program"
          element={<ProgWSP />}
        />
        <Route
          path="/faculty/student-performance-department"
          element={<DepWSP />}
        />
        <Route
          path="/faculty/student-performance-school"
          element={<SchoolWSP />}
        />
        <Route
          path="/faculty/student-performance-instructor"
          element={<InstructorWSP />}
        />
        <Route path="/faculty/new-features-grade" element={<AddGrade />} />
        <Route
          path="/faculty/new-features-co-percentage"
          element={<ViewCOper />}
        />

        </Routes>
      </Router>
    </>
  );
}

export default App;
