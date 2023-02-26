import axios from 'axios';

const LOGIN_API_BASE_URL = 'http://localhost:8080/api/v1/login';

class LoginService {

  authenticateUser(loginRequest) {
    return axios.post(LOGIN_API_BASE_URL, loginRequest);
  }

}

export default new LoginService();