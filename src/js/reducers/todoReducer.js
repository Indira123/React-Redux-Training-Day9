import { ADD_ARTICLE, DELETE_ARTICLE } from "../constants/action-types";

const initialState = {
    articles: []
};

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ARTICLE:
            return Object.assign({}, state, {
                articles: state.articles.concat(action.payload)
            });
        case DELETE_ARTICLE:
            return Object.assign({}, state, {
                articles: state.articles.filter((item, index) => index !== action.payload)
            });
        default:
            return state
    }
}
export default todoReducer;
