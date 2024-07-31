import axios from "axios";

// const Backend_URL = 'http://localhost:3000';
const Backend_URL = "https://server-j3x2.onrender.com";

const Register = async (newUser) => {
  try {
    console.log(newUser);
    const response = await axios.post(`${Backend_URL}/user/register`, newUser);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const Login = async (userData) => {
  try {
    const response = await axios.post(`${Backend_URL}/user/login`, userData);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

const updateUser = async (
  username,
  email,
  newpassword,
  oldpassword,
  userID
) => {
  try {
    const response = await axios.put(
      `${Backend_URL}/user/updateuser/${userID}`,
      {
        username,
        email,
        newpassword,
        oldpassword,
      }
    );

    console.log(` api --> ${response.data} -->`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

const fetchResponses = async () => {
  try {
    const response = await axios.get(`${Backend_URL}/responses`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

export { Register, Login, updateUser, fetchResponses };
