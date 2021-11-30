import React from "react";
import aura from "../../images/aura.PNG";
import tripIn from "../../images/trip-in.PNG";
import odontic from "../../images/odontice-care.PNG";
import "./Projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="container ">
      <h2 className="p-4">My Projects</h2>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col cols-sm-12">
          <div class="card ">
            <img src={aura} class="card-img-top image" alt="..." />
            <div class="card-body">
              <h5 class="card-title">AURA</h5>
              <p>
                Build a full stack website with firebase authentication,
                firebase hosting. A buyer can sign in with google, order
                products ....
              </p>
              <div className="d-flex justify-content-around">
              <Link to="/auraDetails" >
                {" "}
                <button className="btn btn-secondary">Explore</button>
              </Link>
              <a href="https://aura-426aa.web.app/"><button className="btn btn-secondary">Live link</button></a>

              </div>



              
            </div>
          </div>
        </div>
        <div class="col cols-sm-12">
          <div class="card ">
            <img src={tripIn} class="card-img-top image" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Trip-in</h5>
              <p>
                Website is for travel and holiday package booking where user can
                sign in or sign up with google.There are more feature ....
              </p>
              <div className="d-flex justify-content-around">
              <Link to="/tripDetails" >
                {" "}
                <button className="btn btn-secondary">Explore</button>
              </Link>
              <a href="https://trip-in-8388f.web.app/"><button className="btn btn-secondary">Live link</button></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col cols-sm-12">
          <div class="card">
            <img src={odontic} class="card-img-top image" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Odontic-Care</h5>
              <p>
                {" "}
                This website is about Odontic-care for patent also showing
                different services.There are some feature like Home ....
              </p>
              <div className="d-flex justify-content-around">
              <Link to="/odonticDetails" >
                {" "}
                <button className="btn btn-secondary">Explore</button>
              </Link>
              <a href="https://health-care-8b237.web.app/"><button className="btn btn-secondary">Live link</button></a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
