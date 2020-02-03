import {
    getServices,
    getServicesConfig,
    getServiceWithId
} from "../../../services/urls";
import {
    GET_SERVICES,
    GET_SERVICES_CONFIG,
    GET_SERVICE_VIEW,
    GET_SERVICES_SUCCESS,
    GET_SERVICES_ERROR
} from "../../types";

export const getServicesAction = () => async dispatch => {
    dispatch({ type: GET_SERVICES_SUCCESS, payload: true });

    try {
        const response = await getServices();
        const data = response.data.data.services;

        dispatch({ type: GET_SERVICES, items: data });
    } catch (error) {
        dispatch({ type: GET_SERVICES_ERROR, payload: true });
    }
};

export const getServicesConfigAction = () => async dispatch => {
    try {
        const response = await getServicesConfig();
        const { data } = response;

        dispatch({ type: GET_SERVICES_CONFIG, payload: data.data });
    } catch (error) {
        dispatch({ type: GET_SERVICES_ERROR, payload: true });
    }
};

export const getServiceWithIdAction = id => async dispatch => {
    try {
        const response = await getServiceWithId(id);
        const { data } = response;

        dispatch({ type: GET_SERVICE_VIEW, payload: data.data });
    } catch (error) {
        dispatch({ type: GET_SERVICES_ERROR, payload: true });
    }
};
