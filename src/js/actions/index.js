
import { DATA_LOADED, ITEMS_LOADING } from "../constants/action-types";
import { INCREAMENT } from "../constants/action-types";
import { DECREAMENT } from "../constants/action-types";
import { RESET } from "../constants/action-types";
import { ADD_ARTICLE, DELETE_ARTICLE } from "../constants/action-types";
import store from '../store/index';

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload };
}
export function deleteArticle(payload) {
    return { type: DELETE_ARTICLE, payload };
}
export function increament() {
    return { type: INCREAMENT };
}
export function decreament() {
    return { type: DECREAMENT };
}
export function reset() {
    return { type: RESET };
}
export function getData() {
    store.dispatch({ type: ITEMS_LOADING });
    return function (dispatch) {
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: DATA_LOADED, payload: json });
            });
    };
}
