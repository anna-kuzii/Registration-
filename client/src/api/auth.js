import axios from 'axios';
import appConfig from '../configs/app.config';

const auth = {
  async register(userData) {
    try {
      return await axios({
        method: 'post',
        url: '/user/register',
        baseURL: appConfig.BASE_URL,
        data: userData,
      });
    } catch (error) {
      throw error;
    }
  },

  async verification(token) {
    try {
      return await axios({
        method: 'get',
        url: `/user/${token}`,
        baseURL: appConfig.BASE_URL,
      });
    } catch (error) {
      throw error;
    }
  },
};

export default auth;
