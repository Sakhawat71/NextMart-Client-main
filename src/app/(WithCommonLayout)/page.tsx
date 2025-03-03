"use client";
import { useUser } from "@/context/UserContext";

const HomePage = () => {
  const user = useUser();
  console.log(user);
  return (
    <div>
      <h1 className="text-gray-800">Welcome To NextMart Home Page</h1>
    </div>
  );
};

export default HomePage;
