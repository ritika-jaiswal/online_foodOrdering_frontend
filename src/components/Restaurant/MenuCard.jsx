import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, FormControlLabel, FormGroup } from "@mui/material";
import { CheckBox } from "@mui/icons-material";
import { object } from "yup";
import { categorizeIngredeints } from "../util/categorizeIngredeints";

const demo = [
    {
        category: "Nuts & seeds",
        ingredients: ["Cashwes"]
    },
    {
        category: "Protein",
        ingredients: ["Ground beef", "Becon strips"]
    },
]


export const MenuCard = ({item}) => {

    const handleCheckBoxChange = (value) => {
        console.log(value);
    }
    return (
        <Accordion sx={{ width: '100%' }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <div className="lg:flex items-center justify-between w-full">
                    <div className="lg:flex items-center lg:gap-5 w-full">
                        <img className="w-[7rem] h-[7rem] object-cover"
                            src={item.images[0]} alt="Food Item" />
                        <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                            <p className="font-semibold text-xl">{item.name}</p>
                            <p>₹{item.price}</p>
                            <p className="text-gray-400">{item.description}</p>
                        </div>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <form>
                    <div className="flex gap-5 flex-wrap">
                        {Object.keys(categorizeIngredeints(item.ingredientsItems)).map((category) => (
                            <div key={item.category}>
                                <p>{category}</p>
                                <FormGroup>
                                    {categorizeIngredeints(item.ingredientsItems)[category].map((item) => (
                                        <FormControlLabel
                                            control={<CheckBox onChange={() => handleCheckBoxChange(item)} />}
                                            key={item.name}
                                            label={item.name}
                                        />
                                    ))}
                                </FormGroup>
                            </div>
                        ))}
                    </div>
                    <div className="pt-5">
                        <Button variant="contained" disabled={false} type="submit">{true ? "Add to Cart" : "Out of Stock"}</Button>
                    </div>
                </form>
            </AccordionDetails>
        </Accordion>
    );
};