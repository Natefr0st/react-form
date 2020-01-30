import React, { Component } from "react";

// Import child components
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
            country: "Bulgaria",
            bio: ""
        };
    }
    // Handle inputs value on change event
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    // Validate form submission
    validate = () => {
        const { firstName, lastName, email } = this.state;
        // Check if the inputs are empty
        if (
            firstName === "" ||
            null ||
            lastName === "" ||
            null ||
            email === "" ||
            null
        ) {
            alert("please fill the form");
        } else {
            // Send POST Request (every postbin expires aftre 30min)
            fetch("https://postb.in/1580375608125-4028412981424", {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.state)
            });
            alert(`Your form is submited ${JSON.stringify(this.state)}`);
            // Clear form inputs after submission
            this.setState({
                firstName: "",
                lastName: "",
                email: "",
                country: "",
                bio: ""
            });
        }
    };

    // Handle the form submission
    handleSubmit = event => {
        event.preventDefault();
        this.validate();
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
