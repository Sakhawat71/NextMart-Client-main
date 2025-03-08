"use client";
import Category from "@/components/modules/home/Category";
import HeroSection from "@/components/modules/home/HeroSection";
import { useUser } from "@/context/UserContext";

const HomePage = () => {
    const user = useUser();
    console.log(user);
    return (
        <div>
            <HeroSection />
            <Category />
        </div>
    );
};

export default HomePage;
