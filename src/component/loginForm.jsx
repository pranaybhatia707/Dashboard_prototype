import React,{Component} from 'react';
import logo from '../smartserv_logo1.png';

import './loginForm.css';

function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.match(validRegex)) {
      return true;
    }
    return false;
  }
  
  function ValidatePassword(input){
    var validRegex1 = /[A-Z]/;
    var validRegex2 = /[0-9]/;
  
    if(input.match(validRegex1) && input.match(validRegex2)){
      return true;
    }
    return false;
  }
  
  class LoginForm extends Component{
    constructor(props){
      super(props);
      this.state = {
        username:'',
        password:'',
        emailError: <div></div>,
        passwordError: <div></div>,
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(e){
      if(e.target.name === "password"){
        var validRegex = /[.!#$%&'*+/=?^_`{|}~-]/;
        if(e.target.value.match(validRegex)){
          this.setState({
            passwordError:<p className="p"><i>No Special character except @ allowed<br />
             Delete last input character</i></p>
          });
          return;
        }
      }
      this.setState({
        [e.target.name]:e.target.value,
      });
    }
  
    handleSubmit(e){
      e.preventDefault();
      if(ValidateEmail(this.state.username)){
        if(ValidatePassword(this.state.password)){
          // You can fuck up here :)
          if(this.state.password === "SmartServTest@123"){
            // open Dashboard ....
            sessionStorage.setItem("isLoggedIn", "true");
            // log out after 1 hour ...
            window.setTimeout(() => {
                sessionStorage.removeItem("isLoggedIn");
            }, 1 * 60 * 60 * 60);
            window.location = '/dashboard';
            return;
          }
          this.setState({
            passwordError:<p className="p"><i> Wrong Password :( </i></p>
          });
          return;
        }
        this.setState({
          passwordError:<p className="p"><i> Password must contain an uppercaseand and a number </i></p>
        });
        return;
      }
      this.setState({
        emailError:<p className="p"><i> Email not valid </i></p>
      });
    }

    componentDidMount() {
        document.body.style.backgroundColor = "rgba(22, 22, 22, 0.856)";
    }
  
  
    render(){
      let p = this.state.passwordError;
      let e = this.state.emailError;
      return(
        <div className="App">
          <div id="cont">
            <img src={logo} alt="brand logo" id="logo1" />
            <form className="form1">
              <input type="email" name="username" placeholder="Username" id="ip1" onChange={this.handleChange} />
              {e}
              {/* <br /> */}
              <input type="password" name="password" placeholder="Password" id="ip2" onChange={this.handleChange} />
              {p}
              {/* <br /> */}
              <button id="bt1" onClick={this.handleSubmit}> Login </button>
            </form>
            <a id="fgt" href = "mailto: support@smartserv.io">Forgot your password?</a>
          </div>
        </div>
      );
    }
  }

  export default LoginForm;