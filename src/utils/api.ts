import FlightIcon from "../assets/flights.svg"
import SpeakerIcon from "../assets/megaphone.svg"
import StorageIcon from "../assets/file-storage.svg"

export const getCards = () => {
  const cards = localStorage.getItem('cards');
  return cards
    ? JSON.parse(cards)
    : [
        {
          id: '1',
          name: 'Mark Henry',
          number: '**** **** **** 2020',
          expiry: '12/20',
          cvv: '***',
          isFrozen: false,
        },
      ];
};

export const addCard = (name: string) => {
  const newCard = {
    id: Date.now(),
    name,
    number: `**** **** **** ${Math.floor(1000 + Math.random() * 9000)}`,
    expiry: `${Math.floor(1 + Math.random() * 12).toString().padStart(2, '0')}/${(20 + Math.floor(Math.random() * 5)).toString()}`,
    cvv: '***',
    isFrozen: false,
  };
  const cards = getCards();
  cards.push(newCard);
  localStorage.setItem('cards', JSON.stringify(cards));
  return newCard;
};

export const toggleFreeze = (id: string) => {
  const cards = getCards().map((card: any) =>
    card.id === id ? { ...card, isFrozen: !card.isFrozen } : card
  );
  localStorage.setItem('cards', JSON.stringify(cards));
  return cards;
};

export const getTransactions = () => {
  return [
    {
      id: '1',
      name: 'Hamleys',
      date: '20 May 2020',
      amount: '+ S$150',
      description: 'Refund on debit card',
      type: 'refund',
      icon:StorageIcon,
      color:"bg-[#009DFF1A]"
    },
    {
      id: '2',
      name: 'Hamleys',
      date: '20 May 2020',
      amount: '- S$150',
      description: 'Charged to debit card',
      type: 'charge',
      icon:FlightIcon,
      color:"bg-[#00D6B51A]"
    },
    {
      id: '3',
      name: 'Hamleys',
      date: '20 May 2020',
      amount: '- S$150',
      description: 'Charged to debit card',
      type: 'charge',
      icon:SpeakerIcon,
      color:"bg-[#F251951A]"
    },
    {
      id: '4',
      name: 'Hamleys',
      date: '20 May 2020',
      amount: '- S$150',
      description: 'Charged to debit card',
      type: 'charge',
      icon:StorageIcon,
      color:"bg-[#009DFF1A]"
    }
  ];
};