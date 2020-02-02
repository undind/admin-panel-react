import axios from './request';

export const getServices = () => {
    return axios.get('/api/v2/services/list', { params: { key: '5b192d3ef26088' } });
}

export const getServicesConfig = () => {
    return axios.get('/api/v2/services/configuration', { params: { key: '5b192d3ef26088' } });
}