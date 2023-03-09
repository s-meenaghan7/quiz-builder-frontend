import axios from 'axios';

const LOGIN_API_BASE_URL = 'http://localhost:8080/api/v1/login';

class LoginService {

  async authenticateUser(loginRequest) {
    const response = await axios.post(LOGIN_API_BASE_URL, loginRequest,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );

    return response;
  }

}

export default new LoginService();
