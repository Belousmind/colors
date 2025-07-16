import axios from 'axios';

export async function loadData(url, config = {}) {
  try {
    const response = await axios.get(url, config);
    return response;
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error);
    return null;
  }
}
