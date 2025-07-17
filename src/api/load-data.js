import axios from 'axios';

export async function loadData(url, config = {}) {
  try {
    const response = await axios.get(url, config);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}
