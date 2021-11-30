import React from 'react';
import odontic from "../../images/odontice-care.PNG";
import odonticService from "../../images/odontic-service.PNG";
import odonticeFaq from "../../images/odontiq-faq.PNG"

const OdonticCare = () => {
    return (
        <div>
             <div className="container " id="service">
            <h2 className="p-3">Odontic-Care Details</h2>
           
            <div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col cols-sm-12">
    <div class="card ">
      <img src={odontic} class="card-img-top aura" alt="..."/>
      
    </div>
  </div>
  <div class="col cols-sm-12">
    <div class="card ">
      <img src={odonticService} class="card-img-top aura" alt="..."/>   
    </div>
  </div>
  <div class="col cols-sm-12">
    <div class="card">
      <img src={odonticeFaq} class="card-img-top aura" alt="..."/>
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
<a href="https://health-care-8b237.web.app/">Live link</a></button>

        </div>
        </div>
    );
};

export default OdonticCare;