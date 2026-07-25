import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const auditWebsite = async (url) => {
  try {
    const response = await axios.post(`${API_URL}/audit`, {
      url,
    });

    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.response?.data?.error ||
      "Unable to analyze website";

    throw new Error(message);
  }
};
