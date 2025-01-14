import { apiRoutes } from '../config/api'
import { $api, $authApi } from './index'

const getAds = async (payloads = {}) => {
    const response = await $api.get(apiRoutes.ADS, {
        params: payloads,
    })

    return response?.data

}

const createAd = async (data) => {


    const response = await $authApi.post(apiRoutes.ADS, data)
    return response?.data
}


const getAd = async (payloads = {}) => {
    const response = await $authApi.get(apiRoutes.ADS_ONE, {
        params: payloads,
    })
    return response?.data
}

const editAd = async (data) => {
    const response = await $authApi.put(apiRoutes.ADS, data)
    return response?.data

};

const deleteAd = async (ids) => {
    const response = await $authApi.delete(apiRoutes.ADS, {
        data: { ids },
    });
    return response?.data;
};
export { getAd, getAds, createAd, editAd, deleteAd }