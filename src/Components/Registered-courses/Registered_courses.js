import React from "react";
import { Button, Container, Row,Col } from "react-bootstrap";
import './Registered_courses.css';
function Registered_courses(){
    return(
        <section className="Registered_courses">
            <Container>
                <div className="Courses-exam">
                <h1>Registered Courses</h1>
                <h1>Upcoming Exams</h1>
                </div>
                <div className="course">
                   <h1>Introduction to React js</h1>
                   <p><span>Instructor</span> : Traiq Ali</p>
                </div>





            </Container>


        </section>
    )
}
export default Registered_courses;
