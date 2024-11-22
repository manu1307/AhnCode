import AuthModal from "@/components/Modal/AuthModal";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

type PageProps = {};

const Page: React.FC<PageProps> = () => {
  return (
    <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none">
          <img src="/hero.png" alt="Hero image" />
        </div>
        <AuthModal />
      </div>
    </div>
  );
};
export default Page;
