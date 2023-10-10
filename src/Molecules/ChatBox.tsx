import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ChatInput from '../Atoms/ChatInput';
import useSocket from "../Refs/useSocket"
import MessageList from '../Atoms/MessageDisplay';

const ChatBoxWrapper = styled.div`
  text-align: center;
  background: lightpink;
  margin: 0 20px 0 0;
  // border: 4px solid black;
`;

interface ChatBoxProps {
  children?: React.ReactNode;
}

interface Message {
  text: string;
}

const ChatBoxComponent: React.FC<ChatBoxProps> = ({ children }) => {
  const { sendMessage, message } = useSocket('http://localhost:9000');
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    console.log("Current list of messages: ",messages)
    if (message) {
      console.log("Appending to list: ", message);
      setMessages((prev) => [...prev, { text: message }]);
    }
  }, [message]);
  
  return (
    <ChatBoxWrapper>
      <div>The Message Display Will Go Here</div>
      <ChatInput sendMessage={sendMessage} />
      <MessageList messages={messages}/>
    </ChatBoxWrapper>
  );
};

export default ChatBoxComponent;