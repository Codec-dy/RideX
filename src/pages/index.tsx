import DiscoverMore from "@/components/DiscoverMore";
import EnhanceExperience from "@/components/EnhanceExperience";
import Hero from "@/components/Hero";
import Layout1 from "@/Layout/Layout1";
import Deals from "@/components/Deals";
import Booking from "@/components/Booking";
export default function Home() {
    return (
        <Layout1>
            <div className="px-1 sm:px-5 lg:px-20 max-w-screen-xl mx-auto">
                <Hero />
                <div className="relative top-40 sm:top-60 pb-30 sm:pb-60">
                    <Booking />
                    <Deals />
                    <EnhanceExperience />
                    <DiscoverMore />    
                </div>
            </div>
        </Layout1>
    );
}