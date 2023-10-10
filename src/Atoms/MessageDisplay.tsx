import React = require("react");
interface Message {
    text: string;
}

const MessageList: React.FC<{ messages: Message[] }> = ({ messages }) => (
    <div>
      {messages.map((msg, idx) => (
        <div key={idx}><strong>Message</strong>: {msg.text}</div>
      ))}
    </div>
  );

export default MessageList