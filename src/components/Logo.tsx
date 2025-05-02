
import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center mb-6">
      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#61C9E0] to-[#6455F0] text-2xl font-bold">
          KOJOBOT
        </div>
      </div>
    </div>
  );
};

export default Logo;
