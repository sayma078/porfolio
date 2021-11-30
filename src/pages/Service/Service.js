import React from 'react';
import webDesign from "../../images/web design.png";
import responsiveWeb from "../../images/responsiveweb.png";
import webDevelopment from "../../images/Web-Development.jpeg";
import bugSolving from "../../images/01featuredimage.jpg";
import "./Service.css";

const Service = () => {
    return (
        <div className="container " id="service">
            <h2 className="p-4">My Services</h2>
            <div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col cols-sm-12">
    <div class="card ">
      <img src={webDesign} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Web Design</h5>
        
      </div>
    </div>
  </div>
  <div class="col cols-sm-12">
    <div class="card ">
      <img src={responsiveWeb} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Responsive Website</h5>
        
      </div>
    </div>
  </div>
  <div class="col cols-sm-12">
    <div class="card">
      <img src={bugSolving} class="card-img-top images" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Bug Solving</h5>
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={webDevelopment} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Web development</h5>
       
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Service;