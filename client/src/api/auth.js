import axios from 'axios';
import appConfig from '../configs/app.config';

const auth = {
  async register(userData) {
    try {
      console.log(userData);
      const response = await axios({
        method: 'post',
        url: '/user/register',
        baseURL: appConfig.BASE_URL,
        data: userData,
      });
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

export default auth;
