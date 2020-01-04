import React, { Component } from "react";
import './login.css';
import Register from "../Registration/registration";
import reg_data from "../Data/data";


export default class Login extends Component {

    current_data = {
        "email": "",
        "password": "",
    }

    onAttrGet = (e, type) =>
    {
        this.current_data[type] = e.target.value;
    }

    onCheck = () => {
        for(let key in this.current_data)
        {
            if(this.current_data[key] === "")
            {
                return false;
            }
        }
        return true;
    }
    onLogin = () => {
        console.log(reg_data);
        console.log(this.current_data);
        if(this.onCheck())
        {
            let count = 0;
            for(let data in reg_data)
            {
                if(this.current_data["email"] === reg_data[data]["email"] && this.current_data["password"] === reg_data[data]["password"])
                {
                    alert("You have successfully logined")
                    break
                }
                else
                {
                    if(count === 0)
                    {
                        alert("Please make sure you have filled the fields correctly")
                    }
                    count++;
                }
            }
            
        }
        else
        {
            alert("Please make sure you have filled all fields");
        }
    }

    render() {
        return (
            <main>
                <h1>Log In</h1>
                <form action="">
                    <div className="email">
                        <label htmlFor="email">E-mail: &nbsp;</label>
                        <input type="text" id="email" onChange = {(e) => this.onAttrGet(e,"email")} />
                    </div>
                    <br />
                    <div className="password">
                        <label htmlFor="password">Password: &nbsp;</label>
                        <input type="password" id="passsword" onChange = {(e) => this.onAttrGet(e,"password")} />
                    </div>
                    <br />
                    <div className="login_button">
                        <button type="button" onClick = {this.onLogin}>Log In</button>
                    </div>
                </form>
                <h4>
                    Haven't you already been registered? &nbsp;
                    <a href = "./registration.html">Let's be registered</a>
                </h4>
            </main>
        );  
    }
}