import React from 'react';
import banner from "../../images/aura.PNG";
import auraProduct from "../../images/aura-product.PNG";
import auraDash from "../../images/aura-dash.PNG";
import "../../pages/Details/AuraDetails.css"

const AuraDetails = () => {
    return (
        <div>
             <div className="container " id="service">
            <h2 className="m-5">Aura Details</h2>
           
            <div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col cols-sm-12">
    <div class="card ">
      <img src={banner} class="card-img-top aura" alt="..."/>
      
    </div>
  </div>
  <div class="col cols-sm-12">
    <div class="card ">
      <img src={auraProduct} class="card-img-top aura" alt="..."/>   
    </div>
  </div>
  <div class="col cols-sm-12">
    <div class="card">
      <img src={auraDash} class="card-img-top aura" alt="..."/>
    </div>
  </div>
  <div class="col cols-sm-12">
    <div class="card">
      <p># Build a full stack website with firebase authentication,
firebase hosting.</p>
<p># A buyer can sign in with google, order products, cancel
products and also give feedback in review section.</p>
<p># A admin can sign in with google, add some products, able
to make another user to admin, also admin can change
pending status and can confirm order.</p>
<p># Used by Bootstrap, React Router, Firebase, Node Js,
Express Js, MongoDB .</p>
    </div>
  </div>
</div>
<a href="https://github.com/sayma078/aura-client-site"><button className="btn mt-3 btn-secondary">Client Code</button></a>
<br />
<br />
<a href="https://github.com/sayma078/aura-server-site"><button className="btn btn-secondary">Server Code</button></a>

        </div>
        </div>
    );
};

export default AuraDetails;