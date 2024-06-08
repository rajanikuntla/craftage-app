import ApiClient from "./ApiClient";

const config = {
  headers: {"Access-Control-Allow-Origin": "*"}
};

export const fetchCategories = async () => {
  return ApiClient.get("/list", config);
};

export const fetchItems = async (category_id) => {
  return ApiClient.get(`/items/${category_id}`, config);
};

export const sendOtp = async (phone_number) => {
  return ApiClient.post(`/send-otp`,{ phone_number}, config);
};

export const login = async (phone_number, otp) => {
  return ApiClient.post(`/login`,{ phone_number, otp}, config);
};
