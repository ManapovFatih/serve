import { apiRoutes } from '../config/api'
import { $api, $authApi } from './index'

const getProduct = async (payloads = {}) => {
    const response = await $api.get(apiRoutes.PRODUCT, {
        params: payloads,
    })

    return response?.data

}

const getProductRecommendations = async (payloads = {}) => {
    const response = await $api.get(apiRoutes.PRODUCT_RECOMMENDATIONS, {
        params: payloads,
    })

    if (response) {
        return response.data
    }
}

const getCartProducts = async (ids) => {
    const response = await $authApi.post(apiRoutes.CART_PRODUCTS, ids)
    return response?.data
}

const getGifts = async () => {
    const response = await $api.get(apiRoutes.PRODUCT_GIFTS)
    if (response) {
        return response.data
    }
}

const getFree = async () => {
    const response = await $api.get(apiRoutes.PRODUCT_FREE)
    if (response) {
        return response.data
    }
}

const createUserProduct = async (data) => {


    const response = await $authApi.post(apiRoutes.USER_PRODUCTS, data)
    return response?.data
}

const getUserProducts = async (data) => {
    const response = await $authApi.get(apiRoutes.USER_PRODUCTS, { params: data })
    return response?.data
}

const getUserProduct = async (payloads = {}) => {
    const response = await $authApi.get(apiRoutes.USER_PRODUCT, {
        params: payloads,
    })
    return response?.data
}

const editUserProduct = async (data) => {
    var formData = new FormData();

    formData.append("dataParse", JSON.stringify(data));

    if (data?.medias) {
        data.medias.forEach(file => {
            formData.append("media", file);
        });
    }
    if (data?.cover) {
        formData.append("cover", data.cover);
    }
    const response = await $authApi.put(apiRoutes.USER_PRODUCTS, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return response?.data;
};

const deleteUserProduct = async (ids) => {
    const response = await $authApi.delete(apiRoutes.USER_PRODUCTS, {
        data: { ids },
    });
    return response?.data;
};
export { getProduct, getGifts, getFree, getCartProducts, getProductRecommendations, createUserProduct, getUserProducts, getUserProduct, editUserProduct, deleteUserProduct }