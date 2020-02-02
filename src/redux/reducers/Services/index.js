import {
    GET_SERVICES,
    GET_SERVICES_CONFIG,
    GET_SERVICES_SUCCESS,
    GET_SERVICES_ERROR
} from "../../types";

const initialState = {
    items: [],
    config: [],
    isFetching: false,
    error: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_SERVICES:
            return {
                ...state,
                items: action.items,
                isFetching: false
            };

        case GET_SERVICES_SUCCESS:
            return {
                ...state,
                isFetching: action.payload
            };

        case GET_SERVICES_ERROR:
            return {
                ...state,
                error: action.payload
            };

        case GET_SERVICES_CONFIG:
            return {
                ...state,
                config: action.payload
            };

        default:
            return state;
    }
};
