import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../js/actions/index";
import axios from 'axios';

export class Post extends Component {

    componentDidMount() {
        this.props.getData();
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                console.log(res.data)
            })
        /********Promise.all for API calls *******************/
        const promise1 = axios.get("https://jsonplaceholder.typicode.com/users"); //remove s from users and see it goes in catch
        const promise2 = axios.get("https://jsonplaceholder.typicode.com/todos/1");
        const promise3 = axios.get("https://jsonplaceholder.typicode.com/albums");

        Promise.all([promise1, promise2, promise3]).then(function (res) {
            console.log(res);
        }).catch(function (error) {
            console.log(error);
        })
    }

    render() {
        return (
            <ul>
                {this.props.isLoading &&
                    <h2>Data Loading...</h2>
                }
                {this.props.articles.map(el => (
                    <li key={el.id}>{el.title}</li>
                ))}
            </ul>
        );
    }
}
function mapStateToProps(state) {
    return {
        articles: state.postsReducer.remoteArticles.slice(0, 10),
        isLoading: state.postsReducer.itemsLoading
    };
}

export default connect(
    mapStateToProps,
    { getData }
)(Post);