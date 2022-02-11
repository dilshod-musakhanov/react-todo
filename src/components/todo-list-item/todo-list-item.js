import React, {Component} from "react";
import './todo-list-item.css';

export default class TodoListItem extends Component {

    onLabelClick = () => {
        console.log(`Done:${this.props.label}`)
    }

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
                    style={style}
                    onClick={this.onLabelClick}>
                    {label}
                </span>

                <button
                    type="button"
                    className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-exclamation" />
                </button>

                <button
                    type="button"
                    className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );

    }
}


/*

//on below when we pass onLabelClick function to onClick event then
//onLabelClick function lose its reference to this
//which will result in error message "Uncaught TypeError: this is undefined"

export default class TodoListItem extends Component {

    onLabelClick(){console.log(`Done:${this.props.label}`)};

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
                    style={style}
                    onClick={this.onLabelClick}>
                    {label}
                </span>

                <button
                    type="button"
                    className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-exclamation" />
                </button>

                <button
                    type="button"
                    className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );

    }
}

//one of the ways to to keep reference to this is using bind

                <span
                    className="todo-list-item-label"
                    style={style}
                    onClick={this.onLabelClick.bind(this)}>
                    {label}
                </span>


//another better way is to create onLabelClick in the constructor
//by doing in this way we create function not on the prototype of the class but
//on the object itself with arrow function to keep reference to this


                    constructor() {
                        super();
                        this.onLabelClick = () => {
                            console.log(`Done:${this.props.label}`)
                        }
                    }



export default class TodoListItem extends Component {

    constructor() {
        super();
        this.onLabelClick = () => {
            console.log(`Done:${this.props.label}`)
        }
    }


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
                    style={style}
                    onClick={this.onLabelClick}>
                    {label}
                </span>

                <button
                    type="button"
                    className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-exclamation" />
                </button>

                <button
                    type="button"
                    className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );

    }
}


//there is also another way to solve this issue

export default class TodoListItem extends Component {

    onLabelClick = () => {
        console.log(`Done:${this.props.label}`)
    }

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
                    style={style}
                    onClick={this.onLabelClick}>
                    {label}
                </span>

                <button
                    type="button"
                    className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-exclamation" />
                </button>

                <button
                    type="button"
                    className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );

    }
}






 */