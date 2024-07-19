import { $api, $authApi } from ".";
import { apiRoutes } from "../config/api";

const getUser = async (data) => {
  const response = await $api.get(apiRoutes.USER_ONE, { params: data });
  return response?.data;
};
const getUserAuth = async (data) => {
  const response = await $authApi.get(apiRoutes.USER_AUTH, { params: data });
  return response?.data;
};

const deleteSession = async (data) => {
  const response = await $authApi.delete(apiRoutes.USER_DELETE_SESSION, {
    params: data,
  });
  return response?.data;
};
const deleteUser = async (data) => {
  const response = await $authApi.delete(apiRoutes.USER_DELETE, {
    data,
  });
  return response?.data;
};

export { getUser, deleteSession, getUserAuth, deleteUser };