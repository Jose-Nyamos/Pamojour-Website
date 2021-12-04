import React from 'react'
import Logo from '../../images/pamojor-logo.png';

export default function Section() {
    return (
              <div class="row">
                  <div class="col-1"></div>
                    <div class="col-2 mt-4">
                        <img  src={Logo} alt="" srcset="" />
                    </div>
                    <div class="col-3">
                      <h2 class="text-primary mt-5 ml-5"><b>Pamojour</b></h2>
                    </div>
                    <div class="col-3"></div>
                    <div class="col-3"> 
                      <div class="float-right">
                        <button class="btn btn-primary me-md-2 mt-5 rounded-pill" type="button">Submited Request</button>
                        <button class="btn btn-primary mt-5 rounded-pill" type="button">Free Account</button>
                      </div>      
                      </div>
               </div>
              
            )
    }
