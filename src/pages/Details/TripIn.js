import React from 'react';
import tripIn from "../../images/trip-in.PNG"
import tripProduct from "../../images/trip-product.PNG";
import tripDash from "../../images/trip-dash.PNG";



const TripIn = () => {
    return (
        <div>
             <div className="container " id="service">
            <h2 className="p-3">Trip-in Details</h2>
           
            <div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col cols-sm-12">
    <div class="card ">
      <img src={tripIn} class="card-img-top aura" alt="..."/>
      
    </div>
  </div>
  <div class="col cols-sm-12">
    <div class="card ">
      <img src={tripProduct} class="card-img-top aura" alt="..."/>   
    </div>
  </div>
  <div class="col cols-sm-12">
    <div class="card">
      <img src={tripDash} class="card-img-top aura" alt="..."/>
    </div>
  </div>
  <div class="col cols-sm-12">
    <div class="card">
      <p>#  Website is for travel and holiday package booking where
user can sign in or sign up with google.</p>
<p># There are more feature like Home, About, Services, My
Bookings, Manage Bookings .</p>
<p># Used by React Bootstrap, React, Firebase, Node Js,
Express Js, MongoDB .</p>

    </div>
  </div>
</div>
<button>
<a href="https://trip-in-8388f.web.app/">Live Link</a></button>
        </div>
        </div>
    );
};

export default TripIn;