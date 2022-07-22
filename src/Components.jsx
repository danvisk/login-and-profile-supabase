import './Components.css';
import { Link, Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { supabase } from './supabase';
import { Stack, Text, Button } from '@chakra-ui/react'

export function Home() {
  if (supabase.auth.session())
    return <Navigate to="/profile" />;
  else return <Navigate to='/signin' />;
}

// The Sign In page
export function SignIn() {
  if (supabase.auth.session()) {
    return <Navigate to="/profile" />;
  }
  return <Outlet />;
} 

// The Sign Up page
export function SignUp() {
  if (supabase.auth.session()) {
    return <Navigate to="/profile" />;
  }
  return <Outlet />;
} 


// Content of "Sign Up" and "Sign In" pages
export const Body = ({ type, loading }) => {
  const { handleSignIn, handleSignUp } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.elements[0].value;
    const pass = e.target.elements[1].value;
    type==='Sign In' ? 
    handleSignIn(email, pass) :
    handleSignUp(email, pass);
  }

  return (
    <div className='component'>
      <Stack className='cont'>
        <Text fontSize='35px'>{type}</Text>
        <div className='form-inline'>
          <form className='form-group' onSubmit={handleSubmit} >
            <label>Email<input type='text' className='form-control email'/></label>
            <label>Password<input type="password" className='form-control pass'/></label>
            {loading ? <Button isLoading loadingText='Loading' 
            colorScheme='blue' className='btn2'></Button> :
            <Button colorScheme='blue' type='submit' className='btn'>{type}</Button>}
            {/*<input className='btn' type='submit' value={type}/>*/}
          </form>
        </div>  
        <div className='opt'>{ type === 'Sign Up' ?
        <Link to ={'/signin'}>Already a user? Sign in instead</Link> :
        <Link to ={'/signup'}>Sign up instead</Link>}</div>
        {/*<button onClick={()=>supabase.auth.signOut()}>Sign Out</button>*/}
        {/*<button onClick={getIn}>Go in!</button>*/}
        {/*{errMsg && <div className='alert alert-danger error'>{errMsg}</div>}*/}
      </Stack>
    </div>
  );
}





//export function Profile() {
//  const navigate = useNavigate();
//  function handleSignOut() {
//    supabase.auth.signOut();
//    navigate('/signin');
//  }

//  return(
//  <div className='App'>
//    <Button className='btn3' onClick={handleSignOut}>Sign Out</Button>
//  </div>
//  )
//}
 
  
