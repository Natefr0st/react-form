import React, { Component } from "react";

// Create Bio Component
class Bio extends Component {
    render() {
        const { bio, handleChange } = this.props;
        return (
            <div className="form-bio">
                <label htmlFor="bio">Bio</label>
                <br />
                <textarea
                    name="bio"
                    id="bio"
                    value={bio}
                    onChange={handleChange}
                />
            </div>
        );
    }
}

export default Bio;
