import './App.css';
import Navbar from './navbar/Navbar';
import QuizForm from '../quizform/QuizForm';
import { ToastContainer, Flip } from 'react-toastify';
import LoginForm from './loginform/LoginForm';
import RegisterForm from './registerform/RegisterForm';
import UserHome from './user_home/UserHome';

export default function App() {

  return (
    <div className='App'>
      <Navbar />
      <RegisterForm />
      {/* <LoginForm /> */}
      {/* <UserHome /> */}
      {/* <QuizForm /> */}
      <ToastContainer
        transition={Flip}
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />
    </div>
  );
}
