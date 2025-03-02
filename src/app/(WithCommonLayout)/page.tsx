"use client";
import { useUser } from "@/context/UserContext";

const HomePage = () => {
  const user = useUser();
  console.log(user);
  return (
    <div>
      <h1 className="text-green-600 font-bold text-3xl">Welcome To NextMart Home Page</h1>
    </div>
  );
};

export default HomePage;
