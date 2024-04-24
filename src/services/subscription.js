import { apiRoutes } from '../config/api';
import { $authApi } from './index';

const getSubscriptions = async (data) => {

    const response = await $authApi.get(apiRoutes.SUBSCRIPTIONS, { params: data })
    return response?.data

}
const getSubscription = async (data) => {

    const response = await $authApi.get(apiRoutes.SUBSCRIPTION, { params: data })
    return response?.data

}
const editSubscription = async (data) => {

    const response = await $authApi.post(apiRoutes.SUBSCRIPTION, data)
    return response?.data

}

export { editSubscription, getSubscription, getSubscriptions };
