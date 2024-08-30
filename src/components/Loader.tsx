import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="fixed  inset-0 flex items-center justify-center min-h-screen bg-[rgba(0,0,0,0.9)] z-[100]">
      <div className="loader border-t-transparent border-solid rounded-full animate-spin border-4 border-blue h-16 w-16"></div>
    </div>
  );
};

export default Loader;
