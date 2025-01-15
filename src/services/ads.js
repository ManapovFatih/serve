import { apiRoutes } from '../config/api'
import { $api, $authApi } from './index'

const getAds = async (payloads = {}) => {
    const response = await $api.get(apiRoutes.ADS, {
        params: payloads,
    })

    return response?.data

}
const getAd = async (payloads = {}) => {
    const response = await $api.get(apiRoutes.ADS_ONE, {
        params: payloads,
    })
    return response?.data
}

const createAd = async (data) => {


    const response = await $authApi.post(apiRoutes.USER_ADS, data)
    return response?.data
}

const getUserAds = async (payloads = {}) => {
    const response = await $authApi.get(apiRoutes.USER_ADS, {
        params: payloads,
    })

    return response?.data

}
const getUserAd = async (payloads = {}) => {
    const response = await $authApi.get(apiRoutes.USER_ADS_ONE, {
        params: payloads,
    })
    return response?.data
}

const editAd = async (data) => {
    const response = await $authApi.put(apiRoutes.USER_ADS, data)
    return response?.data

};

const deleteAd = async (id) => {
    const response = await $authApi.delete(apiRoutes.USER_ADS, {
        data: { id },
    });
    return response?.data;
};
export { getAd, getAds, createAd, editAd, deleteAd, getUserAds, getUserAd }