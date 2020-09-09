import { DATA_LOADED, ITEMS_LOADING } from "../constants/action-types";

const initialState = {
    remoteArticles: [],
    itemsLoading: false
};

function postsReducer(state = initialState, action) {
    switch (action.type) {
        case ITEMS_LOADING:
            return Object.assign({}, state, {
                itemsLoading: true
            });
        case DATA_LOADED:
            return Object.assign({}, state, {
                remoteArticles: state.remoteArticles.concat(action.payload),
                itemsLoading: false
            });
        default:
            return state
    }
}

export default postsReducer;