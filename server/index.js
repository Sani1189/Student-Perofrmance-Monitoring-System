const express = require('express');
const mysql = require('mysql');
const app = express();
var cors = require('cors');
app.use(cors());
app.use(express.json());

db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    database: 'spmsv4'
});
app.post('/login', (req, res) => {
    const userID = req.body.userID;
    const password = req.body.password;
    db.query(
        "SELECT * FROM login_t WHERE userID = ? AND password = ?",
        [userID, password],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            if (result.length > 0) {
                res.send(result);
            }
            else {
                res.send({ message: "Wrong username/password combination!" });
            }
        }
    );
});
app.post('/addgrade', (req, res) => {
    const studentID = req.body.studentID;
    const educational_year = req.body.educational_year;
    const educational_semester = req.body.educational_semester;
    const enrolled_course = req.body.enrolled_course;
    const enrolled_section = req.body.enrolled_section;
    const grade = req.body.grade;
    db.query(
        "INSERT INTO grade_t (studentID, educational_year, educational_semester, enrolled_course, enrolled_section, grade) VALUES (?,?,?,?,?,?)",
        [studentID, educational_year, educational_semester, enrolled_course, enrolled_section, grade],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(result);
            }
        }

    );
});
app.post('/uploadGrade', (req, res) => {
    const data = req.body.data;
    data.forEach(element => {
        db.query(
            "INSERT INTO grade_t (studentID, educational_year, educational_semester, enrolled_course, enrolled_section, grade) VALUES (?,?,?,?,?,?)",
            [element.studentID, element.educational_year, element.educational_semester, element.enrolled_course, element.enrolled_section, element.grade],
            (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(`inserted of studentID: ${element.studentID}`);
                    res.send("done");
                }
            }

        );
    });
    console.log("All data inserted successfully!");
    

}
);

app.post('/courseoutline/create', (req, res) => {
    const courseTitle = req.body.courseoutline.courseTitle;
    const courseCode = req.body.courseoutline.courseCode;
    const courseDescription = req.body.courseoutline.courseDescription;
    const courseType = req.body.courseoutline.courseType;
    const creditValue = parseInt(req.body.courseoutline.creditValue);
    const prerequisite = req.body.courseoutline.prerequisite;
    const coursePolicy = req.body.courseoutline.coursePolicy;
    const courseObjective = req.body.courseoutline.courseObjective;
    const contactHours = req.body.courseoutline.contactHours;
    const nondiscriminationPolicy = req.body.courseoutline.nondiscriminationPolicy;
    const academicDishonesty = req.body.courseoutline.academicDishonesty;
    const courseReference = req.body.courseoutline.courseReference;
    const studentDisabilities = req.body.courseoutline.studentDisabilities;

    // console.log(courseCode,courseTitle,courseDescription,courseType,creditValue,prerequisite,coursePolicy,courseObjective,contactHours,nondiscriminationPolicy,academicDishonesty,courseReference,studentDisabilities);
    db.query(
        "INSERT INTO course_outline_t (courseCode,courseTitle,courseDescription,courseType,creditValue,prerequisite,coursePolicy,courseObjective,contactHours,nondiscriminationPolicy,academicDishonesty,courseReference,studentDisabilities) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [courseCode, courseTitle, courseDescription, courseType, creditValue, prerequisite, coursePolicy, courseObjective, contactHours, nondiscriminationPolicy, academicDishonesty, courseReference, studentDisabilities],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(result);
            }
        }
    );
});

app.post('/clomatrix/create', (req, res) => {
    const courseCode = req.body.courseCode;
    const cloMatrix = req.body.cloMatrix;
    let cloMatrixNo = 1;
    
    for (let i = 0; i < cloMatrix.cloName.length; i++) {
        db.query(
            "INSERT INTO clo_matrix_t (courseCode,cloMatrixNo,cloName,cloMatrixDes,ploAssessed,ploCloCorelations) VALUES (?,?,?,?,?,?)",
            [courseCode, cloMatrixNo++, cloMatrix.cloName[i], cloMatrix.cloMatrixDes[i], cloMatrix.ploAssessed[i], cloMatrix.ploCloCorelations[i]],
            (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(`inserted of cloMatrix: ${cloMatrix.cloName[i]}`);
                    
                }
            }
        );
    }
    
});



