import React from "react";
import Welcome from "../../Components/Welcome/Welcome";
import TopNav from '../../Components/TopNav/TopNav';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Registered_courses from "../../Components/Registered-courses/Registered_courses";
import Certifications from "../../Components/Certifications/Certifications";

function Student_Portal(){
 return(
    <div>
        <TopNav/>
        <Header/>
        <Welcome/>
        <Registered_courses/>
        <Certifications/>
        <Footer/>

    </div>
 )
}
export default Student_Portal;
