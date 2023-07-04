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
                    <h1>Welcome Back <span>username</span></h1>
                   <Button >View Profile</Button>
           </Container>

           <Container>
              <div className="dashboard-student">

                 <div className="content">
                    <span className="content-numbers">1</span>
                    <h2>Upcoming<span> Exams</span> </h2>
                 </div>
                 <div className="content md" >
                    <span className="content-numbers">4</span>
                    <h2>Registered<span> Courses</span> </h2>

                 </div>
                 <div className="content" >
                   <span className="content-numbers">2</span>
                    <h2>Completed<span> Courses</span> </h2>
                 </div>
             </div>
           </Container>

           <Container className="progress-welcome-container">
              <div className="progress-welcome">

                 <div className="content" >
                    <p>Level : 1</p>
                 </div>
                 <div className="content percentage" >
                    <p>{`${now}%`}</p>
                 </div>

             </div>
             <ProgressBar min={0} now={now}/>
           </Container>


           <Container>
              <div className="Exam-today">

                 <div className="Exam-today-content not-exist">
                    <FaRegCircleCheck className='Exam-today-icon'/>
                    <span> All Clear,you don't have any exams today.</span>
                 </div>

                 <div className="Exam-today-content exist">
                   <span >The name of exam topic </span>
                   <Button >Go</Button>
                 </div>



             </div>
           </Container>






           </div>

        </section>
    )
}
export default Welcome;
