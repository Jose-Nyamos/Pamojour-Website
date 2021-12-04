import React , {Component} from 'react';
import axios from 'axios';
import './login.css';



export default class  Login extends Component{

    HandleSubmit = e =>{
        e.preventDefault();
        const data = {
            email: this.Email,
            password:this.Password
        };
        
        
        axios.post('login', data).then(
            res => {
                localStorage.setItem('token', res.data.token);

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
                    <h3>Login</h3>
                    <div className="form-group">
                        <label htmlFor="">Enter your Email</label>
                        <input className="form-control" type="email" placeholder="Username"  onChange={e => this.email = e.target.value}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input className="form-control"  type="password" placeholder="Password" onChange={e => this.password = e.target.value}/>
                    </div>
                    <button className="btn btn-primary btn-block">Sign Up</button>
    
                </form>

            </div>
        </div>         
        )

    }
        
}
