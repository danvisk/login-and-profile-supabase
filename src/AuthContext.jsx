import { createContext, useContext, useState} from "react";
import { supabase } from './supabase';
import { useToast } from '@chakra-ui/react';

import { Body } from './Components';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({children}) {
  const[loading, setLoading] = useState(false);
  const toast = useToast();

  const handleSignIn = async (email,password) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email, password });
      if (error) throw error;
      toast({
        title: 'Welcome back!',
        position: 'top',
        status: 'success',
        duration: 5000,
        isClosable: true });
    } catch(error) {
      toastError(error);
    } finally {
      setLoading(false);
    }
  }

  const handleSignUp = async (email,password) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email, password });
      if (error) throw error;
      toast({
        title: 'Welcome! Your account was created',
        position: 'top',
        description: 'Welcome! Your account was created',
        status: 'success',
        duration: 5000,
        isClosable: true });
    } catch(error) {
      toastError(error);
    } finally {
      setLoading(false);
    }
  }
  
  function toastError(error) {
  toast({
    title: 'Error',
    position: 'top',
    description: error.message,
    status: 'success',
    duration: 5000,
    isClosable: true });
  }  

    const value = {
    handleSignIn,
    handleSignUp
  };
  
  return(
    <AuthContext.Provider value={value}>
      {!loading? children : < Body loading={true} type='Sign ...' />}
    </AuthContext.Provider>
  ) // 
}


//useEffect(()=>{
  //  if (supabase.auth.user()) 
  //    navigate('/');
  //}, [navigate]);






















//export function AuthProvider({children}) {
//  const[currentUser, setUser] = useState(null);

//  //useEffect(()=> {
//  //  //const unsubscribe = authApp.onAuthStateChanged(user => {
//  //    setUser(user);
//  //    setLoading(false);
//  //  })
//  //  return unsubscribe;
//  //}, []);