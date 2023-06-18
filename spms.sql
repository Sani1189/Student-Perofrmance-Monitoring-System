-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: spmsv4
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `assessment_t`
--

DROP TABLE IF EXISTS `assessment_t`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assessment_t` (
  `courseCode` varchar(10) NOT NULL,
  `assesmentType` varchar(150) NOT NULL,
  `assesmentTools` mediumtext,
  `marksDistribution` varchar(45) DEFAULT NULL,
  `bloomsCatagory` varchar(45) DEFAULT NULL,
  `totalMarks` int DEFAULT NULL,
  PRIMARY KEY (`courseCode`,`assesmentType`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assessment_t`
--

LOCK TABLES `assessment_t` WRITE;
/*!40000 ALTER TABLE `assessment_t` DISABLE KEYS */;
INSERT INTO `assessment_t` VALUES ('CSE101','exam','google colab','100%','hard',100),('CSE303L','Continuous Assessment','Lab work assessment','30%','gg',100);
/*!40000 ALTER TABLE `assessment_t` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blooms_learning_level_t`
--

DROP TABLE IF EXISTS `blooms_learning_level_t`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blooms_learning_level_t` (
  `courseCode` varchar(10) NOT NULL,
  `cloMatrixNo` int NOT NULL,
  `C` int DEFAULT NULL,
  `P` int DEFAULT NULL,
  `A` int DEFAULT NULL,
  `S` int DEFAULT NULL,
  PRIMARY KEY (`courseCode`,`cloMatrixNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blooms_learning_level_t`
--

LOCK TABLES `blooms_learning_level_t` WRITE;
/*!40000 ALTER TABLE `blooms_learning_level_t` DISABLE KEYS */;
INSERT INTO `blooms_learning_level_t` VALUES ('CSE101',1,1,1,NULL,NULL),('CSE101',2,1,NULL,1,NULL),('CSE303L',1,NULL,3,NULL,NULL),('CSE303L',2,3,NULL,NULL,3),('CSE303L',3,NULL,3,3,NULL);
/*!40000 ALTER TABLE `blooms_learning_level_t` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clo_matrix_t`
--

DROP TABLE IF EXISTS `clo_matrix_t`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clo_matrix_t` (
  `courseCode` varchar(10) NOT NULL,
  `cloMatrixNo` int NOT NULL,
  `cloName` varchar(10) DEFAULT NULL,
  `cloMatrixDes` mediumtext,
  `ploAssessed` varchar(10) DEFAULT NULL,
  `ploCloCorelations` int DEFAULT NULL,
  PRIMARY KEY (`courseCode`,`cloMatrixNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clo_matrix_t`
--

LOCK TABLES `clo_matrix_t` WRITE;
/*!40000 ALTER TABLE `clo_matrix_t` DISABLE KEYS */;
INSERT INTO `clo_matrix_t` VALUES ('CSE101',1,'clo1','1. If, else if, else 2. Logical Operators','ploA',3),('CSE101',2,'clo2','1. While loop 2. Do-While loop','ploB',3),('CSE303L',1,'Clo1','Solid foundation on the database design using query language SQL and design of application.','PLO A',3),('CSE303L',2,'Clo2','Present project work individually or in a group','PLO B',3),('CSE303L',3,'Clo3','Solid foundation on the database design using query language SQL and design of application.','PLO C',3);
/*!40000 ALTER TABLE `clo_matrix_t` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_content_t`
--

DROP TABLE IF EXISTS `course_content_t`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_content_t` (
  `courseCode` varchar(10) NOT NULL,
  `courseContentNo` int NOT NULL,
  `titles` mediumtext,
  `descriptions` longtext,
  PRIMARY KEY (`courseCode`,`courseContentNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_content_t`
--

LOCK TABLES `course_content_t` WRITE;
/*!40000 ALTER TABLE `course_content_t` DISABLE KEYS */;
INSERT INTO `course_content_t` VALUES ('CSE101',1,'Basics of Computer Hardware, Software and The Programming Process','1. Overview of Computer Hardware\n2. Overview of Computer Software\n3. Overview of a programs process\n4. Familiarization with CodeBlocks\n'),('CSE101',2,'Lab Work for Class 01 and 02 and Quiz','1. Hands on practice of Class 01 and 02 and Quiz'),('CSE101',3,'Loops','1. For loop'),('CSE303L',1,'Web application architecture & HTML5:','1. Students will be introduced to the web application architecture.\n2. Students will learn how the Model-Views-Template (MVT) design pattern works.\n3. Students will be introduced to HTML5.\n4. Students will basic HTML5 document structure.\n5. Students will learn how to use Github to upload project codes to Github repositories.\n6. Students will learn widely used HTML tags and its uses.\n7. Students will learn URL schemes, hierarchy, and query parameters.\n8. Students will learn to create HTML5 web pages.'),('CSE303L',2,'CSS & Responsive Designing:','1. Students will learn about CSS selectors, properties, and style placement.\n2. Students will learn how to use CSS styling along with HTML web pages to design a web page.\n3. Students will be introduced to responsive web page designing using CSS.'),('CSE303L',3,'JavaScript:','1. Students will learn JavaScript arrays, functions, and objects.\n2. Students will be introduced to JavaScript regular expressions and exceptions.');
/*!40000 ALTER TABLE `course_content_t` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_outline_t`
--

DROP TABLE IF EXISTS `course_outline_t`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_outline_t` (
  `courseDescription` longtext,
  `courseReference` longtext,
  `courseCode` varchar(10) NOT NULL,
  `courseTitle` varchar(45) DEFAULT NULL,
  `courseType` varchar(45) DEFAULT NULL,
  `creditValue` int DEFAULT NULL,
  `coursePolicy` longtext,
  `contactHours` varchar(50) DEFAULT NULL,
  `courseObjective` longtext,
  `academicDishonesty` longtext,
  `studentDisabilities` longtext,
  `nondiscriminationPolicy` longtext,
  `prerequisite` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`courseCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_outline_t`
--

LOCK TABLES `course_outline_t` WRITE;
/*!40000 ALTER TABLE `course_outline_t` DISABLE KEYS */;
INSERT INTO `course_outline_t` VALUES ('This is an introductory course in Computer Science. The main objective of this course is to help the student develop a strong foundation of computer programming using C++. The programming concepts that will be covered in the class are variable, data types, input, output, arithmetic operation, control structures, logical operation, conditional statements, iterative statements, array, function, string. Each lecture would involve solving a number of programming problems using the computer. After successful completion of the course a student will be able to break down a complex programming problem into smaller parts, solve them and write the solution in C++.','1.Starting out with C++ from Control Structures through Objects 7th ed. by Tony \n   Gaddis\n2.C++ How to Program by Deitel and Deitel\n','CSE101','Introduction to computer Science','Easy',3,'All announcements will be made available via classroom.google.com/. Students must enroll to this course by themselves.\nThe lecture notes, reading materials, codes, or other resources will be made available prior to the discussion on that material in class so that student may have a cursory look into the materials. Students are recommended to get a printed copy of the lecture note to keep note. \nClass participation is vital for better understanding of programming concepts. Moreover, this is considered as an indicator of good learner. Students are encouraged to participate on raising relevant issues and discussing solution of those questions on classroom.google.com/. Google Classroom provides an interesting statistic on the student’s participations at the end of each semester. Students may be awarded bonus marks for raising interesting issues on computer science and providing answers to such questions.\nStudents are invited to raise questions in any point during the lecture.\nStudents should take tutorials with the tea','3h','It is the student’s responsibility to gather information about the assignments and covered topics during the lectures missed. Regular class attendance is mandatory. Without 70% of attendance, sitting for final exam is NOT allowed. According to IUB system students must enter the classroom before the class teacher to get attendance counted.\nThe date and syllabus of quiz, midterm and final exam is already given here, however, announcements will be given ahead of time if there is any change. There is NO provision for make-up quizzes or examinations. ','A student who cheats, plagiarizes, or furnishes false, misleading information in the course is subject to disciplinary action up to and including an F grade in the course and/or suspension/expulsion from the University.\nStudents must maintain the code of IUB.\nThe goal of homework is to give you practice in mastering the course material. Consequently, you are encouraged to collaborate on problem sets. In fact, students who form study groups generally do better on exams than do students who work alone. If you do work in a study group, however, you owe it to yourself and your group to be prepared for your study group meeting. Specifically, you should spend at least 30-45 minutes trying to solve each problem beforehand by yourself. If your group is unable to solve a problem, talk to other groups or ask your recitation instructor or teaching assistant assigned to your class.\nYou must write up each problem solution by yourself without assistance. It is a violation of this policy to submit a problem solution that you cannot orally explain to a member of the course staff.\nNo collaboration whatsoever is permitted during examination.\nPlagiarism and other anti-intellectual behavior cannot be tolerated in any academic environment that prides itself on individual accomplishment. If you have any questions about the collaboration policy, or if you feel that you may have violated the policy, please talk to one of the course staff. Although the course staff is obligated to deal with cheating appropriately, we are more understanding and lenient if we find out from the transgressor himself or herself rather than from a third party or by ourselves.\n','There may be some changes in the course policy due to these different circumstances during online classes .\nIf you experience significant stress or worry, changes in mood, or problems eating or sleeping this semester, whether because of this or any other courses or factors, please do not hesitate to reach out immediately, at any hour, to any of the course’s heads or me to discuss. \n','The course and University policy prohibit discrimination based on race, color, religion, sex, marital or parental status, national origin or ancestry, age, mental or physical disability, sexual orientation, military status. If you see either by course instructor or any other person related to course showing any form of discrimination, please inform the proctors office of the wrongdoing. ','no'),('Conventional and database approaches. Basic concepts of DBMS. Hierarchical, network and relational data\nmodels. Entity-relationship modeling. Relational database designing: decomposition and normalization;\nfunctional dependencies. Relational algebra and calculus. Structured query language (SQL). Query\noptimization. Database programming with SQL and PL/SQL. Database security and administration. Distributed\ndatabases. Object-oriented data modeling. Specific database systems: oracle, MS SQL server, access.','The course will be based mostly on the following books [some other books and journals may be\nreferred time to time]:\n1. Modern Database Management by Jeffrey A. Hoffer, Mary B. Prescott, Fred R. Mcfadden\n2. Database Management Systems, by Raghu Ramakrishnan and Johannes Gehrke\n3. Fundamentals of Database Systems, By RamezElmasri, Shamkant B. Navathe\n4. Microsoft MSDN, W3 School\n5. An Introduction to Database System by C. J. Date\n6. Full‐Stack React Projects: Learn MERN Stack Development by Shama Hoque','CSE303L','Lab work for CSE303','Elective',1,'a. It is the student’s responsibility to gather information about the assignments/project and cover topics\nduring the lectures missed. Regular class attendance is mandatory. Points will be taken off for missing\nclasses. Without 70% of attendance, sitting for the final exam is NOT allowed. Students should come on\ntime to get the attendance. In the event of failing 70% of attendance, a student will receive a W grade\nautomatically.\nb. Same project work is assigned to all sections. Students should work in groups for the project. They are\nrequired to prepare a final report on the project which will be incrementally developed through\nassignments.\nc. The date and syllabus of class tests, Mid-Term and Final-Term will be announced in the class. There is NO\nprovision for make-up.\nd. Both the Mid-Term and Final-Term exams will be coordinated exams and will be held on a specific date\nfor all the sections.\ne. The reading materials for each class will be given prior to that class so that students may have a cursory\nlook into the materials.','1.5 hours (Lab)','In this course, students will get an overview of the following:\n\n1. Foundation knowledge in database concepts, technology, and practice to groom students into well-\ninformed database application developers.\n\n2. Strong practice in SQL programming through a variety of database problems.\n3. Develop database applications using front-end tools and back-end DBMS.','a. A student who cheats, plagiarizes, or furnishes false, misleading information in the course is subject to\ndisciplinary action up to and including an F grade in the course and/or suspension/expulsion from the\nUniversity.\nb. Students must maintain the code of IUB.\nc. The goal of homework is to give you practice in mastering the course material. Consequently, you are\nencouraged to collaborate on problem sets. In fact, students who form study groups generally do better on\nexams than do students who work alone. If you do work in a study group, however, you owe it to yourself\nand your group to be prepared for your study group meeting. Specifically, you should spend at least 30-45\nminutes trying to solve each problem beforehand by yourself. If your group is unable to solve a problem,\ntalk to other groups or ask your recitation instructor or teaching assistant assigned to your class.\nd. You must write up each problem solution by yourself without assistance. It is a violation of this policy to\nsubmit a problem solution that you cannot orally explain to a member of the course staff.\ne. No collaboration whatsoever is permitted during examination.','Students with disabilities are required to inform the Department of Computer Science & Engineering of any\nspecific requirement for classes or examination as soon as possible. Additionally, if you experience significant\nstress or worry, changes in mood, or problems eating or sleeping this semester, whether because of this or\nany other courses or factors,','The course and University policy prohibit discrimination based on race, color, religion, sex, marital or parental\nstatus, national origin or ancestry, age, mental or physical disability, sexual orientation, military status.','cse211');
/*!40000 ALTER TABLE `course_outline_t` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_t`
--

DROP TABLE IF EXISTS `course_t`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_t` (
  `courseID` varchar(10) NOT NULL,
  `course_name` varchar(45) DEFAULT NULL,
  `credit` int DEFAULT NULL,
  `course_type` varchar(30) DEFAULT NULL,
  `ploID` int DEFAULT NULL,
  `programID` int DEFAULT NULL,
  PRIMARY KEY (`courseID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_t`
--

LOCK TABLES `course_t` WRITE;
/*!40000 ALTER TABLE `course_t` DISABLE KEYS */;
/*!40000 ALTER TABLE `course_t` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `department_t`
--

DROP TABLE IF EXISTS `department_t`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `department_t` (
  `departmentID` varchar(10) NOT NULL,
  `department_name` varchar(45) DEFAULT NULL,
  `schoolID` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`departmentID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department_t`
--

LOCK TABLES `department_t` WRITE;
/*!40000 ALTER TABLE `department_t` DISABLE KEYS */;
/*!40000 ALTER TABLE `department_t` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faculty_t`
--

DROP TABLE IF EXISTS `faculty_t`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faculty_t` (
  `facultyID` varchar(10) NOT NULL,
  `f_name` varchar(45) DEFAULT NULL,
  `l_name` varchar(45) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `email` varchar(35) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `rank` varchar(30) DEFAULT NULL,
  `departmentID` varchar(3) DEFAULT NULL,
  `image` mediumtext,
  PRIMARY KEY (`facultyID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faculty_t`
--

LOCK TABLES `faculty_t` WRITE;
/*!40000 ALTER TABLE `faculty_t` DISABLE KEYS */;
INSERT INTO `faculty_t` VALUES ('1000','Dr. Mahady','Hasan',NULL,'male','mahady@iub.edu.bd','2200','',NULL,'Department Head','cse','http://directory.iub.edu.bd/img/faculty/1623777299-mahadyPic02.jpg'),('1001','Sadita','Ahmed',NULL,'female','sadita.ahsets@iub.edu.bd',NULL,NULL,NULL,'Faculty','cse','https://media.licdn.com/dms/image/C5103AQE8-tw5y-mt6A/profile-displayphoto-shrink_800_800/0/1582399315424?e=2147483647&v=beta&t=FmcIg0R8vSEVSKl4y_mUnnwVNzb0NSG-0j6WATPDcoI'),('1002','Noor-E ','Sadman',NULL,'male',NULL,NULL,NULL,NULL,'Adjunct Faculty','cse','https://i1.rgstatic.net/ii/profile.image/1183980296634374-1659294308372_Q512/Noor-E-Sadman-2.jpg');
/*!40000 ALTER TABLE `faculty_t` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grade_t`
--

DROP TABLE IF EXISTS `grade_t`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `grade_t` (
  `studentID` int NOT NULL,
  `educational_year` int NOT NULL,
  `educational_semester` varchar(10) NOT NULL,
  `enrolled_course` varchar(45) NOT NULL,
  `enrolled_section` int NOT NULL,
  `grade` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`studentID`,`educational_year`,`educational_semester`,`enrolled_course`,`enrolled_section`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grade_t`
--

LOCK TABLES `grade_t` WRITE;
/*!40000 ALTER TABLE `grade_t` DISABLE KEYS */;
INSERT INTO `grade_t` VALUES (1234,2022,'summer','Mathematics',1,'A+'),(2333,2222,'autumn','cse',3,'a'),(2345,2023,'Spring','Geography',5,'B'),(3456,2023,'Spring','Science',4,'B+'),(5678,2022,'autumn','English',2,'B'),(7890,2023,'Spring','Art',1,'A'),(9012,2022,'summer','History',3,'C+'),(2022156,2021,'Summer','CSE104',2,'B'),(2022157,2023,'spring','CSE303',5,'A'),(2022302,2022,'Summer','CSE303',3,'C+'),(2022504,2020,'spring','CSE101',1,'F'),(2022504,2020,'spring','CSE213',5,'F'),(2022504,2020,'spring','CSE214',5,'B+'),(2022504,2020,'spring','CSE303',5,'F'),(2022504,2021,'spring','cse206',4,'A'),(2022504,2021,'summer','cse201',2,'B'),(2022504,2022,'autumn','CSE101',2,'A'),(2022504,2022,'Spring','CSE101',3,'A'),(2022555,2022,'summer','CSE101',2,'A'),(2022605,2020,'spring','CSE101',1,'A'),(2022605,2022,'Autumn','CSE101',1,'A+');
/*!40000 ALTER TABLE `grade_t` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lesson_plan_t`
--

DROP TABLE IF EXISTS `lesson_plan_t`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lesson_plan_t` (
  `courseCode` varchar(10) NOT NULL,
  `noOfWeeks` int NOT NULL,
  `topics` mediumtext,
  `teachingLearningStrategy` mediumtext,
  `assessmentStrategy` mediumtext,
  `coRespondingClo` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`courseCode`,`noOfWeeks`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lesson_plan_t`
--

LOCK TABLES `lesson_plan_t` WRITE;
/*!40000 ALTER TABLE `lesson_plan_t` DISABLE KEYS */;
INSERT INTO `lesson_plan_t` VALUES ('CSE101',1,'Nested Loops','1. Overview of Nested Loops','easy','CLO1'),('CSE101',2,'Array','1. Overview of basic arrays 2. Array iteration 3. Populate array with random values','easy','CLO1'),('CSE101',3,'Array (contd.)','1. Finding min, max, cumulative frequency, etc','hard','CLO1'),('CSE303L',1,'Introduction: Course Overview & Project Requirements','Lab (1h)','','CLO1'),('CSE303L',2,'Web application architecture & HTML5','Lab (1h)','','CLO1');
/*!40000 ALTER TABLE `lesson_plan_t` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login_t`
--

DROP TABLE IF EXISTS `login_t`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login_t` (
  `userID` int NOT NULL,
  `password` varchar(45) DEFAULT NULL,
  `type` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_t`
--

LOCK TABLES `login_t` WRITE;
/*!40000 ALTER TABLE `login_t` DISABLE KEYS */;
INSERT INTO `login_t` VALUES (1000,'1234','faculty'),(1001,'1234','faculty'),(1002,'1234','faculty'),(1003,'1234','faculty'),(1004,'1234','faculty'),(1005,'1234','faculty'),(2022504,'123456','student'),(2022605,'123456','student');
/*!40000 ALTER TABLE `login_t` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `program_t`
--

DROP TABLE IF EXISTS `program_t`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `program_t` (
  `programID` int NOT NULL,
  `program_name` varchar(45) DEFAULT NULL,
  `departmentID` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`programID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `program_t`
--

LOCK TABLES `program_t` WRITE;
/*!40000 ALTER TABLE `program_t` DISABLE KEYS */;
/*!40000 ALTER TABLE `program_t` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question_t`
--

DROP TABLE IF EXISTS `question_t`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question_t` (
  `question` longtext,
  `courseID` varchar(15) NOT NULL,
  `qtype` varchar(10) NOT NULL,
  `cloNo` int NOT NULL,
  `marks` int DEFAULT NULL,
  `difficulty` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`courseID`,`qtype`,`cloNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_t`
--

LOCK TABLES `question_t` WRITE;
/*!40000 ALTER TABLE `question_t` DISABLE KEYS */;
INSERT INTO `question_t` VALUES ('submit first 10 question from hackerrank.','CSE101','mid',3,20,'hard'),('what is constructor?','CSE101','quiz',1,5,'easy'),('Do the code for detecting palindromic numbers.','CSE101','quiz',3,10,'medium'),('sfhgfdghfghd','CSE214','mid',3,3,'hard'),('what is your name?','CSE214','quiz',2,10,'medium'),('do relational schema','CSE303','final',3,10,'hard');
/*!40000 ALTER TABLE `question_t` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registration_t`
--

DROP TABLE IF EXISTS `registration_t`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registration_t` (
  `registrationID` int NOT NULL,
  `semester` varchar(10) DEFAULT NULL,
  `sectionID` int DEFAULT NULL,
  `studentID` int DEFAULT NULL,
  `year` int DEFAULT NULL,
  `courseID` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`registrationID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registration_t`
--

LOCK TABLES `registration_t` WRITE;
/*!40000 ALTER TABLE `registration_t` DISABLE KEYS */;
/*!40000 ALTER TABLE `registration_t` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `school_t`
--

DROP TABLE IF EXISTS `school_t`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `school_t` (
  `schoolID` int NOT NULL,
  `school_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`schoolID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `school_t`
--

LOCK TABLES `school_t` WRITE;
/*!40000 ALTER TABLE `school_t` DISABLE KEYS */;
/*!40000 ALTER TABLE `school_t` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `section_t`
--

DROP TABLE IF EXISTS `section_t`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `section_t` (
  `sectionID` int NOT NULL,
  `section_name` int DEFAULT NULL,
  `semester` varchar(10) DEFAULT NULL,
  `courseID` varchar(10) DEFAULT NULL,
  `facultyID` int DEFAULT NULL,
  `year` int DEFAULT NULL,
  PRIMARY KEY (`sectionID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `section_t`
--

LOCK TABLES `section_t` WRITE;
/*!40000 ALTER TABLE `section_t` DISABLE KEYS */;
/*!40000 ALTER TABLE `section_t` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_t`
--

DROP TABLE IF EXISTS `student_t`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_t` (
  `studentID` int NOT NULL,
  `f_name` varchar(45) DEFAULT NULL,
  `l_name` varchar(45) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `email` varchar(35) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `enrollment_date` date DEFAULT NULL,
  `departmentID` varchar(10) DEFAULT NULL,
  `programID` int DEFAULT NULL,
  PRIMARY KEY (`studentID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_t`
--

LOCK TABLES `student_t` WRITE;
/*!40000 ALTER TABLE `student_t` DISABLE KEYS */;
INSERT INTO `student_t` VALUES (2022504,'Zahidul','Islam','2001-08-06','male','zahid.imx@gmail.com','01754309016','Dhaka,Bangladesh','2020-01-09','cse',1),(2022605,'Saniul Islam','sani','2001-05-03','male','2022605@iub.edu.bd','01835025522','Dhaka,bangladesh','2020-01-09','cse',1);
/*!40000 ALTER TABLE `student_t` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-18 20:08:21
