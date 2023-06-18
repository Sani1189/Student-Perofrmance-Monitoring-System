import React from 'react'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#fff',
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 30,
        lineHeight: 1.5,
        flexDirection: 'column',
    }

});

const CourseOutline = ({ courseoutline, cloMatrix, bloomsLearning, courseAssessment, lessonplan, courseContent }) => {


    return (

        <Document>
            <Page size="A4" style={styles.page} >

                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>INDEPENDENT UNIVERSITY, BANGLADESH (IUB)
                    </Text>
                    <Text style={{ fontSize: 13, fontWeight: 'bold', textAlign: 'center', marginTop: 15 }}>Course Outline</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-around', borderWidth: 1, borderColor: 'black' }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', width: '50%', paddingLeft: 10, paddingVertical: 4 }}>Course Code: {courseoutline[0].courseCode}</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', width: '50%', borderLeft: 1, paddingLeft: 10, paddingVertical: 4 }}>Course Title: {courseoutline[0].courseTitle}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderWidth: 1, borderTop: 0, borderColor: 'black' }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', width: '50%', paddingLeft: 10, paddingVertical: 4 }}>Course Type: {courseoutline[0].courseType}</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', width: '50%', borderLeft: 1, paddingLeft: 10, paddingVertical: 4 }}>Prerequisite(if any) : {courseoutline[0].prerequisite}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderWidth: 1, borderTop: 0, borderColor: 'black' }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', width: '50%', paddingLeft: 10, paddingVertical: 4 }}>Credit Value: {courseoutline[0].creditValue}</Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', width: '50%', borderLeft: 1, paddingLeft: 10, paddingVertical: 4 }}>Contact Hours/Week : {courseoutline[0].contactHours}</Text>
                </View>

                <View style={{ flexDirection: 'column', marginTop: 20, borderLeft: 18, borderColor: '#24087e' }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', backgroundColor: '#24087e', color: 'white', paddingLeft: 25, paddingTop: 3 }}>Course Description</Text>
                    <Text style={{ fontSize: 11, marginTop: 5, paddingLeft: 20, paddingVertical: 4 }}>{courseoutline[0].courseDescription}</Text>
                </View>
                <View style={{ flexDirection: 'column', marginTop: 20, borderLeft: 18, borderColor: '#24087e' }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', backgroundColor: '#24087e', color: 'white', paddingLeft: 25, paddingTop: 3 }}>Course Objective</Text>
                    <Text style={{ fontSize: 11, marginTop: 5, paddingLeft: 20, paddingVertical: 4 }}>{courseoutline[0].courseObjective}</Text>
                </View>
                <View style={{ flexDirection: 'column', marginTop: 20, borderLeft: 18, borderColor: '#24087e' }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', backgroundColor: '#24087e', color: 'white', paddingLeft: 25, paddingTop: 3 }}>Course Policy</Text>
                    <Text style={{ fontSize: 11, marginTop: 5, paddingLeft: 20, paddingVertical: 4 }}>{courseoutline[0].coursePolicy}</Text>
                </View>
                <View style={{ flexDirection: 'column', marginTop: 20, borderLeft: 18, borderColor: '#24087e' }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', backgroundColor: '#24087e', color: 'white', paddingLeft: 25, paddingTop: 3 }}>Academic Dishonesty</Text>
                    <Text style={{ fontSize: 11, marginTop: 5, paddingLeft: 20, paddingVertical: 4 }}>{courseoutline[0].academicDishonesty}</Text>
                </View>
                <View style={{ flexDirection: 'column', marginTop: 20, borderLeft: 18, borderColor: '#24087e' }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', backgroundColor: '#24087e', color: 'white', paddingLeft: 25, paddingTop: 3 }}>Student With Diabilities and Stress</Text>
                    <Text style={{ fontSize: 11, marginTop: 5, paddingLeft: 20, paddingVertical: 4 }}>{courseoutline[0].studentDisabilities}</Text>
                </View>
                <View style={{ flexDirection: 'column', marginTop: 25, borderLeft: 18, borderColor: '#24087e' }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', backgroundColor: '#24087e', color: 'white', paddingLeft: 25, paddingTop: 3 }}>Non Discremination Policy</Text>
                    <Text style={{ fontSize: 11, marginTop: 5, paddingLeft: 20, paddingVertical: 4 }}>{courseoutline[0].nondiscriminationPolicy}</Text>
                </View>
                <View style={{ flexDirection: 'column', marginTop: 20, borderLeft: 18, borderColor: '#24087e' }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', backgroundColor: '#24087e', color: 'white', paddingLeft: 25, paddingTop: 3 }}>Course Content</Text>
                    {courseContent.map((content, index) => (
                        <View style={{ flexDirection: 'column', marginTop: 5, paddingLeft: 10, paddingVertical: 4 }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{index + 1}. {content.titles}</Text>
                            <Text style={{ fontSize: 11, marginTop: 2, paddingLeft: 10 }}>{content.descriptions}</Text>
                        </View>
                    ))}
                </View>
                <View style={{ flexDirection: 'column', marginTop: 20 }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', backgroundColor: '#24087e', color: 'white', paddingLeft: 25, paddingTop: 3 }}>Course Learning Outcome(CLO) Matrix</Text>
                    <View style={{ flexDirection: 'row', border: 1, borderColor: 'white', borderBottomColor: 'black' }}>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', width: '10%', backgroundColor: '#24087e', color: 'white', borderRight: 1, textAlign: 'center', borderColor: 'white' }}>CLOs</Text>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', width: '30%', backgroundColor: '#24087e', color: 'white', borderRight: 1, textAlign: 'center', borderColor: 'white' }}>CO Description</Text>
                        <View style={{ flexDirection: 'column', width: '30%', backgroundColor: '#24087e', color: 'white' }}>
                            <View >
                                <Text style={{ fontSize: 11, fontWeight: 'bold', width: '100%', backgroundColor: '#24087e', color: 'white', borderBottom: 1, borderRight: 1, textAlign: 'center', borderColor: 'white' }}>Bloom's Learning Level*</Text>
                            </View>
                            <View style={{ flexDirection: 'row', borderColor: 'white' }}>
                                <Text style={{ fontSize: 11, fontWeight: 'bold', width: '25%', backgroundColor: '#24087e', color: 'white', borderRight: 1, textAlign: 'center', borderColor: 'white' }}>C</Text>
                                <Text style={{ fontSize: 11, fontWeight: 'bold', width: '25%', backgroundColor: '#24087e', color: 'white', borderRight: 1, textAlign: 'center', borderColor: 'white' }}>P</Text>
                                <Text style={{ fontSize: 11, fontWeight: 'bold', width: '25%', backgroundColor: '#24087e', color: 'white', borderRight: 1, textAlign: 'center', borderColor: 'white' }}>A</Text>
                                <Text style={{ fontSize: 11, fontWeight: 'bold', width: '25%', backgroundColor: '#24087e', color: 'white', borderRight: 1, textAlign: 'center', borderColor: 'white' }}>S</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 11, fontWeight: 'bold', width: '13%', backgroundColor: '#24087e', color: 'white', borderRight: 1, textAlign: 'center', borderColor: 'white' }}>Plo Assessed</Text>
                        <Text style={{ fontSize: 11, fontWeight: 'bold', width: '17%', backgroundColor: '#24087e', color: 'white', padding: 2, textAlign: 'center', borderColor: 'white' }}>Clo-Plo Correlations*</Text>
                    </View>
                    {cloMatrix.map((clo, index) => (
                        <View style={{ flexDirection: 'row', border: 1, borderTop: 0, borderColor: 'black' }}>
                            <Text style={{ fontSize: 11, fontWeight: 'bold', width: '10%', color: 'black', borderRight: 1, textAlign: 'center', borderColor: 'black', paddingTop: 5 }}>CLO{index + 1}</Text>
                            <Text style={{ fontSize: 11, fontWeight: 'bold', width: '30%', color: 'black', borderRight: 1, textAlign: 'center', borderColor: 'black' }}>{clo.cloMatrixDes}</Text>
                            <View style={{ flexDirection: 'row', width: '30%', color: 'black' }}>
                                <Text style={{ fontSize: 11, fontWeight: 'bold', width: '25%', color: 'black', borderRight: 1, textAlign: 'center', borderColor: 'black', paddingTop: 5 }}>
                                    {bloomsLearning[index].C}
                                </Text>
                                <Text style={{ fontSize: 11, fontWeight: 'bold', width: '25%', color: 'black', borderRight: 1, textAlign: 'center', borderColor: 'black', paddingTop: 5 }}>
                                    {bloomsLearning[index].P}
                                </Text>
                                <Text style={{ fontSize: 11, fontWeight: 'bold', width: '25%', color: 'black', borderRight: 1, textAlign: 'center', borderColor: 'black', paddingTop: 5 }}>
                                    {bloomsLearning[index].A}
                                </Text>
                                <Text style={{ fontSize: 11, fontWeight: 'bold', width: '25%', color: 'black', borderRight: 1, textAlign: 'center', borderColor: 'black', paddingTop: 5 }}>
                                    {bloomsLearning[index].S}
                                </Text>
                                <View />

                            </View>
                            <Text style={{ fontSize: 11, fontWeight: 'bold', width: '13%', color: 'black', borderRight: 1, textAlign: 'center', borderColor: 'black', paddingTop: 5 }}>
                                {clo.ploAssessed}
                            </Text>
                            <Text style={{ fontSize: 11, fontWeight: 'bold', width: '17%', color: 'black', borderRight: 1, textAlign: 'center', borderColor: 'black', paddingTop: 5 }}>
                                {clo.ploCloCorelations}
                            </Text>

                        </View>

                    ))}
                </View>
                <View style={{ flexDirection: 'column', marginTop: 20 }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', backgroundColor: '#24087e', color: 'white', paddingLeft: 25, paddingTop: 3 }}>Lesson Planning with Mapping of Clo, Teaching and Assessment Strategies</Text>
                    <View style={{ flexDirection: 'row', border: 1, borderColor: 'black' }}>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', width: '10%', borderRight: 1, textAlign: 'center', borderColor: 'black' }}>Week</Text>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', width: '30%', borderRight: 1, textAlign: 'center', borderColor: 'black' }}>Topic</Text>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', width: '20%', borderRight: 1, textAlign: 'center', borderColor: 'black' }}>Teaching and Learning Strategies</Text>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', width: '20%', borderRight: 1, textAlign: 'center', borderColor: 'black' }}>Assessment Strategies</Text>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', width: '20%', textAlign: 'center', borderColor: 'black' }}>Corresponding CLOs</Text>
                    </View>
                    {lessonplan.map((course, index) => (
                        <View style={{ flexDirection: 'row', border: 1, borderColor: 'black', borderTop: 0 }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '10%', borderRight: 1, textAlign: 'center', borderColor: 'black' }}>{course.noOfWeeks}</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '30%', borderRight: 1, textAlign: 'center', borderColor: 'black' }}>{course.topics}</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '20%', borderRight: 1, textAlign: 'center', borderColor: 'black' }}>{course.teachingLearningStrategy}</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '20%', borderRight: 1, textAlign: 'center', borderColor: 'black' }}>{course.assessmentStrategy}</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '20%', textAlign: 'center' }}>{course.coRespondingClo}</Text>
                        </View>
                    ))}
                </View>
                <View style={{ flexDirection: 'column', marginTop: 20 }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', backgroundColor: '#24087e', color: 'white', paddingLeft: 25, paddingTop: 3 }}>Assessment and Evaluation</Text>
                    <View style={{ flexDirection: 'row', border: 1, borderColor: 'black' }}>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', width: '15%', borderRight: 1, textAlign: 'center', borderColor: 'black' }}>Assessment Type</Text>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', width: '30%', borderRight: 1, textAlign: 'center', borderColor: 'black' }}>Assessment Tools</Text>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', width: '20%', borderRight: 1, textAlign: 'center', borderColor: 'black' }}>Marks Distribution</Text>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', width: '20%', borderRight: 1, textAlign: 'center', borderColor: 'black' }}>Bloom's Catagory</Text>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', width: '15%', textAlign: 'center', borderColor: 'black' }}>Total</Text>
                    </View>
                    {courseAssessment.map((course, index) => (
                        <View style={{ flexDirection: 'row', border: 1, borderColor: 'black', borderTop: 0 }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '15%', borderRight: 1, textAlign: 'center', borderColor: 'black' }}>{course.assesmentType}</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '30%', borderRight: 1, textAlign: 'center', borderColor: 'black' }}>{course.assesmentTools}</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '20%', borderRight: 1, textAlign: 'center', borderColor: 'black' }}>{course.marksDistribution}</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '20%', borderRight: 1, textAlign: 'center', borderColor: 'black' }}>{course.bloomsCatagory}</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '15%', textAlign: 'center' }}>{course.totalMarks}</Text>
                        </View>
                    ))}
                    <View style={{ flexDirection: 'column', marginTop: 15 }}>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', textAlign: 'center' }}>The following chart will be followed for grading. Please note that for each category.</Text>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', textAlign: 'center' }}>*Numbers are inclusive</Text>
                        <View style={{ flexDirection: 'row', border: 1, borderColor: 'black' }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '10%', textAlign: 'center', borderColor: 'black', borderRight: 1 }}>A</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '9%', textAlign: 'center', borderColor: 'black', borderRight: 1 }}>A-</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '9%', textAlign: 'center', borderColor: 'black', borderRight: 1 }}>B+</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '9%', textAlign: 'center', borderColor: 'black', borderRight: 1 }}>B</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '9%', textAlign: 'center', borderColor: 'black', borderRight: 1 }}>B-</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '9%', textAlign: 'center', borderColor: 'black', borderRight: 1 }}>C+</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '9%', textAlign: 'center', borderColor: 'black', borderRight: 1 }}>C</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '9%', textAlign: 'center', borderColor: 'black', borderRight: 1 }}>C-</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '9%', textAlign: 'center', borderColor: 'black', borderRight: 1 }}>D+</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '9%', textAlign: 'center', borderColor: 'black', borderRight: 1 }}>D</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '9%', textAlign: 'center', borderColor: 'black' }}>F</Text>
                        </View>
                        <View style={{ flexDirection: 'row' ,border:1,borderTop:0 }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '10%', textAlign: 'center', borderColor: 'black',borderTop:0,borderRight:1 }}>90-100</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '9%', textAlign: 'center', borderColor: 'black', borderTop:0,borderRight:1 }}>85-89</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '9%', textAlign: 'center', borderColor: 'black', borderTop:0,borderRight:1 }} >80-84</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '9%', textAlign: 'center', borderColor: 'black', borderTop:0,borderRight:1 }} >75-79</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '9%', textAlign: 'center', borderColor: 'black', borderTop:0,borderRight:1 }} >70-74</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '9%', textAlign: 'center', borderColor: 'black', borderTop:0,borderRight:1 }} >65-69</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '9%', textAlign: 'center', borderColor: 'black', borderTop:0,borderRight:1 }} >60-64</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '9%', textAlign: 'center', borderColor: 'black', borderTop:0,borderRight:1 }} >55-59</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '9%', textAlign: 'center', borderColor: 'black', borderTop:0,borderRight:1 }} >50-54</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '9%', textAlign: 'center', borderColor: 'black', borderTop:0,borderRight:1 }} >45-49</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '9%', textAlign: 'center', borderColor: 'black' }} >0-44</Text>
                        </View>
                    </View>

                </View>

                <View style={{ flexDirection: 'column', marginTop: 20, borderLeft: 18, borderColor: '#24087e' }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', backgroundColor: '#24087e', color: 'white', paddingLeft: 25, paddingTop: 3 }}>Reference Books and Additional Materials</Text>
                    <Text style={{ fontSize: 11, marginTop: 5, paddingLeft: 20, paddingVertical: 4 }}>{courseoutline[0].courseReference}</Text>
                </View>



            </Page>
        </Document >
    )
}

export default CourseOutline