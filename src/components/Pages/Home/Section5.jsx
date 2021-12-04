import React from 'react';
import Pic from '../../images/pics/pic.jpeg';
import Pic1 from '../../images/pics/pic1.jpeg';
import Pic2 from '../../images/pics/pic2.jpeg';
import Pic3 from '../../images/pics/pic3.jpeg';
import Pic4 from '../../images/pics/pic4.jpeg';

export default function Section5() {
    return (
        <div>
            <div class="row m-0 p-0">
            <div class="col-1"></div>
            <div class="col-sm-2 ">
            <img class="border" src={Pic} alt="" />
            <p class="dark"><b>Quality hair services</b> </p>
            <p>lorem ipsum lorem ipsum
                lorem ipsum
            </p>
            </div>
            <div class="col-sm-2 ">
            <img class="border"  src={Pic1} />
            <p class="dark"><b>Quality hair services</b></p>
            <p>lorem ipsum lorem ipsum
                lorem ipsum
            </p>
            </div>
            <div class="col-sm-2 ">
            <img class="border"  src={Pic2} />
            <p class="dark"><b>Quality hair services</b> </p>
            <p>lorem ipsum lorem ipsum
                lorem ipsum
            </p>
            </div>
            <div class="col-sm-2">
            <img class="border" src={Pic3} />
            <p class="dark"><b>Quality hair services</b> </p>
            <p>lorem ipsum lorem ipsum
                lorem ipsum
            </p>
            </div>
            <div class="col-sm-2">
            <img class="border"  src={Pic4} />
            <p class="dark"><b>Quality hair services</b> </p>
            <p>lorem ipsum lorem ipsum
                lorem ipsum
            </p>
            </div>
            <div class="col-1"></div> 
        </div>
        </div>
    )
}
