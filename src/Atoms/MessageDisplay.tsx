import React = require("react");
import styled from "styled-components";
interface Message {
    text: string;
}

const MessageContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 10px;
`;

const MessageList: React.FC<{ messages: Message[] }> = ({ messages }) => (
    <MessageContainer>
      {messages.map((msg, idx) => (
        <div key={idx}><strong>Message</strong>: {msg.text}</div>
      ))}
    </MessageContainer>
  );

export default MessageList