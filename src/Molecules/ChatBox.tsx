import React, { useState } from 'react';
import styled from 'styled-components';
import Chat from '../Atoms/Chat';

const ChatBoxWrapper = styled.div`
  width: 45%;
  text-align: center;
  background: lightpink;
`;

interface ChatBoxProps {
  children?: React.ReactNode;
}

interface Message {
    id: string;
    text: string;
    sender: string;
  }

const ChatBoxComponent: React.FC<ChatBoxProps> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = (text: string) => {
    // Here you would actually send the message to the server,
    // but for this example, we'll just update local state.
    const newMessage: Message = {
      id: `${Date.now()}`,
      text,
      sender: 'Me', // Replace this with the actual sender's name or ID
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <ChatBoxWrapper>
      <div>The Message Display Will Go Here</div>
      <Chat sendMessage={sendMessage} />
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            <strong>{message.sender}</strong>: {message.text}
          </div>
        ))}
      </div>
    </ChatBoxWrapper>
  );
};

export default ChatBoxComponent;