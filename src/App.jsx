import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import { ChakraProvider } from '@chakra-ui/react';
import { ProtectedLayout } from './ProtectedLayout.jsx';
import { Profile } from './Profile';
import { SignIn, SignUp, Body, Home } from './Components';
import { useEffect, useState } from 'react';
import { supabase } from './supabase';

function App() {

  const [thisSession, setSession] = useState();

  useEffect(() => {
    setSession(supabase.auth.session());
    //console.log(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);


  return(
    <BrowserRouter>
      <ChakraProvider>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route element={<SignIn />}>
              <Route path='/signin' element={<Body type='Sign In' />} />
            </Route>
            <Route element={<SignUp />}>
              <Route path='/signup' element={<Body type='Sign Up' />} />
            </Route>
            <Route element={<ProtectedLayout />}>
              <Route path='/profile' element={<Profile session={thisSession} />} />
            </Route>
          </Routes>
        </AuthProvider>
      </ChakraProvider>
    </BrowserRouter>     
  );
}

export default App;






