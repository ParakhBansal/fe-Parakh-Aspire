import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  cardName: string;
  setCardName: (value: string) => void;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  cardName,
  setCardName,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-100">
      <div className="bg-white p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Add New Card</h2>
          <div
            className="text-2xl cursor-pointer"
            onClick={onClose}
          >X</div>
        </div>
        <input
          type="text"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          placeholder="Enter card name"
          className="border p-2 w-full mb-4 rounded"
        />
        <div className="flex justify-end gap-2">
          <button
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 cursor-pointer"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
            onClick={cardName.length ? onSubmit : () => {}}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};