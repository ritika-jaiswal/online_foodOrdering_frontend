import React, { useEffect } from "react";
import "./Home.css"
import { MultiItemCarosuel } from "./MultiItemCarosuel";
import { RestaurantCard } from "../Restaurant/RestaurantCard";
import { useDispatch, useSelector } from "react-redux";
import {getAllRestuarantsAction} from '../State/Reastuarant/Action'


// const rastaurant = [1,1,1,1,1,1,1,1,1]
export const Home = () => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const {restaurant} = useSelector(store=>store)
    console.log("restaurant", restaurant)

    useEffect(()=>{
        dispatch(getAllRestuarantsAction(jwt));
    },[])
    return (
        <div className="pb-10">
            <section className="banner -z-50 reletive flex flex-col justify-center items-center">

                <div className="w-[50vm] z-10 text-center">
                    <p className="text-2xl lg:text-6xl font-bold z-10 py-5">Jaiswal Food</p>
                    <p className="z-10 text-gray-300 text-xl lg:text-4xl">Taste the convenience: Food, Fast and Delivered</p>

                </div>

                <div className="cover absolute top-0 left-0 right-0">

                </div>

                <div className="fadout">

                </div>
            </section>
            <section className="p-10 lg:py-10 lg:px-10 pt-5">
                <p className="text-2xl font-semibold text-gray-400 py-3 pb-5">Top Meal's</p>
                <MultiItemCarosuel/>
            </section>
            <section className="px-5 lg:px-20">
                <h1 className="text-2xl font-semibold text-gray-400 py-3 -ml-10">Order From Our Handpick Favorites</h1>
                <div className="flex flex-wrap items-center justify-around gap-5">
                    {
                        restaurant.restaurants.map((item) => <RestaurantCard item={item}/>)
                    }
                </div>
            </section>

        </div>
    )
}