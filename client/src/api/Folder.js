import axios from "axios";

// const Backend_URL = 'http://localhost:3000';
const Backend_URL = "https://server-j3x2.onrender.com";

const createFolder = async (foldername, userId) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found, please log in again.");
  }
  try {
    const response = await axios.post(
      `${Backend_URL}/folder/createfolder/${userId}`,
      { foldername },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

const deleteFolder = async (folderId) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found, please log in again.");
  }

  try {
    const response = await axios.delete(
      `${Backend_URL}/folder/deletefolder/${folderId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

export { createFolder, deleteFolder };
