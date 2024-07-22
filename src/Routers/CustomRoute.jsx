import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Home } from "../components/Home/Home";
import { ReastaurantDetails } from "../components/Restaurant/ReastaurantDetails";
import { Cart } from "../components/Cart/Cart";
import { Profile } from "../components/Profile/Profile";
import { Route, Routes } from "react-router-dom";
import { Auth } from "../components/Auth/Auth";

export const CustomRoute=()=>{
    return(
        <div>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/account/:register' element={<Home/>}/>
                <Route path='/restaurant/:city/:title/:id' element={<ReastaurantDetails/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/my-profile/*' element={<Profile/>}/>
            </Routes>
            <Auth/>
        </div>
    )
}