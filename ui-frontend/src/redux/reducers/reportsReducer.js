import {CREATE_REPORT} from "../actions/reportActions";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_REPORT:
            return {...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
}