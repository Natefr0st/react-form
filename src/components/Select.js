import React, { Component } from "react";

// Create Select Component
class Select extends Component {
    render() {
        const { country, handleChange } = this.props;
        return (
            <div className="form-country">
                <label>Country</label>
                <br />
                <select value={country} onChange={handleChange} id="country">
                    <option value="bulgaria">Bulgaria</option>
                    <option value="norway">Norway</option>
                    <option value="iceland">Iceland</option>
                    <option value="scotland">Scotland</option>
                </select>
            </div>
        );
    }
}

export default Select;
