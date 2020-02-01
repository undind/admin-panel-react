import axios from './request';

export const getServices = () => {
    return axios.get('/api/v2/services/list', { params: { key: '5b192d3ef26088' } });
}