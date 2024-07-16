import axios from 'axios';

const API_URL = 'https://api.xdeveloper.com';

export const getBestPerformingPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/best-posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching best performing posts:', error);
    throw error;
  }
};
