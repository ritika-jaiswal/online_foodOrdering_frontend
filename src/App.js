import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import { Home } from './components/Home/Home';
import { ReastaurantDetails } from './components/Restaurant/ReastaurantDetails';
import { Cart } from './components/Cart/Cart';
import { Profile } from './components/Profile/Profile';
import { CustomRoute } from './Routers/CustomRoute';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getUser } from './components/State/Authentication/Action';
// import { Suspense } from 'react';

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt")
  const {auth} = useSelector(store=>store)

  // const myLazyCompenent = React.lazy(()=> import('./components/Home/Home'));

  useEffect(()=>{
    dispatch(getUser(auth.jwt || jwt))
  },[auth.jwt])
  return (
    // <Suspense fallback={<div>Loading...</div>}>
    <ThemeProvider theme={darkTheme}>
     
      <CssBaseline/>
      {/* <Navbar/> */}
      {/* <Home/> */}
      {/* <ReastaurantDetails/> */}
      {/* <Cart/> */}
      {/* <Profile/> */}
      <CustomRoute/>
    </ThemeProvider>
    // </Suspense>
  );
}

export default App;
