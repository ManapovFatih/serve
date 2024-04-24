import { apiRoutes } from '../config/api'
import { $api } from './index'

const getCategory = async (data) => {
    const response = await $api.get(apiRoutes.CATEGORY, { params: data })
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

export { getCategory, getCategories, getCategoryList }