import React, { Component } from 'react';
import Login from "../Login/login";
import Register from "../Registration/registration";
import './app.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default class App extends Component {
    reg_data = [
        {
            id: 0,
            name: "Ruben",
            surname: "Sargsyan",
            email: "rubensargsyan854@gmail.com",
            age: 15,
            password: "pass",
            photo_url: "url"
        }
    ];

    render() {
        return (
            <Router>
                <div className = "menu">
                    <Link to="/register">Registration</Link>
                    <Link to="/login">Login</Link>
                </div>

                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register reg_data = {this.reg_data}/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}
