import axios from 'axios'

export const apiGet = async (option) => {
  try {
    const res = await axios.get(option);
    return res;
  } catch (error) {
    return error;
  }
};

export const apiPost = async (option) => {
  try {
    const res = await axios.post(option);
    return res;
  } catch (error) {
    return error;
  }
};

export const apiPut = async (option) => {
  try {
    const res = await axios.put(option);
    return res;
  } catch (error) {
    return error;
  }
};

export const apiPatch = async (option) => {
  try {
    const res = await axios.patch(option);
    return res;
  } catch (error) {
    return error;
  }
};

export const apiDelete = async (option) => {
  try {
    const res = await axios.delete(option);
    return res;
  } catch (error) {
    return error;
  }
};
