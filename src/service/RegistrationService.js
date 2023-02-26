import axios from "axios";

const REGISTRATION_API_BASE_URL = 'http://localhost:8080/api/v1/register';

class RegistrationService {

  registerUser(registrationRequest) {
    return axios.post(REGISTRATION_API_BASE_URL, registrationRequest);
  }

}

export default new RegistrationService();