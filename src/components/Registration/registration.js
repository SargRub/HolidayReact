import React, { Component } from 'react';
import './registration.css';
import reg_data from "../Data/data";


export default class Register extends Component {
    current_data = {
        id: 0,
        name: "",
        surname: "",
        email: "",
        age: "",
        password: "",
        photo_url: ""
    };
    reset() {
        let inputs = document.getElementsByTagName("input")
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = ""
        }
    }
    defineCurrentData = () => {
        this.current_data.id = this.reg_data[this.reg_data.length - 1].id + 1;
        this.reg_data[this.reg_data[this.reg_data.length - 1].id + 1] = this.current_data;
        console.log(this.reg_data)
        this.reset()
    }
    onChangeAttr = (e, attr) => {
        this.current_data[attr] = e.target.value;
    }
    onSubmit = () => {
        if (this.checkData(this.current_data)) {
            this.defineCurrentData()
        }
    }
    checkData = (data) => {
        for (let key in data) {
            if (data[key] === "") {
                alert("Please fill ALL fields")
                return false
            }
        }
        return true
    }
    render() {
        return (
            <main>
                <h1>Registration form</h1>
                <form action="">
                    <div className="name">
                        <label htmlFor="name">Name: &nbsp;</label>
                        <input type="text" id="name" onChange={(e) => { this.onChangeAttr(e, "name") }} />
                    </div>
                    <br />
                    <div className="surname">
                        <label htmlFor="surname">Surname: &nbsp;</label>
                        <input type="text" id="surname" onChange={(e) => { this.onChangeAttr(e, "surname") }} />
                    </div>
                    <br />
                    <div className="email">
                        <label htmlFor="email">E-mail: &nbsp;</label>
                        <input type="text" id="email" onChange={(e) => { this.onChangeAttr(e, "email") }} />
                    </div>
                    <br />
                    <div className="password">
                        <label htmlFor="password">Password: &nbsp;</label>
                        <input type="password" id="passsword" onChange={(e) => { this.onChangeAttr(e, "password") }} />
                    </div>
                    <br />
                    <div className="age">
                        <label htmlFor="age">Age: &nbsp;</label>
                        <input type="number" id="age" onChange={(e) => { this.onChangeAttr(e, "age") }} />
                    </div>
                    <br />
                    <div className="photo_url">
                        <label htmlFor="photo_url">Profile photo: &nbsp;</label>
                        <input type="file" id="photo_url" onChange={(e) => { this.onChangeAttr(e, "photo_url") }} />
                    </div>
                    <br />
                    <div className="submit_button">
                        <button type="button" onClick={this.onSubmit}>Submit</button>
                    </div>
                </form>
            </main>
        )
    }
}