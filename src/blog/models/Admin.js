import http from '../../utils/http';
import utils from '../../utils';

class Admin {

  async login(account, password) {      
    const { data } = await http.post(utils.host('/v1/login'), {account, password});    
    return data;   
  }
  async checkLogin() {
    const { data } = await http.get(utils.host('/v1/ping'));
    return data.isAuth;   
  }

}

export default new Admin();
