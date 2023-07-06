import React from "react";
import { Button, Container, Row,Col } from "react-bootstrap";
import './Registered_courses.css';
import {FaRegClock,FaRegPenToSquare,FaRegUser} from 'react-icons/fa6';
function Registered_courses(){
  const time = new Date(2023, 7, 5, 22, 31);
  const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const nthNumber = (number) => {
    if (number > 3 && number < 21) return "th";
    switch (number % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  const formatAMPM = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes.toString().padStart(2, '0');
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}
    return(
        <section className="Registered_courses">
            <Container>
                <div className="Courses-exam">
                <div className="courses">
                <h1>Ongoing Courses</h1>
                <div className="course">
                   <h1>Introduction to React js</h1>
                   {/* <p><span>Instructor</span> : Traiq Ali</p> */}
                   <div className="level-btn">
                     <h1>Lev.1</h1>
                     <div className="icon-instructor">
                     <FaRegUser className="instructor-user"/>
                     <span>20 Students</span>
                     </div>
                     <Button>View Details</Button>
                   </div>
                </div>
                <div className="course">
                   <h1>Introduction to Data Analysis</h1>
                   {/* <p><span>Instructor</span> : sara ahmed</p> */}
                   <div className="level-btn">
                     <h1>Lev.1</h1>
                     <div className="icon-instructor">
                      <FaRegUser className="instructor-user"/>
                     <span>20 Students</span>
                     </div>
                     <Button>View Details</Button>
                   </div>
                </div>
                </div>
                <div className="exams">
                <h1>Upcoming Exams</h1>
                <div className="exam">
                    <div className="date-exam">
                      <p className="first-p">{time.getDate()}{nthNumber(time.getDate())}</p>
                      <p className="second-p">{month[time.getMonth()]}</p>
                      <p className="day">{weekday[time.getDay()]}</p>
                    </div>
                    <div className="course-exam">
                     <div className="edit-instructor">
                    <h1>Introduction to React js</h1>
                    <FaRegPenToSquare className="edit-icon"/>
                    </div>
                    <p><span>Instructor</span> : Traiq Ali</p>
                   <div className="level-icon">
                     <h1>Lev. 1Exam</h1>
                     <div className="exam-time">
                     <FaRegClock className="icon-exam "/>
                     <span>{formatAMPM(time)}</span>
                     </div>
                   </div>
                   </div>
                </div>
                </div>
                </div>





            </Container>


        </section>
    )
}
export default Registered_courses;
