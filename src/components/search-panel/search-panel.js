import React, {Component} from "react";
import "./search-panel.css";

export default class SearchPanel extends Component{
    state = {
        match: ''
    };

    onSearchChange = (e) => {
        const match = e.target.value;
        this.setState({match});
        this.props.onSearchChange(match);
        }

    render() {
        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="Type to search"
                   value={this.state.match}
                   onChange={this.onSearchChange}
            />
        );
    }
};
