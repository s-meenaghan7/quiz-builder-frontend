import './App.css';
import Navbar from './navbar/Navbar';
import { ToastContainer, Flip } from 'react-toastify';
import LoginForm from './loginform/LoginForm';
import RegisterForm from './registerform/RegisterForm';
import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import NotFound from './misc/NotFound';
import ConfirmationPage from './registerform/components/ConfirmationPage';
import { ReactQueryDevtools } from 'react-query/devtools';

export default function App() {

  return (
    <main className='App'>
      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register'>
          <Route index element={<RegisterForm />} />
          <Route path='/register/confirm/:token' element={<ConfirmationPage />} />
        </Route>

        <Route path='/*' element={<NotFound />} />
      </Routes>

      <ReactQueryDevtools />

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
