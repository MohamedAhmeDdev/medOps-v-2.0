import axios from "axios";

export const Api = async (url, method, data = {}, headers = {}) => {

  const user = localStorage.getItem("user");
  const token = user ? JSON.parse(user): null; 
  if (!token) {
    console.error("Token is missing or invalid in localStorage");
  }

  const config = {
    headers: {
      Authorization: token ? `Bearer ${token}` : '', 
      ...headers,
    },
  };

  try {
    const res = await axios({
      method,
      url,
      data,
      ...config,
    });
    return res.data;
  } catch (err) {
    const errMessage = err.response?.data?.message || "Something went wrong";
    console.log("API Error:", errMessage);
    throw err;
  }
};