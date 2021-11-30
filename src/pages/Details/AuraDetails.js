import React from 'react';
import banner from "../../images/aura.PNG";
import auraProduct from "../../images/aura-product.PNG";
import auraDash from "../../images/aura-dash.PNG"

const AuraDetails = () => {
    return (
        <div>
            <h2>Aura Details</h2>
            <div className="container " id="service">
            <div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col cols-sm-12">
    <div class="card ">
      <img src={banner} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Web Design</h5>
        
      </div>
    </div>
  </div>
  <div class="col cols-sm-12">
    <div class="card ">
      <img src={auraProduct} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Responsive Website</h5>
        
      </div>
    </div>
  </div>
  <div class="col cols-sm-12">
    <div class="card">
      <img src={auraDash} class="card-img-top images" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Bug Solving</h5>
        
      </div>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default AuraDetails;