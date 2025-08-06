import React, { useState } from "react";
import DiscoverMore from "@/components/DiscoverMore";
import EnhanceExperience from "@/components/EnhanceExperience";
import Hero from "@/components/Hero";
import Layout1 from "@/Layout/Layout1";
import Deals from "@/components/Deals";
import Booking from "@/components/Booking";
import BusBooking from "@/components/BusBooking";
import TrainBooking from "@/components/TrainBooking";
import MiniNav from "@/components/MiniNav";
export default function Home() {
    const [toBook,setToBook] = useState('flight');
    return (
        <Layout1>
            <div className="px-1 sm:px-5 lg:px-20 max-w-screen-xl mx-auto">
                <Hero />
                <div className="relative top-60 sm:top-80 pb-60 sm:pb-70">
                    <MiniNav setbooking={setToBook}/>
                    {toBook=='flight'&&<Booking />}
                    {toBook=='bus'&&<BusBooking />}
                    {toBook=='train'&&<TrainBooking />}
                    {/* {toBook=='bus'&&<BusBooking />} */}
                    <Deals />
                    <EnhanceExperience />
                    <DiscoverMore />    
                </div>
            </div>
        </Layout1>
    );
}