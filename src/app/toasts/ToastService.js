import { toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ToastService {

  success(message) {
    toast.success(message, {
      transition: Zoom,
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  warn(message) {
    toast.warn(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

}

export default new ToastService();
