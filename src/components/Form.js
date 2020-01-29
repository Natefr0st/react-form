import React, { Component } from "react";

import Name from "components/Name";
import Email from "components/Email";
import Select from "components/Select";
import Bio from "components/Bio";

// Create Form Component
class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            country: "Norway",
            bio: "",
            errors: {
                firstName: null,
                lastName: null,
                email: null
            }
        };
    }
    // Handle inputs value on change event
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    isValid = () => {
        // validate the state
        let isValid = true;
        let firstNameError = null;
        let lastNameError = null;
        let emailError = null;

        if (this.state.firstName === "" || null) {
            firstNameError = "Field is Empty";
            isValid = false;
        }
        if (this.state.lastName === "" || null) {
            lastNameError = "Field is Empty";
            isValid = false;
        }
        if (this.state.email === "" || null) {
            emailError = "Field is Empty";
            isValid = false;
        }

        // Validate each field && if every field is ok isValid == true else false
        this.setState({
            errors: {
                firstName: firstNameError,
                lastName: lastNameError,
                email: emailError
            }
        });
        if (isValid) {
            return true;
        } else {
            console.log(this.state);
            return false;
        }
    };

    // Handle the form submission
    handleSubmit = event => {
        event.preventDefault();
        if (this.isValid()) {
            fetch("https://postb.in/1580328526126-6915104780346", {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "*"
                },
                body: JSON.stringify(this.state)
            });
        } else {
            console.log("error");
        }
        console.log(this.state);
    };
    // Render Form Component and its child components
    render() {
        // Destructuring the current component state
        const { firstName, lastName, email, country, bio } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="shape rectangle"></div>
                <div className="shape triangle"></div>
                <div className="shape circle"></div>
                <Name
                    firstName={firstName}
                    lastName={lastName}
                    handleChange={this.handleChange}
                    errMsg={this.state.errors.firstName}
                />
                <Email email={email} handleChange={this.handleChange} />
                <Select country={country} handleChange={this.handleChange} />
                <Bio bio={bio} handleChange={this.handleChange} />
                <button type="submit" className="btn">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
