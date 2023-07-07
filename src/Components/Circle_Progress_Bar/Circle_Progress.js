import React from "react";
import { Button, Container, Row,Col } from "react-bootstrap";
import './Circle_Progress.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function Circle_Progress(){
    const percentage = 66;
    return(
        <section className="Circle_Progress">
            <Container>
                <h2>Here's how you've been doing for the <span>last month</span> </h2>
                <div className="Progress">

                    <div className="progress-one">
                    <div className="progress-div">
                    <CircularProgressbar className="circle" value={percentage} text={`${percentage}%`} />
                    </div>
                    <p className="course_name">Introduction to React js</p>
                    <p className="Lev-p">LEV. 1</p>
                    <p>27 / 30 Hours</p>
                    </div>

                    <div className="progress-one">
                    <div className="progress-div">
                    <CircularProgressbar className="circle" value={percentage} text={`${percentage}%`} />
                    </div>
                    <p className="course_name">Introduction to React js</p>
                    <p className="Lev-p">LEV. 1</p>
                    <p>27 / 30 Hours</p>
                    </div>

                    <div className="progress-one">
                    <div className="progress-div">
                    <CircularProgressbar className="circle" value={percentage} text={`${percentage}%`} />
                    </div>
                    <p className="course_name">Introduction to React js</p>
                    <p className="Lev-p">LEV. 1</p>
                    <p>27 / 30 Hours</p>
                    </div>

                    <div className="progress-one">
                    <div className="progress-div">
                    <CircularProgressbar className="circle" value={percentage} text={`${percentage}%`} />
                    </div>
                    <p className="course_name">Introduction to React js</p>
                    <p className="Lev-p">LEV. 1</p>
                    <p>27 / 30 Hours</p>
                    </div>

                </div>

            </Container>

        </section>
    )
}
export default Circle_Progress;
