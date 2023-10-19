// import React, { useState } from 'react';
  
// interface ChatProps {
//     sendMessage: (message: string) => void;
// }
  
//   const Chat: React.FC<ChatProps> = ({ sendMessage }) => {
//     const [message, setMessage] = useState('');
  
//     const handleSendMessage = () => {
//       sendMessage(message);
//       setMessage('');
//     };
  
//     return (
//       <div>
//         <input
//           type="text"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <button onClick={handleSendMessage}>Send</button>
//       </div>
//     );
//   };

// export default Chat