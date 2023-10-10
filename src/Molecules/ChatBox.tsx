import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { io, Socket } from 'socket.io-client';

const ChatBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  background: lightpink;
  margin: 0 20px 0 0;
  height: 100%;
`;

const MessagesContainer = styled.div`
  height: 75%;
  min-height: 75%;
  width: 99%;
  overflow-y: auto;
  overflow-x: hidden;
  border: 1px solid blue;
  overflow-wrap: break-word;
`;

const ChatInputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25%;
`;

const ChatInput = styled.input`
  width: 75%;
  overflow-wrap: break-word;
`;
const ChatSend = styled.button`
  width: 25%;
  overflow-wrap: break-word;
`;

interface ChatBoxProps {
  children?: React.ReactNode;
}

interface Message {
  date: string;
  text: string;
  sender: string;
}

interface Acknowledgment {
  success: boolean;
}

const ChatBoxComponent: React.FC<ChatBoxProps> = ({ children }) => {
  const socketRef = useRef<Socket | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [id, setID] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    socketRef.current = io('http://localhost:9000');

    socketRef.current.on('yourId', (id) => {
      setID(id);
    });

    socketRef.current.on('newMessage', (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.off('yourId');
        socketRef.current.off('newMessage');
      }
    };
  }, []);

  const sendMessage = () => {
    if (inputValue.trim() === '') return;

    const newMessage: Message = {
      date: `${Date.now()}`,
      text: inputValue,
      sender: id
    };

    if (socketRef.current) {
      socketRef.current.emit('clientMessage', newMessage, (acknowledgement: Acknowledgment) => {
        if (acknowledgement.success) {
          setMessages((prevMessages) => [...prevMessages, newMessage]);
          setInputValue('');
        } else {
          console.error('Message sending failed.');
        }
      });
    }
  };

  return (
    <ChatBoxWrapper>
      <div>Dribbl Chat</div>
      <MessagesContainer>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.sender}</strong>{message.text}
          </div>
        ))}
      </div>
      </MessagesContainer>
      < ChatInputBox>
          <ChatInput value={inputValue} onChange={handleInputChange} />
          <ChatSend onClick={sendMessage}>Send</ChatSend>
        </ChatInputBox>
    </ChatBoxWrapper>
  );
};

export default ChatBoxComponent;
