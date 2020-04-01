import {
    CREATE_ASSET,
    GET_ASSETS,
    GET_ASSET,
    UPDATE_ASSET,
    DELETE_ASSET
} from "../actions/assetActions";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_ASSET:
            return {...state, [action.payload.id]: action.payload };
        case GET_ASSET:
            return {...state, [action.payload.id]: action.payload };
        case UPDATE_ASSET:
            return {...state, [action.payload.id]: action.payload };
        case DELETE_ASSET:
            return { ...state, [action.payload]: undefined };
        case GET_ASSETS:
            let newAssetsArrayObject = {};
            action.payload.forEach(asset => {
                newAssetsArrayObject = {
                    ...newAssetsArrayObject,
                    [asset.id]: asset
                };
            });
            return { ...state, ...newAssetsArrayObject };
        default:
            return state;
    }
}