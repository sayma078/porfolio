import React from 'react';


const Projects = () => {
    return (
        <div className="container ">
            <h2 className="p-4">My Projects</h2>
            <div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col cols-sm-12">
    <div class="card ">
      {/* <img src={webDesign} class="card-img-top" alt="..."/> */}
      <div class="card-body">
        <h5 class="card-title">Web Design</h5>
        
      </div>
    </div>
  </div>
  <div class="col cols-sm-12">
    <div class="card ">
      {/* <img src={responsiveWeb} class="card-img-top" alt="..."/> */}
      <div class="card-body">
        <h5 class="card-title">Responsive Website</h5>
        
      </div>
    </div>
  </div>
  <div class="col cols-sm-12">
    <div class="card">
      {/* <img src={bugSolving} class="card-img-top images" alt="..."/> */}
      <div class="card-body">
        <h5 class="card-title">Bug Solving</h5>
        
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Projects;