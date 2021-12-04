import React from 'react';
import Phone from '../../images/phone.png';

export default function Section4() {
    return (
        <div>
                <div class="row bg-light" >
                        <div class="col-1"></div>
                        <div class="col-3 mt-5">
                          <h5 class="text-justify text-dark"><b>Schedule your Appointment</b> </h5>
                          <p class="text-justify ">Lorem ipsum idset Lorem ipsum idset 
                            Lorem ipsum idset Lorem ipsum idset Lorem ipsum idset
                            Lorem ipsum idset</p>
                            <button class="btn btn-primary btn-lg">Schedule</button>
                        </div>
                        <div class="col-2"></div>
                        <div class="col-6">
                          <img class="img-fluid" src={Phone} alt="" srcset="" />
                        </div>
                      </div>
                  
        </div>
    )
}
