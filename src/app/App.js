import './App.css';
import Navbar from './navbar/Navbar';
import QuizForm from '../quizform/QuizForm';
import { ToastContainer } from 'react-toastify';

export default function App() {

  return (
    <div className='App'>
      <Navbar />
      <QuizForm />
      <ToastContainer 
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
