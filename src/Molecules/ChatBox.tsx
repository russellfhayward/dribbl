import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ChatInput from '../Atoms/ChatInput';
import useSocket from "../Refs/useSocket"
import MessageList from '../Atoms/MessageDisplay';

const ChatBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;  // Take up more space for the chat
  background-color: #FFFFFF;  // White background for the chat area
  border-left: 2px solid #ccc;  // Separator between scoreboard and chat
  border-bottom: 2px solid #ccc;
  border-right: 2px solid #ccc;
  padding: 10px;  // Some padding around the chat
`;

// const MessagesContainer = styled.div`
//   height: 75%;
//   min-height: 75%;
//   width: 99%;
//   overflow-y: auto;
//   overflow-x: hidden;
//   border: 1px solid blue;
//   overflow-wrap: break-word;
// `;

// const ChatInputBox = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 25%;
// `;

// const ChatInput = styled.input`
//   width: 75%;
//   overflow-wrap: break-word;
// `;

// const ChatSend = styled.button`
//   width: 25%;
//   overflow-wrap: break-word;
// `;

interface ChatBoxProps {
  children?: React.ReactNode;
}

interface Message {
  text: string;
}

// interface Acknowledgment {
//   success: boolean;
// }

const ChatBoxComponent: React.FC<ChatBoxProps> = ({ children }) => {
  const { socket, sendMessage, message } = useSocket('http://localhost:9000');
  const [messages, setMessages] = useState<Message[]>([]);

  
  useEffect(() => {
    console.log("socket from server!!!!: ",socket);
    console.log("Current list of messages: ",messages)
    if (message) {
      console.log("Appending to list: ", message);
      setMessages((prev) => [...prev, { text: message }]);
    }
  }, [message]);
  
  return (
    <ChatBoxWrapper>
      <MessageList messages={messages}/>
      <ChatInput sendMessage={sendMessage} />
    </ChatBoxWrapper>
  );
};

export default ChatBoxComponent;
