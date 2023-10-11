import React, { useState } from 'react';
import styled from 'styled-components';
interface ChatProps {
    sendMessage: (message: string) => void;
}

const InputWrapper = styled.div`
  display: flex;
  border-top: 1px solid #ccc;
  padding-top: 10px;
`;

const MessageInput = styled.input`
  flex: 1;
  border: 1px solid ;
  padding: 10px;
  border-radius: 5px;
  margin-right: 10px;
`;

const SendButton = styled.button`
  background-color: #4A90E2;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;
  
const ChatInput: React.FC<ChatProps> = ({ sendMessage }) => {
    const [inputMessage, setInputMessage] = useState('');
  
    const handleSendMessage = () => {
      if (inputMessage.trim()) {
        sendMessage(inputMessage);
        setInputMessage('');
      }
    };
  
    return (
      <InputWrapper>
        <MessageInput
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <SendButton onClick={handleSendMessage}>Send</SendButton>
      </InputWrapper>
    );
  };

export default ChatInput