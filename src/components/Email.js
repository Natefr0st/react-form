import React, { Component } from "react";

// Create Email Component
class Email extends Component {
    render() {
        const { email, handleChange } = this.props;
        return (
            <div className="form-email">
                <label htmlFor="email">Email</label>
                <br />
                <input
                    type="email"
                    name="email"
                    value={email}
                    id="email"
                    placeholder="e.g. john@mail.com"
                    onChange={handleChange}
                />
            </div>
        );
    }
}

export default Email;
