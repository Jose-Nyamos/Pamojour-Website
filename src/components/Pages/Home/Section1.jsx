import React from 'react'
import PeopleImage from '../../images/people.png'
import './home.css'

const divStyle = {
    height: '100%',
    color: 'grey',
    backgroundImage: 'url('+PeopleImage+')',
  };

export default function Section1() {
    return (
        
    <div class="row bg-light" style={divStyle}>
          <div class="col-1"></div>
          <div class="col-2 mt-5 mb-3 ml-3">
            <div class="menu border" >
              <a class="dropdown-item bg-dark text-white" href="#">Browse by Category</a>
              <a class="dropdown-item bg-secondary" href="#">Hair Services</a>
              <a class="dropdown-item bg-secondary" href="#">Waxingservices</a>
              <a class="dropdown-item bg-secondary" href="#">Mens services</a>
              <a class="dropdown-item bg-secondary " href="#">Texturing services</a>
              <a class="dropdown-item bg-secondary" href="#">Waxingservices</a>
              <a class="dropdown-item bg-secondary" href="#">Mens services</a>
              <a class="dropdown-item bg-secondary" href="#">Hair Services</a>
              <a class="dropdown-item bg-secondary" href="#">Waxingservices</a>
              <a class="dropdown-item bg-secondary" href="#">Mens services</a> 
          </div>
          </div>
          <div class="col-6"></div>
          <div class="col-lg-2 bg-white mt-5 mr-1 ml-1 mb-5 shadow-lg ">
             <form >
              <div class="form-group">
                <label>Get Your FREE Account</label>
                <br /><br />
                <button class="btn btn-sm border form-control mr-2"><img src="https://img.icons8.com/office/16/000000/google-logo.png"/>
                  Sign up with google</button>
                  <br /><br />
                  <button class="btn btn-sm border form-control">
                    <img src="https://img.icons8.com/color/24/000000/facebook-new.png"/>
                    Sign up with facebook
                </button>
              </div>
              <br />
              <div class="divider">
                <hr class="left"/>or<hr class="right" />
            </div>
              <div class="form-group">   
                <input placeholder="Name" type="text" />
              </div>
              <br />
              <div class="form-group">   
                <input placeholder="Email" type="email" />
              </div>
              <br />
              <div class="form-group">  
                <img src="https://img.icons8.com/emoji/24/000000/kenya-emoji.png"/> 
                 <input id="phone" type="tel" name="phone" placeholder="+254"/>
              </div>
              <br />
              <div class="form-group">   
                <input placeholder="Password" type="password" />
              </div>
              <br />
              <button type="button" class="btn btn-primary btn-sm text">Sign Up</button>
              <br /><br />
            </form>
            </div>
            <p class="text-center text-white">For proper treatment 24/7 Customer support Guaranteed Orientation</p>
        </div>
         
    )
}
