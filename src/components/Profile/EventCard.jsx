import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

export const EventCard=()=>{
    return(
        <Card sx={{width:310}}>
            <CardMedia
                sx={{height:310}}
                image="https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_640.jpg"
            />
            <CardContent>
                <Typography variant="h5">
                    Indian Fast Food
                </Typography>
                <Typography variant="body2">
                    50% off on your first order
                </Typography>
                <div className="py-2 space-y-2">
                    <p>{"Indore"}</p>
                    <p className="text-sm text-blue-500">June 20, 2024 12.00 AM</p>
                    <p className="text-sm text-red-500">June 21, 2024 12.00 AM</p>
                </div>
            </CardContent>
           {false && <CardActions>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </CardActions>}
        </Card>
    )
}