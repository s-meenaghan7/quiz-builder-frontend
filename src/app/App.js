import './App.css';
import Navbar from './navbar/Navbar';
import { ToastContainer, Flip } from 'react-toastify';
import LoginForm from './loginform/LoginForm';
import RegisterForm from './registerform/RegisterForm';
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';

export default function App() {

  return (
    <main className='App'>
      <Navbar />

      <Routes>
        <Route path='/login' element={ <LoginForm /> } />
        <Route path='/register' element={ <RegisterForm /> } />
        <Route path='/home' element={ <Home /> } />
      </Routes>

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
    </main>
  );
}
