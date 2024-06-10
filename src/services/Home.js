import { apiRoutes } from '../config/api'
import { $api } from './index'

const getHome = async (data) => {
    const response = await $api.post(apiRoutes.HOME, { params: data })
    return response?.data
}
const getCategoryList = async (data) => {
    const response = await $api.get(apiRoutes.CATEGORY_LIST, { params: data })
    return response?.data
}

const getCategories = async () => {
    const response = await $api.get(apiRoutes.CATEGORIES)
    return response?.data
}

export { getHome, getCategories, getCategoryList }