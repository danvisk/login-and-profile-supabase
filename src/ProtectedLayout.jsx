import { Navigate, Outlet } from 'react-router-dom';
import { supabase } from './supabase';

export function ProtectedLayout({ children }) {
  console.log(supabase.auth.user());
  if (!supabase.auth.user()) {
    return <Navigate to='/signin' />
  }
  return <Outlet />;
};
