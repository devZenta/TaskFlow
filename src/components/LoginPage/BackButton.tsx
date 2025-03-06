import React from 'react';

interface BackButtonProps {
  onClick?: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <div className="flex justify-center w-full">
      <button 
        className="bg-white text-center w-36 rounded-2xl h-12 relative text-black text-lg font-semibold group" 
        type="button"
        onClick={onClick}
      >
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl h-10 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[132px] z-10 duration-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="22px" width="22px">
            <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" fill="#ffffff" />
            <path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z" fill="#ffffff" />
          </svg>
        </div>
        <p className="translate-x-2 text-sm">Go Back</p>
      </button>
    </div>
  );
}

export default BackButton;