app.post('/boomsleaarninglevel/create', (req, res) => { 
    const courseCode = req.body.courseCode;
    const boomsLeaarningLevel = req.body.boomsLeaarningLevel;
    let cloMatrixNo = 1;
    let max = boomsLeaarningLevel.C.length;
    if(boomsLeaarningLevel.P.length > max){
        max = boomsLeaarningLevel.P.length;
    }
    if(boomsLeaarningLevel.A.length > max){
        max = boomsLeaarningLevel.A.length;
    }
    if(boomsLeaarningLevel.S.length > max){
        max = boomsLeaarningLevel.S.length;
    }

    for (let i = 0; i < max; i++) {
        db.query(
            "INSERT INTO blooms_learning_level_t (courseCode,cloMatrixNo,C,P,A,S) VALUES (?,?,?,?,?,?)",
            [courseCode, cloMatrixNo++, boomsLeaarningLevel.C[i], boomsLeaarningLevel.P[i], boomsLeaarningLevel.A[i], boomsLeaarningLevel.S[i]],
            (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(`inserted of boomsLeaarningLevel`);
                }
            }
        );
    } 
    console.log("All data inserted successfully!");
    
});
    
app.post('/lessonplan/create', (req, res) => {
    const courseCode = req.body.courseCode;
    const lessonplan = req.body.lessonplan;

    for (let i = 0; i < lessonplan.noOfWeeks.length; i++){
        db.query(
            "INSERT INTO lesson_plan_t (courseCode,noOfWeeks,topics,teachingLearningStrategy,assessmentStrategy,coRespondingClo) VALUES (?,?,?,?,?,?)",
            [courseCode, lessonplan.noOfWeeks[i], lessonplan.topics[i], lessonplan.teachingLearningStrategy[i], lessonplan.assessmentStrategy[i], lessonplan.coRespondingClo[i]],
            (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(`inserted of lessonplan`);
                }
            }
        );
    }
    console.log("All data inserted successfully!");
    
});


app.post('/assesment/create', (req, res) => {
    const courseCode = req.body.courseCode;
    const assessment = req.body.assessment;

    for (let i = 0; i < assessment.assesmentType.length; i++){
        db.query(
            "INSERT INTO assessment_t (courseCode,assesmentType,assesmentTools,marksDistribution,bloomsCatagory,totalMarks) VALUES (?,?,?,?,?,?)",
            [courseCode, assessment.assesmentType[i], assessment.assesmentTools[i], assessment.marksDistribution[i], assessment.bloomsCatagory[i], assessment.totalMarks[i]],
            (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(`inserted of assesment`);
                }
            }
        );
    }
    console.log("All data inserted successfully!");
    
});



app.post('/coursecontent/create', (req, res) => {
    const courseCode = req.body.courseCode;
    const formData = req.body.formData;
    let courseContentNo = 1;

    for(let i = 0; i < formData.courseContent; i++) {
        db.query(
            "INSERT INTO course_content_t (courseCode,courseContentNo,titles,descriptions) VALUES (?,?,?,?)",
            [courseCode, courseContentNo++, formData.titles[i], formData.descriptions[i]],
            (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(`inserted of coursecontent`);
                }
            }
        );
    }
    console.log("All data inserted successfully!");
    
});

app.get('/courseoutline/view', (req, res) => {
    db.query(
        "SELECT courseCode FROM course_outline_t",
        (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(result);
            }
        }
    );
});

