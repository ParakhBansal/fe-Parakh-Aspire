import React from 'react';
import add from "../../assets/add.svg"

interface HeaderProps {
  onAddCard: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onAddCard }) => {
  return (
    <div>
    <p className="text-sm mb-3">Available balance</p>
    <div className="flex justify-between items-center mb-6">
      <div>
        <div className="flex items-center ">
          <span className="text-sm text-white bg-green-500 px-4 py-1 mr-2 rounded">S$</span>
          <span className="text-2xl font-bold">3,000</span>
        </div>
      </div>
      <button
        className="bg-[#325BAF] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-70 cursor-pointer"
        onClick={onAddCard}
      >
        <img src={add} />
        <span>New card</span>
      </button>
    </div>
    </div>
  );
};