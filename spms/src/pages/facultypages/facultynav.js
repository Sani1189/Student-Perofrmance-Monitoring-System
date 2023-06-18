import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/facultycss/facultynav.css';
import { RiDashboardLine } from 'react-icons/ri';
import { DiGoogleAnalytics } from 'react-icons/di';
import { GoGitCompare } from 'react-icons/go';
import { GiAchievement } from 'react-icons/gi';
import { FaQuestion } from 'react-icons/fa';
import { FaUserGraduate } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';

import {getGlobal} from 'reactn';


function Facultynav() {
  const user = getGlobal().user;
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  const [isPloAnalysisOpen, setIsPloAnalysis] = useState(false);
  const [isPloComparisonOpen, setIsPloComparison] = useState(false);
  const [isCoPoAchievementsOpen, setIsCoPoAchievements] = useState(false);
  const [isQuestionBankOpen, setIsQuestionBank] = useState(false);
  const [isCourseOutlinesOpen, setIsCourseOutlines] = useState(false);
  const [isStudentPerformanceOpen, setIsStudentPerformance] = useState(false);
  const [isNewFeaturesOpen, setIsNewFeatures] = useState(false);


  const handleMouseLeave = (setIsClose) => {
    setIsClose(false);
  };
  const handleMouseEnter = (setIsOpen) => {
    setIsOpen(true);
  };
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/faculty/plo-analysis-course" || location.pathname === "/faculty/plo-analysis-student" || location.pathname === "/faculty/plo-analysis-program" || location.pathname === "/faculty/plo-analysis-department" || location.pathname === "/faculty/plo-analysis-school") {
      setIsPloAnalysis(true);

    }
    else if (location.pathname === "/faculty/plo-comparison-course" || location.pathname === "/faculty/plo-comparison-student") {
      setIsPloComparison(true);
    }
    else if (location.pathname === "/faculty/co-po-achievements-course" || location.pathname === "/faculty/co-po-achievements-student" || location.pathname === "/faculty/co-po-achievements-program" || location.pathname === "/faculty/co-po-achievements-department") {
      setIsCoPoAchievements(true);
    }
    else if (location.pathname === "/faculty/question-bank-add" || location.pathname === "/faculty/question-bank-view") {
      setIsQuestionBank(true);
    }
    else if (location.pathname === "/faculty/course-outlines-add" || location.pathname === "/faculty/course-outlines-view") {
      setIsCourseOutlines(true);
    }
    else if (location.pathname === "/faculty/student-performance-course" || location.pathname === "/faculty/student-performance-school" || location.pathname === "/faculty/student-performance-program" || location.pathname === "/faculty/student-performance-department" || location.pathname === "/faculty/student-performance-instructor") {
      setIsStudentPerformance(true);
    }
    else if (location.pathname === "/faculty/new-features-grade" || location.pathname === "/faculty/new-features-co-percentage") {
      setIsNewFeatures(true);
    }

  },);


  return (
    <>
      <div className="myheader">
        <h1> {
          user.f_name?
          user.f_name + " " + user.l_name
          :
          null
          }
           </h1>
      </div>
      <div className="nav-container">
        <button className="nav-toggle" aria-label="Toggle navigation" onClick={handleNavToggle}>
          <span className="nav-toggle-icon"></span>
        </button>
        <nav className={`nav ${isNavOpen ? 'nav-open' : ''}`}>
          <ul>
            <li>
              <h3>
                <RiDashboardLine />
                <span><Link to="/faculty/dashboard">Dashboard</Link></span>
              </h3>
            </li>
            <li onMouseEnter={() => handleMouseEnter(setIsPloAnalysis)} onMouseLeave={() => handleMouseLeave(setIsPloAnalysis)}>
              <h3>
                <DiGoogleAnalytics />
                <span>Expected PLO Analysis</span>
              </h3>
              {isPloAnalysisOpen && (
                <ul className="dropdown">
                  <li>
                    <Link to="/faculty/plo-analysis-course">
                      {
                        location.pathname === "/faculty/plo-analysis-course" ? <span style={{ color: 'red' }}>Course Wise</span> : <span>Course Wise</span>
                      }
                    </Link>
                    <Link to="/faculty/plo-analysis-student">
                      {
                        location.pathname === "/faculty/plo-analysis-student" ? <span style={{ color: 'red' }}>Student Wise</span> : <span>Student Wise</span>
                      }
                    </Link>
                    <Link to="/faculty/plo-analysis-program">
                      {
                        location.pathname === "/faculty/plo-analysis-program" ? <span style={{ color: 'red' }}>Program Wise</span> : <span>Program Wise</span>
                      }
                    </Link>
                    <Link to="/faculty/plo-analysis-department">
                      {
                        location.pathname === "/faculty/plo-analysis-department" ? <span style={{ color: 'red' }}>Department Wise</span> : <span>Department Wise</span>
                      }
                    </Link>
                    <Link to="/faculty/plo-analysis-school">
                      {
                        location.pathname === "/faculty/plo-analysis-school" ? <span style={{ color: 'red' }}>School Wise</span> : <span>School Wise</span>
                      }
                    </Link>
                  </li>
                </ul>
              )
              }
            </li>
            <li onMouseEnter={() => handleMouseEnter(setIsPloComparison)} onMouseLeave={() => handleMouseLeave(setIsPloComparison)}>

              <h3>
                <GoGitCompare />
                <span>PLO Comparison</span></h3>
              {isPloComparisonOpen && (
                <ul className="dropdown">
                  <li>
                    <Link to="/faculty/plo-comparison-course">
                      {
                        location.pathname === "/faculty/plo-comparison-course" ? <span style={{ color: 'red' }}>Course Wise</span> : <span>Course Wise</span>
                      }
                    </Link>
                    <Link to="/faculty/plo-comparison-student">
                      {
                        location.pathname === "/faculty/plo-comparison-student" ? <span style={{ color: 'red' }}>Student Wise</span> : <span>Student Wise</span>
                      }
                    </Link>
                  </li>
                </ul>
              )
              }


            </li>
            <li onMouseEnter={
              () => handleMouseEnter(setIsCoPoAchievements)} onMouseLeave={() => handleMouseLeave(setIsCoPoAchievements)
              }>
              <h3>
                <GiAchievement />
                <span>CO-PO Achievements</span>
              </h3>
              {isCoPoAchievementsOpen && (
                <ul className="dropdown">
                  <li>
                    <Link to="/faculty/co-po-achievements-course">
                      {
                        location.pathname === "/faculty/co-po-achievements-course" ? <span style={{ color: 'red' }}>Course Wise</span> : <span>Course Wise</span>
                      }
                    </Link>
                    <Link to="/faculty/co-po-achievements-student">
                      {
                        location.pathname === "/faculty/co-po-achievements-student" ? <span style={{ color: 'red' }}>Student Wise</span> : <span>Student Wise</span>
                      }
                    </Link>
                    <Link to="/faculty/co-po-achievements-program">
                      {
                        location.pathname === "/faculty/co-po-achievements-program" ? <span style={{ color: 'red' }}>Program Wise</span> : <span>Program Wise</span>
                      }
                    </Link>
                    <Link to="/faculty/co-po-achievements-department">
                      {
                        location.pathname === "/faculty/co-po-achievements-department" ? <span style={{ color: 'red' }}>Department Wise</span> : <span>Department Wise</span>
                      }
                    </Link>

                  </li>
                </ul>
              )
              }

            </li>
            <li onMouseEnter={() => handleMouseEnter(setIsQuestionBank)} onMouseLeave={() => handleMouseLeave(setIsQuestionBank)}>
              <h3>
                <FaQuestion />
                <span>Question Bank</span>
              </h3>
              {isQuestionBankOpen && (
                <ul className="dropdown">
                  <li>
                    <Link to="/faculty/question-bank-add">
                      {
                        location.pathname === "/faculty/question-bank-add" ? <span style={{ color: 'red' }}>Add Question Bank</span> : <span>Add Question Bank</span>
                      }
                    </Link>
                    <Link to="/faculty/question-bank-view">
                      {
                        location.pathname === "/faculty/question-bank-view" ? <span style={{ color: 'red' }}>View Question Bank</span> : <span>View Question Bank</span>
                      }
                    </Link>

                  </li>
                </ul>
              )
              }

            </li>
            <li onMouseEnter={() => handleMouseEnter(setIsCourseOutlines)} onMouseLeave={() => handleMouseLeave(setIsCourseOutlines)}>
              <h3>
                <FaBook />
                <span>Course Outlines</span>
              </h3>
              {isCourseOutlinesOpen && (
                <ul className="dropdown">
                  <li>
                    <Link to="/faculty/course-outlines-add">
                      {
                        location.pathname === "/faculty/course-outlines-add" ? <span style={{ color: 'red' }}>Add Course Outlines</span> : <span>Add Course Outlines</span>
                      }
                    </Link>
                    <Link to="/faculty/course-outlines-view">
                      {
                        location.pathname === "/faculty/course-outlines-view" ? <span style={{ color: 'red' }}>View Course Outlines</span> : <span>View Course Outlines</span>
                      }
                    </Link>
                  </li>
                </ul>
              )
              }
            </li>
            <li onMouseEnter={() => handleMouseEnter(setIsStudentPerformance)} onMouseLeave={() => handleMouseLeave(setIsStudentPerformance)}>
              <h3>
                <FaUserGraduate />
                <span>Student Performance</span>
              </h3>
              {isStudentPerformanceOpen && (
                <ul className="dropdown">
                  <li>
                    <Link to="/faculty/student-performance-course">
                      {
                        location.pathname === "/faculty/student-performance-course" ? <span style={{ color: 'red' }}>Course Wise</span> : <span>Course Wise</span>
                      }
                    </Link>
                    <Link to="/faculty/student-performance-program">
                      {
                        location.pathname === "/faculty/student-performance-program" ? <span style={{ color: 'red' }}>Program Wise</span> : <span>Program Wise</span>
                      }
                    </Link>
                    <Link to="/faculty/student-performance-department">
                      {
                        location.pathname === "/faculty/student-performance-department" ? <span style={{ color: 'red' }}>Department Wise</span> : <span>Department Wise</span>
                      }
                    </Link>
                    <Link to="/faculty/student-performance-school">
                      {
                        location.pathname === "/faculty/student-performance-school" ? <span style={{ color: 'red' }}>School Wise</span> : <span>School Wise</span>
                      }
                    </Link>
                    <Link to="/faculty/student-performance-instructor">
                      {
                        location.pathname === "/faculty/student-performance-instructor" ? <span style={{ color: 'red' }}>Instructor Wise</span> : <span>Instructor Wise</span>
                      }
                    </Link>

                  </li>
                </ul>
              )
              }
            </li>
            <li onMouseEnter={() => handleMouseEnter(setIsNewFeatures)} onMouseLeave={() => handleMouseLeave(setIsNewFeatures)}>
              <h3>
                <FaPlus />
                <span>New Features</span>
              </h3>
              {isNewFeaturesOpen && (
                <ul className="dropdown">
                  <li>
                    <Link to="/faculty/new-features-grade">
                      {
                        location.pathname === "/faculty/new-features-grade" ? <span style={{ color: 'red' }}>Add Grade</span> : <span>Add Grade</span>
                      }
                    </Link>
                    <Link to="/faculty/new-features-co-percentage">
                      {
                        location.pathname === "/faculty/new-features-co-percentage" ? <span style={{ color: 'red' }}>View CO Percentage</span> : <span>View CO Percentage</span>
                      }
                    </Link>
                  </li>
                </ul>
              )
              }
            </li>
            <li className="logout">
              <h3>
                <BiLogOut />
                <span><Link to="/">Logout</Link></span>
              </h3>
            </li>
          </ul>

        </nav>
        <div>
          <Link id="myfooter" to="/">Logout</Link>
        </div>
      </div>
    </>
  );
}
export default Facultynav;
