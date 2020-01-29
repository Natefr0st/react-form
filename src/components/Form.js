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
            bio: ""
        };
    }
    // Handle inputs value on change event
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    // Handle the form submission
    handleSubmit = event => {
        event.preventDefault();
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
