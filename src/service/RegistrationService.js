import axios from "axios";

const REGISTRATION_API_BASE_URL = 'http://localhost:8080/api/v1/register';

class RegistrationService {

  registerUser(registrationRequest) {
    return axios.post(
      REGISTRATION_API_BASE_URL, 
      registrationRequest,
      {
        headers: { 'Content-Type' : 'application/json' },
        withCredentials: true
      }
    );
  }

  resendEmail(email) {
    return axios.post(
      REGISTRATION_API_BASE_URL + '/resend-email',
      email,
      {
        headers: { 'Content-Type' : 'application/json' },
        withCredentials: true
      }
    );
  }

  confirmToken(token) {
    return axios.patch(
      REGISTRATION_API_BASE_URL + `/confirm?token=${token}`,
      {
        headers: { 'Content-Type' : 'application/json' },
        withCredentials: true
      }
    );
  }

}

export default new RegistrationService();
