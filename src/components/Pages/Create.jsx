import React , {Component} from 'react';
import axios from 'axios';
import './login.css';


export default class  Create extends Component{
    HandleSubmit = e =>{
        e.preventDefault();
        const data = {
            username: this.username,
            email: this.email,
            password:this.Password
        };
        axios.post('create', data)
        .then(
            res => {
                console.log(res)

            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    }
    render(){

        return(
            <div className="auth-wrapper">
                <div className="auth-inner">

                    <form onSubmit={this.HandleSubmit}>

                            <h3>Sign Up</h3>
                            
                            <div class="form-group">
                                <label htmlFor="">Username</label>
                                <input type="text" placeholder="Username"  className="form-control" onChange={e => this.username = e.target.value}/>
                            </div>

                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="Email Address" className="form-control" onChange={e => this.email = e.target.value}/>
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" placeholder="Password" className="form-control" onChange={e => this.password = e.target.value}/>
                            </div>
                            <button className="btn btn-primary btn-block">Sign Up</button>
        
                    </form>
            

                </div>

            </div>
                 
        
        )

    }
        
}
