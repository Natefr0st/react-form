import React, { Component } from "react";

// Create Name component for name && email inputs
class Name extends Component {
    // Render labels and name inputs
    render() {
        const { firstName, lastName, handleChange, errMsg } = this.props;
        console.log(this.props)
        return (
            <div className="form-names">
                <label htmlFor="firstName">Name</label>
                <br />
                <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    placeholder="First Name"
                    id="firstName"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    placeholder="Last Name"
                    id="lastName"
                    onChange={handleChange}
                />
                {errMsg != null ? <span>Alabala</span> : null}
            </div>
        );
    }
}

export default Name;
