import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Card } from './components/Card/Card';
import { Transactions } from './components/Transactions/Transactions';
import { Header } from './components/Header/Header';
import { Modal } from './base/Modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { getCards, addCard, toggleFreeze, getTransactions } from './utils/api';
import { iconsArrMobile } from './utils/constants';

const App: React.FC = () => {
  const [cards, setCards] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardName, setCardName] = useState('');

  useEffect(() => {
    const initialCards = getCards();
    setCards(initialCards);
  }, []);

  const handleAddCard = () => {
    if (cardName.trim()) {
      const newCard = addCard(cardName);
      setCards([...cards, newCard]);
      setCardName('');
      setIsModalOpen(false);
    }
  };

  const handleToggleFreeze = (id: string) => {
    const updatedCards = toggleFreeze(id);
    setCards(updatedCards);
  };

  const transactionsList = getTransactions()

  console.log('cardsArr :>>', cards);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-4 md:p-8">
        <Header onAddCard={() => setIsModalOpen(true)} />
        <div className='mb-3'>
          <span className='font-bold border-b-3 pb-2 border-blue-400 mr-5'>My debit cards</span>
          <span className='text-gray-300'>All company cards</span>
        </div>
        <div className="mt-6 flex flex-col shadow-md p-5 rounded-md md:flex-row md:gap-6">
          <div className="md:w-1/2">
            {<Swiper
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop={cards.length > 1}
                className="w-full max-w-[400px] mx-auto"
              >
                {cards.map((card) => (
                  <SwiperSlide key={card.id}>
                    <Card
                      card={card}
                      onToggleFreeze={() => handleToggleFreeze(card.id)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>}
          </div>
          <div className="md:w-1/2 mt-5 md:m-0">
            <Transactions transactions={transactionsList} />
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddCard}
        cardName={cardName}
        setCardName={setCardName}
      />
      <div className='w-full p-2 md:hidden fixed bottom-0 bg-white flex justify-around drop-shadow-2xl'>
        {iconsArrMobile.map((icon, i) => <img src={icon} key={i} alt={`Mobile icon ${i}`} />)}
      </div>
    </div>
  );
};

export default App;