import { useMutation } from "react-query"
import RegistrationService from "../service/RegistrationService";

const confirmToken = (token) => {
  return RegistrationService.confirmToken(token);
}

export const useConfirmToken = () => {
  return useMutation(confirmToken);
}
