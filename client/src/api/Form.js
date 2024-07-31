import axios from "axios";

// const Backend_URL = 'http://localhost:3000';
const Backend_URL = "https://server-j3x2.onrender.com";

const saveForm = async (formDetails) => {
  const token = localStorage.getItem("token");
  console.log("token from form", token);
  if (!token) {
    throw new Error("No token found, please log in again.");
  }

  try {
    const response = await axios.post(
      `${Backend_URL}/form/saveform`,
      formDetails,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("form response", response.data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

export { saveForm };
