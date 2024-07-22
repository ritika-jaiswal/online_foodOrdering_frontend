import React from "react";
import { CartItem } from "./CartItem";
import { Box, Button, Card, Divider, Grid, Modal, TextField } from "@mui/material";
import { AddressCard } from "./AddressCard";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup"

const items = [1, 1];
export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline: "none",
    boxShadow: 24,
    p: 4,
};

const initialValues={
    streetAddress:"",
    state:"",
    pincode:"",
    city:""
}

// const validationSchema = yup.object.shape({
//     streetAddress:yup.string().required("Street Address is required"),
//     state:yup.string().required("State is required"),
//     pincode:yup.string().required("Pincode is required"),
//     city:yup.string().required("City is required")
// })

export const Cart = () => {
    const createOrderUsingSelectedAddress = () => { }

    const handleOpenAddressModal = () => setOpen(true);

    const [open, setOpen] = React.useState(false);

    const handleClose = () => setOpen(false);

    const handleSubmit=(values)=>{
        console.log(values)
    }

    return (
        <>
            <main className="lg:flex justify-between">
                <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
                    {items.map((item) => (
                        <CartItem />))}
                    {/* <CartItem/> */}

                    <Divider />
                    <div className="billDetails px-5 text-sm">
                        <p className="font-extralight py-5">Bill Details</p>
                        <div className="space-y-3">
                            <div className="flex justify-between text-gray-400">
                                <p>Item Total</p>
                                <p>₹998</p>

                            </div>
                            <div className="flex justify-between text-gray-400">
                                <p>Delivery Fee</p>
                                <p>₹60</p>

                            </div>
                            <div className="flex justify-between text-gray-400">
                                <p>PlateForm Fee</p>
                                <p>₹10</p>

                            </div>
                            <div className="flex justify-between text-gray-400">
                                <p>GST and Rastaurant Charges</p>
                                <p>₹33</p>

                            </div>
                            <Divider />

                        </div>
                        <div className="flex justify-between text-gray-400">
                            <p>Total pay</p>
                            <p>₹1112</p>
                        </div>

                    </div>
                </section>
                <Divider orientation="vertical" flexItem />
                <section className="lg:-[70%] flex justify-center px-5 pb-10 lg:pb-0">
                    <div>
                        <h1 className="text-center font-semibold text-2xl py-10">Choose Delivery Address</h1>
                        <div className="flex gap-5 flex-wrap justify-center">
                            {[1, 1, 1].map((item) => (
                                <AddressCard item={item} showButton={true} handleSelectaddress={createOrderUsingSelectedAddress} />
                            ))}
                            <Card className="flex gap-5 w-64 p-5">
                                <AddLocationAltIcon />
                                <div className="space-y-3 text-gray-500">
                                    <h1 className="font-semibold text-lg test-white">Add New Address</h1>
                                    <Button variant="contained" fullWidth onClick={handleOpenAddressModal}>Add</Button>

                                </div>

                            </Card>

                        </div>
                    </div>

                </section>
            </main>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                   <Formik initialValues={initialValues} 
                //    validationSchema={validationSchema}
                    onSubmit={handleSubmit}>
                    <Form>

                
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Field 
                            as={TextField}
                            name="streetAddress"
                            label = "Street Address"
                            fullWidth
                            variant="outlined"
                            error={!ErrorMessage("streetAddress")}
                            // helperText={
                            //     <ErrorMessage>
                            //         {(msg)=><span className="text-red-600">{msg}</span>}
                            //     </ErrorMessage>
                            // }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field 
                            as={TextField}
                            name="state"
                            label = "State"
                            fullWidth
                            variant="outlined"
                            error={!ErrorMessage("streetAddress")}
                            // helperText={
                            //     <ErrorMessage>
                            //         {(msg)=><span className="text-red-600">{msg}</span>}
                            //     </ErrorMessage>
                            // }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field 
                            as={TextField}
                            name="city"
                            label = "City"
                            fullWidth
                            variant="outlined"
                            error={!ErrorMessage("streetAddress")}
                            // helperText={
                            //     <ErrorMessage>
                            //         {(msg)=><span className="text-red-600">{msg}</span>}
                            //     </ErrorMessage>
                            // }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field 
                            as={TextField}
                            name="pincode"
                            label = "Pincode"
                            fullWidth
                            variant="outlined"
                            error={!ErrorMessage("streetAddress")}
                            // helperText={
                            //     <ErrorMessage>
                            //         {(msg)=><span className="text-red-600">{msg}</span>}
                            //     </ErrorMessage>
                            // }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button fullWidth variant="contained" color="primary" type="submit">Deliver Here</Button>

                        </Grid>
                        </Grid>
                        </Form>
                   </Formik>
                </Box>
            </Modal>
        </>
    )
}