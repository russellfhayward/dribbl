import React, { useState } from 'react';
  
interface ChatProps {
    sendMessage: (message: string) => void;
}
  
  const ChatInput: React.FC<ChatProps> = ({ sendMessage }) => {
    const [inputMessage, setInputMessage] = useState('');
  
    const handleSendMessage = () => {
      if (inputMessage.trim()) {
        sendMessage(inputMessage);
        setInputMessage('');
      }
    };
  
    return (
      <div>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    );
  };

export default ChatInput