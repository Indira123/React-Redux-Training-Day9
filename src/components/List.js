import React from "react";
import { connect } from "react-redux";
import { deleteArticle } from "../js/actions/index";

const ConnectedList = (props) => (
    <>
        <h3>Todo List</h3>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Todo item</th>
                    <th>Action</th>
                </tr>
            </thead>
            <thead>
                {props.articles.length > 0 && props.articles.map((el, index) => (
                    <tr key={index}>
                        <td>{el}</td>
                        <td><button onClick={() => props.deleteArticle(index)} className='btn btn-success'>Done</button></td>
                    </tr>
                ))}
            </thead>
        </table>
    </>
);

const mapStateToProps = state => {
    return { articles: state.todoReducer.articles };
};
function mapDispatchToProps(dispatch) {
    return {
        deleteArticle: index => dispatch(deleteArticle(index))
    };
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default List;