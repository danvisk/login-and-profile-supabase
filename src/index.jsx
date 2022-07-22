//import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import { ChakraProvider } from '@chakra-ui/react';
import { ProtectedLayout } from './ProtectedLayout.jsx';
//import { Profile } from './Profile';
import { SignIn, SignUp, Body, Profile } from './Components';

//const history = createBrowserHistory(); from 'history';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <ChakraProvider>
        <AuthProvider>
          <Routes>
            <Route element={<SignIn />}>
              <Route path='/signin' element={<Body type='Sign In'/>} />
            </Route>
            <Route element={<SignUp />}>
              <Route path='/signup' element={<Body type='Sign Up'/>} />
            </Route>
            <Route element={<ProtectedLayout />}>
              <Route path='/profile' element={<Profile />} />
            </Route>
          </Routes>
        </AuthProvider>
      </ChakraProvider>
    </BrowserRouter>     
);

//




//import reportWebVitals from './reportWebVitals';
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();


