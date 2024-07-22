import { Avatar, Badge, Box, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from "react";
import { pink } from "@mui/material/colors";
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = () => {
    const {auth} = useSelector(store=>store)
    const navigate = useNavigate();

    const handleAvtarClick=()=>{
        if(auth.user?.role==="ROLE_CUSTOMER"){
            navigate("/my-profile")
        }
        else{
            navigate("admin/restaurant")
        }
    }
    return (
        <Box className="px-5 sticky top-0 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between items-center">

            <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
                <li onClick={()=>navigate("/")} className="logo font-semibold text-gray-300 text-2xl list-none">
                    Jaiswal Food
                </li>
            </div>

            <div className="flex items-center space-x-2 lg:space-x-10">
                <div className="">
                    <IconButton >
                        <SearchIcon sx={{ fontSize: "1.5rem" }} />
                    </IconButton>
                </div>
                <div className="">
                   {auth.user ? <Avatar onClick={handleAvtarClick} sx={{bgcolor:"white", color:pink.A400}}>
                    {auth.user?.fullName[0].toUpperCase()}</Avatar>:
                   <IconButton onClick={()=>navigate("/account/login")}>
                    <PersonIcon/>
                    </IconButton>}
                </div>
                <div className="">
                <IconButton >
                    <Badge color="primary" badgeContent={3}>
                    <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
                    </Badge>

                    </IconButton>
                </div>
            </div>
            
        </Box>
    )
}
