import { Button, Card } from "@mui/material";
import React from "react";
import HomeIcon from '@mui/icons-material/Home';

export const AddressCard=(item, showButton, handleSelectaddress)=>{

    return(
        <Card className="flex gap-5 w-64 p-5">
            <HomeIcon/>
            <div className="space-y-3 text-gray-500">
                <h1 className="font-semibold text-lg test-white">Home</h1>
                <p className="">Laxmi Bai Marg, Maheshwar, Ward No.2, 451224, MP, India</p>
               { showButton && (
               <Button variant="outlined" fullWidth onClick={() => handleSelectaddress(item)}>select</Button>)}

            </div>

        </Card>
    )
}