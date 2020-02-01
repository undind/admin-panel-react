import { getServices } from "../../../services/urls";
import {
    GET_SERVICES,
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
