import { INCREAMENT, DECREAMENT, RESET } from "../constants/action-types";

const initialState = {
    counter: 0
};

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREAMENT:
            return Object.assign({}, state, {
                counter: state.counter + 1
            });
        case DECREAMENT:
            return Object.assign({}, state, {
                counter: state.counter - 1
            });
        case RESET:
            return Object.assign({}, state, {
                counter: initialState.counter
            });
        default:
            return state;
    }
}

export default counterReducer;