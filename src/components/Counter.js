import React, { Component } from "react";
import { connect } from "react-redux";
import { increament, decreament, reset } from "../js/actions/index";

export class Counter extends Component {
    render() {
        const { counter, increament, decreament, reset } = this.props;
        return (
            <div style={{ marginTop: 10 + 'px' }} className='container'>
                <div className='row'>
                    <div className='col-md-1'><h4>{counter}</h4></div>
                    <div className='col-md-2'>
                        <button className='btn btn-primary increament' onClick={increament}>INCREAMENT BY 1</button>
                    </div>
                    <div className='col-md-2'>
                        <button className='btn btn-primary' onClick={decreament}>DECREAMENT BY 1</button>
                    </div>
                    <button className='btn btn-primary' onClick={reset}>RESET</button>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        counter: state.counterReducer.counter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        increament: () => dispatch(increament()),
        decreament: () => dispatch(decreament()),
        reset: () => dispatch(reset())
    };
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(Counter);