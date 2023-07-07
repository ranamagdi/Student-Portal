import React from "react";
import { Button, Container, Row,Col, ProgressBar } from "react-bootstrap";
import {FaRegCalendar,FaImage,FaRegNoteSticky} from 'react-icons/fa6';
import './Upcoming_courses.css';






function Upcoming_courses(){
    return(
        <section className="upcoming_courses">
            <Container>
            <h2>Upcoming Courses</h2>
            <div className="courses-instructor">
                <div className="one-course">
                    <div className="image">
                      <FaImage className="icon"/>
                      <p>LEV. 1</p>
                    </div>
                    <div className="content">
                        <h2>Python for Beginners</h2>
                        <div className="icon">
                          <div className="icon-span">
                        <FaRegCalendar className="icon-cal"/>
                        <span>Wednesday, June 7th</span>
                        </div>
                        <div className="icon-span">
                        <FaRegNoteSticky className="icon-cal"/>
                        <span>12 lessons</span>
                        </div>
                        </div>
                        <Button>VIEW DETAILS</Button>
                    </div>
                </div>

                <div className="one-course">
                    <div className="image">
                      <FaImage className="icon"/>
                      <p>LEV. 1</p>
                    </div>
                    <div className="content">
                        <h2>Python for Beginners</h2>
                        <div className="icon">
                          <div className="icon-span">
                        <FaRegCalendar className="icon-cal"/>
                        <span>Wednesday, June 7th</span>
                        </div>
                        <div className="icon-span">
                        <FaRegNoteSticky className="icon-cal"/>
                        <span>12 lessons</span>
                        </div>
                        </div>
                        <Button>VIEW DETAILS</Button>
                    </div>

                </div>

            </div>

            </Container>


        </section>
    )
}

export default Upcoming_courses;
