import React from 'react';
import "./Banner.css"
const Banner = () => {
    return (
        <div className="banner ">
        <div className="banner-bg text-white d-flex align-items-center justify-content-center ">
          <div className="">
            <h1 className="font">Welcome</h1>
            <h2>I am Somaya Sayma</h2>
            <h2>I am a Web Developer</h2>
            <br />
            <a href="https://drive.google.com/file/d/1IE7e7SQNilsU-JSQCEOUJzWmRbE89MqM/view?usp=sharing">
              {" "}
              <button className="btn btn-light">Download Resume</button>
            </a>
          </div>
        </div>
      </div>
    );
};

export default Banner;