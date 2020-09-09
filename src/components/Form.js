import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../js/actions/index";

class ConnectedForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addArticle(this.state.title);
        this.setState({ title: "" });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{ width: 400 + 'px' }}>
                <div className='form-group'>
                    <label htmlFor="title">Item</label>
                    <input
                        type="text"
                        id="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        className="form-control"
                    />
                </div>
                <button className='btn btn-primary' type="submit">SAVE</button>
            </form>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}

const Form = connect(
    null,
    mapDispatchToProps
)(ConnectedForm);

export default Form;