app.get('/courseoutline/main/:courseCode', (req, res) => {
    const courseCode = req.params.courseCode;
    db.query(
        "SELECT * FROM course_outline_t WHERE courseCode = ?",
        [courseCode],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(result);
            }
        }
    );
    
});

app.get('/courseoutline/cloMatrix/:courseCode', (req, res) => {
    const courseCode = req.params.courseCode;
    db.query(
        "SELECT * FROM clo_matrix_t WHERE courseCode = ?",
        [courseCode],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(result);
            }
        }
    );

});

app.get('/courseoutline/bloomsLearningLevel/:courseCode', (req, res) => {
    const courseCode = req.params.courseCode;
    db.query(
        "SELECT * FROM blooms_learning_level_t WHERE courseCode = ?",
        [courseCode],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(result);
            }
        }
    );

});

app.get('/courseoutline/lessonplan/:courseCode', (req, res) => {
    const courseCode = req.params.courseCode;
    db.query(
        "SELECT * FROM lesson_plan_t WHERE courseCode = ?",
        [courseCode],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(result);
            }
        }
    );
    });

app.get('/courseoutline/assessment/:courseCode', (req, res) => {
    const courseCode = req.params.courseCode;
    db.query(
        "SELECT * FROM assessment_t WHERE courseCode = ?",
        [courseCode],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(result);
            }
        }
    );
    });

app.get('/courseoutline/courseContent/:courseCode', (req, res) => {

    const courseCode = req.params.courseCode;
    db.query(
        "SELECT * FROM course_content_t WHERE courseCode = ?",
        [courseCode],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(result);
            }
        }
    );
    });


    app.get('/getStudent/:userID', (req, res) => {
        const studentID = req.params.userID;
        db.query(
            "SELECT * FROM student_t WHERE studentID = ?",
            [studentID],
            (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.send(result);
                }
            }
        );
        });

    app.get('/getFaculty/:userID', (req, res) => {
        const facultyID = req.params.userID;
        db.query(
            "SELECT * FROM faculty_t WHERE facultyID = ?",
            [facultyID],
            (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.send(result);
                }
            }
        );
        });
          
    app.post('/addQuestion', (req, res) => {
        const courseID = req.body.courseID;
        const question = req.body.question;
        const marks = parseInt(req.body.marks);
        const difficulty = req.body.difficulty;
        const cloNo = parseInt(req.body.cloNo);
        const qtype = req.body.qtype;

        db.query(
            "INSERT INTO question_t (courseID,question,marks,difficulty,cloNo,qtype) VALUES (?,?,?,?,?,?)",
            [courseID, question, marks, difficulty, cloNo, qtype],
            (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("Values Inserted");
                }
            }
        );
    });


    app.get('/getCourse/:studentID', (req, res) => {
        const studentID = parseInt(req.params.studentID);
        db.query(
            "SELECT * FROM grade_t WHERE studentID = ?",
            [studentID],
            (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.send(result);
                }
            }
        );
        });
app.get('/getqCourse', (req, res) => {
    db.query(
        "SELECT * FROM question_t",
        (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(result);
            }
        }
    );
    });

    app.get('/getQuestion/:courseID/:qtype', (req, res) => {
        const courseID = req.params.courseID;
        const qtype = req.params.qtype;
        db.query(
            "SELECT * FROM question_t WHERE courseID = ? AND qtype = ?",
            [courseID, qtype],
            (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.send(result);
                }
            }
        );
        });
        

app.get('/getGrade/:studentID/:courseId/:year/:semester', (req, res) => {
    const studentID = parseInt(req.params.studentID);
    const enrolled_course = req.params.courseId;
    const educational_year = parseInt(req.params.year);
    const educational_semester = req.params.semester;

    db.query(
        "SELECT * FROM grade_t WHERE studentID = ? AND enrolled_course = ? AND educational_year = ? AND educational_semester = ?",
        [studentID, enrolled_course, educational_year, educational_semester],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(result);
            }
        }
    );
    });

app.listen(3002, () => {
    console.log("running on port 3002");
});