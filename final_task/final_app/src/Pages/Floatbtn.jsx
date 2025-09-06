// FloatingChatButton.jsx
import React from 'react';

const FloatingChatButton = () => {
  const handleClick = () => {
    alert('Chat button clicked!');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-5 rounded-full shadow-lg flex items-center gap-2 z-50"
    >
      <span className="text-lg"></span>
      Chat with AI
    </button>
  );
};

export default FloatingChatButton;
