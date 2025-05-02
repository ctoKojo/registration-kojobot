import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center my-6 w-full">
      <div className="p-4 rounded-xl">
        <img
          src="/images/kojobot.png"
          alt="Kojobot Logo"
          className="h-16 w-auto"
        />
      </div>
    </div>
  );
};

export default Logo;
