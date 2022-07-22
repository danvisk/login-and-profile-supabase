import { createContext, useContext, useEffect, useState} from "react";
import { supabase } from './supabase';
import { useNavigate } from "react-router";
import { Stack, Text, Button, useToast } from '@chakra-ui/react';

import { Body } from './Components';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({children}) {
  const[currentUser, setUser] = useState(null);
  const[loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const handleSignIn = async (email,password) => {
    try {
      setLoading(true);
      const { error , user} = await supabase.auth.signIn({ email, password });
      if (error) throw error;
      setUser(user); navigate('/');
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
      const { error , user} = await supabase.auth.signIn({ email, password });
      if (error) throw error;
      setUser(user); navigate('/');
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

  useEffect(()=>{
    if (supabase.auth.user()) 
      navigate('/');
  }, [navigate]);

    const value = {
    currentUser,
    handleSignIn,
    handleSignUp
  };
  
  return(
    <AuthContext.Provider value={value}>
      {!loading? children : < Body loading={true} type='Sign ...' />}
    </AuthContext.Provider>
  ) // 
}























//export function AuthProvider({children}) {
//  const[currentUser, setUser] = useState(null);

//  //useEffect(()=> {
//  //  //const unsubscribe = authApp.onAuthStateChanged(user => {
//  //    setUser(user);
//  //    setLoading(false);
//  //  })
//  //  return unsubscribe;
//  //}, []);