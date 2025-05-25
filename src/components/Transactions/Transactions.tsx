import React, { useState } from 'react';
import upArrow from  "../../assets/up-arrow.svg"
import downArrow from "../../assets/down-arrow.svg"
import transactionsIcon from "../../assets/transactions.svg"
import detailsIcon from "../../assets/details.svg"
import nextIcon from "../../assets/next.svg"
import debitIcon from "../../assets/business-and-finance.svg"

interface TransactionsProps {
  transactions: any;
}

export const Transactions: React.FC<TransactionsProps> = ({ transactions }) => {
  const [activeTab, setActiveTab] = useState<Boolean>(true);

  return (
    <div>
        <div className="mb-2 bg-white rounded-lg shadow-sm">
        <button
          className="w-full bg-[#F5F9FF] flex justify-between items-center px-4 py-6 hover:opacity-60 cursor-pointer"
          onClick={() => setActiveTab(prev => !prev)}
        >
          <span
            className={`text-md text-gray-600 flex`}
          >
            <img src={detailsIcon} className='pr-2' />
            Card details
          </span>
          <img
            src={!activeTab ? upArrow : downArrow}
            alt="Expand"
            className={`w-5 h-5`}
          />
        </button>
        {!activeTab && (
          <div className="p-4 border-t border-gray-200">
            <p className="text-gray-500">Card details will be shown here.</p>
          </div>
        )}
      </div>
      <div className="mb-2 bg-white rounded-lg shadow-sm">
        <button
          className="w-full bg-[#F5F9FF] flex justify-between items-center px-4 py-6 hover:opacity-60 cursor-pointer"
          onClick={() => setActiveTab(prev => !prev)}
        >
          <span
            className={`text-md text-gray-600 flex`}
          >
            <img src={transactionsIcon} className='pr-2' />
            Transactions
          </span>
          <img
            src={activeTab ? upArrow : downArrow}
            alt="Expand"
            className={`w-5 h-5`}
          />
        </button>
        {activeTab && (
          <div>
            {transactions.map((transaction:any) => <div key={transaction.id} className="flex items-baseline justify-between gap-3 py-4 px-4 border-b border-gray-100">
                <div className='flex'>
                <div className={`w-10 h-10 rounded-full ${transaction.color} flex justify-center items-center mr-3`}>
                    <img src={transaction.icon} className='h-4 w-4' />
                </div>
                <div >
                <p className="text-sm font-semibold mb-1">{transaction.name}</p>
                <p className="text-xs text-gray-300 mb-5">{transaction.date}</p>
                <div className="text-xs text-[#325BAF] font-bold flex items-center"> 
                    <div className='w-4 h-4 rounded-full bg-[#325BAF] flex justify-center items-center mr-1'>
                        <img src={debitIcon} className='h-2 w-2'/>
                    </div>
                    {transaction.description}
                </div>
              </div></div>
              <p className={`flex items-center justify-self-end text-sm font-bold ${transaction.type === 'refund' ? 'text-green-500' : ''}`}>
                {transaction.amount}
              <img src={nextIcon} className='pl-2'/>
              </p>
            </div>)}
            <div className='p-4 flex justify-center items-center bg-[#EDFFF5] border-1 border-[#DDFFEC] font-semibold text-[#01D167]'>
              View all card transactions
            </div>
          </div>
        )}
      </div>
    </div>
  );
};