import React from 'react'
import Saloon from '../../images/saloon.png';
import Cleaner from '../../images/cleaner.png';
import Gym from '../../images/gym.png';
import Shambaboy from '../../images/shambaboy.png';
import Kinyozi from '../../images/Kinyozi.png';


export default function Section2() {
    return (
        
        <div>
        <h6 class="text-center"><b>Our Services</b> </h6>
        
        <div class="row">
            <div class="col-1"></div>
            <div class="col-sm-2">
            <img class="image_fluid" src={Saloon} alt=""  />
            
            </div>
            <div class="col-sm-2">
            <img src={Cleaner} alt="" />
            
            </div>
            <div class="col-sm-2">
            <img src={Gym} alt=""  />
            
            </div>
            <div class="col-sm-2">
            <img src={Shambaboy} alt="" />
            
            </div>
            <div class="col-sm-2">
            <img src={Kinyozi} alt=""  />
            </div>
            <div class="col-1"></div> 
      </div>
      </div>
    )
}
