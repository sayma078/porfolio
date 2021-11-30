import React from 'react';
import img from "../../images/me.png"
import "./About.css"

const About = () => {
    return (
        <div className="conteiner" id="about">
            <div className="row m-5 d-flex justify-content-center align-items-center">
           <div className=" cols-md-6 ">
               <h2 className="p-4">About Me</h2>
               <div className=" cols-md-3 ">
                   <img className="person" src={img} alt="" />
               </div>
               <h5 className="cols-sm-6">Assalamualaikom. I'm Sayma ,a Full Stack Web Application Developer. I am a student of Uttara University Department of CSE. I have experience of 15+ web projects by using JavaScript, React.js, Node.js, MongoDB and other technologies. I have also solid knowledge of CSS framework like bootstrap, tailwind and material-ui. I worked for over a year on Frontend design and development</h5>
               </div> 
              
        </div>
        </div>
    );
};

export default About;