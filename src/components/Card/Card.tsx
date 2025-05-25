import React from 'react';
import cardLogo from "../../assets/Aspire Logo (1).svg"
import visaLogo from "../../assets/Visa Logo.svg"
import eyeIcon from "../../assets/remove_red_eye-24px.svg"
import freezeIcon from "../../assets/Freeze card.svg"
import setlimitIcon from "../../assets/Set spend limit.svg"
import deactivateIcon from "../../assets/Deactivate card.svg"
import replaceIcon from "../../assets/Replace card.svg"
import gpayIcon from "../../assets/GPay.svg"

interface Card {
  id: string;
  name: string;
  number: string;
  expiry: string;
  cvv: string;
  isFrozen: boolean;
}

interface CardProps {
  card: Card;
  onToggleFreeze: () => void;
}


export const Card: React.FC<CardProps> = ({
    card,
    onToggleFreeze
}) => {
    const cardActions = [
        {
            name:card.isFrozen ? 'Unfreeze card' : 'Freeze card',
            icon: freezeIcon,
            func: onToggleFreeze
        },
        {
            name:'Set spend limit',
            icon: setlimitIcon,
            func: () => {}
        },
        {
            name:'Add to Gpay',
            icon: gpayIcon,
            func: () => {}
        },
        {
            name:'Replace card',
            icon: replaceIcon,
            func: () => {}
        },
        {
            name:'Deactivate card',
            icon: deactivateIcon,
            func: () => {}
        }
    ]
  return (
    <div>
        <div className='text-green-500 text-sm font-bold mb-2 cursor-pointer flex justify-end hover:text-green-700'>
            <img className='mr-1' src={eyeIcon}/>
            Show card number
        </div>
      <div className={`p-6 rounded-lg shadow-md ${card.isFrozen ? 'bg-blue-200 text-gray-600' : ' bg-green-500 text-white'}`}>
        <div className="flex justify-end items-center">
          <img src={cardLogo} />
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-8">{card.name}</h2>
          <p className="text-sm font-mono font-bold" style={{ wordSpacing:'10%' }}>
            {card.number}
          </p>
          <div className="flex gap-8 mt-2">
            <p className="text-sm">Thru: {card.expiry}</p>
            <p className="text-sm">CVV: {card.cvv}</p>
          </div>
        </div>
        <div className="flex justify-end mt-4">
        <img src={visaLogo}/>
        </div>
      </div>
      <div className="flex gap-4 mt-9 bg-[#EDF3FF] p-5 rounded-2xl h-40">
        
        {cardActions.map((action, i) => <button
          className="flex flex-col justify-center cursor-pointer hover:opacity-80"
          key={i}
          onClick={action.func}
        >
          <img src={action.icon} className='h-8 mb-2' />
          <span className="text-xs break-words">{action.name}</span>
        </button>)}
        
      </div>
    </div>
  );
};