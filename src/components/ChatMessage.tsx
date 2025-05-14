import React from 'react';

interface ChatMessageProps {
  message: string;
  isSent: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isSent }) => {
  return (
    <div className={`chatbot-message ${isSent ? 'chatbot-message-sent' : 'chatbot-message-received'}`}>
      {message}
    </div>
  );
};

export default ChatMessage;