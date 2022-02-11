import React, {Component} from "react";
import './todo-list-item.css';

//we replaced functional component with class component
//class component extends ReactComponent
//import Component from react
//class component does not accepts props directly
//so we have to use "this" to access to props
//and get properties from this.props using destructive method
//place export default in front of class
//as you can see the body of previous TodoListItem component(function) remains almost the same

export default class TodoListItem extends Component {

    render() {

        const {label, important = false} = this.props;

        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        return (
            <span className="todo-list-item">
      <span
          className="todo-list-item-label"
          style={style}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
        );

    }
}
