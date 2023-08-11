import { SERVER_URL } from "../utils/Constant";
import axios from "axios";


export const API = async (url, method, data = {}, headers = {}) => {

  const user = localStorage.getItem("user");
  const token = user ? JSON.parse(user).token : null; 
  const config = {
    headers: { Authorization: `${token}`, ...headers },
  };

  try {
    const res = await axios({
      method,
      url,
      data,
      baseURL: SERVER_URL,
      ...config,
    });
    return res.data;
  } catch (err) {
    const errMessage = err.response?.data?.message || "Something went wrong";
    console.log(errMessage);
    throw err;
  }
};