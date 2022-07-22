import { Navigate, Outlet } from 'react-router-dom';
import { supabase } from './supabase';

export function ProtectedLayout({ children }) {
  if (!supabase.auth.session()) {
    return <Navigate to='/signin' />
  }
  return <Outlet />;
};
