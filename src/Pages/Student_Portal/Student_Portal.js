import React from "react";
import Welcome from "../../Components/Welcome/Welcome";
import TopNav from '../../Components/TopNav/TopNav';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

function Student_Portal(){
 return(
    <div>
        <TopNav/>
        <Header/>
        <Welcome/>
        <Footer/>

    </div>
 )
}
export default Student_Portal;
