import React from "react";
import { Button, Container, Row,Col, ProgressBar } from "react-bootstrap";
import {FaRegCircleCheck} from 'react-icons/fa6';
import './Welcome.css';
import { format } from 'date-fns';






function Welcome(){
   const now = 97;
   const dateString = format(
      new Date(),
      "do LLLL yyyy"
    );


    return(
        <section className="Welcome">
          <div className="overlay-welcome">
            <Container className="Date_portal">
                   <Row>
                   <Col size={12} md={6} sm={6}>
                    <p>Student Portal </p>
                    <div className="hr-welcome"></div>
                    <p>{dateString}</p>
                    </Col>
                   </Row>
            </Container>
           <Container className="welcome-content">
             <Row>
                <Col size={12} md={6} sm={6}>
                    <h1>Welcome Back <span>username</span></h1>
                </Col>
                <Col size={12} md={6} sm={6}>
                <Button >View Profile</Button>
                </Col>
             </Row>
           </Container>

           <Container>
              <Row className="dashboard-student">

                 <Col className="content" size={12} md={4} sm={4}>
                    <span className="content-numbers">1</span>
                    <h2>Upcoming<span> Exams</span> </h2>

                 </Col>
                 <Col className="content md" size={12} md={4} sm={4}>
                    <span className="content-numbers">4</span>
                    <h2>Registered<span> Courses</span> </h2>

                 </Col>
                 <Col className="content" size={12} md={4} sm={4}>
                   <span className="content-numbers">2</span>
                    <h2>Completed<span> Courses</span> </h2>

                 </Col>
             </Row>
           </Container>

           <Container>
              <Row className="progress-welcome">

                 <Col className="content" size={12} md={6} sm={6}>
                    <p>Level 1:</p>
                 </Col>
                 <Col className="content percentage" size={12} md={6} sm={6}>
                    <p>{`${now}%`}</p>
                 </Col>
                 <ProgressBar min={0} now={now}/>

             </Row>
           </Container>


           <Container>
              <Row className="Exam-today">

                 <Col className="Exam-today-content not-exist">
                    <FaRegCircleCheck className='Exam-today-icon'/>
                    <span> All Clear,you don't have any exams today.</span>
                 </Col>

                 <Col className="Exam-today-content exist">
                   <span >The name of exam topic  <Button >Go to Exam</Button></span>


                 </Col>



             </Row>
           </Container>






           </div>

        </section>
    )
}
export default Welcome;
