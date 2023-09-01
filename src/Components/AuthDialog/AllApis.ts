import { axiosInstance } from "src/ApiService/axiosInstance";

export const loginApi = (data: any) =>
  axiosInstance.post("login", data).then((res: any) => res?.data);

export const postRegisterData = (data: any) =>
  axiosInstance.post("register", data).then((res: any) => res?.data);

export const resetPassword = (data: any) =>
  axiosInstance.post("reset_password", data).then((res: any) => res?.data);

export const changePasswordApi = (data: any) =>
  axiosInstance.post("forgot_password", data).then((res: any) => res?.data);

export const editProfileApi = (data: any, userId: any) =>
  axiosInstance.post(`edit/${userId}`, data).then((res: any) => res?.data);

export const getProfile = (userId: any) =>
  axiosInstance.get(`profile/${userId}`).then((res: any) => res?.data);

export const saveCouncling = (data: any, userId: any) =>
  axiosInstance.post(`counselling/${userId}`, data).then((res: any) => res?.data);

export const saveEnrolment = (data: any, userId: any) =>
  axiosInstance.post(`enrollment/${userId}`, data).then((res: any) => res?.data);
