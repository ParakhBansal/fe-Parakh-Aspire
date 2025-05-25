import React from 'react';
import aspireLogo from "../../assets/Aspire Logo.svg"
import { iconsArr } from '../../utils/constants';

export const Sidebar: React.FC = () => {
  return (
    <div className="hidden md:block w-1/4 bg-[#0C365A] text-white p-6">
      <div className="cursor-pointer mt-3 mb-6">
        <img src={aspireLogo} />
      </div>
      <p className="text-xs text-gray-400 mb-8">
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
      </p>
      <nav>
        <ul className="p-4 pl-0">
          {['Home', 'Cards', 'Payments', 'Credit', 'Settings'].map((item, i) => (
            <li key={item} className={`flex items-center mt-6 mb-12 cursor-pointer hover:text-green-700 ${item === 'Cards' ? 'text-green-400' : ''}`}>
              <img src={iconsArr[i]} className='mr-4' />
              <span className='font-bold'>{item}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};