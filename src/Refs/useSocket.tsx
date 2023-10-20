import { useState, useEffect, useRef } from 'react';
import { Socket, io } from 'socket.io-client';

function useSocket(url: string) {
  const socketRef = useRef<Socket | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    socketRef.current = io(url);

    socketRef.current.on('connect', () => {
      console.log('Client side connected');
    });

    socketRef.current.on('message', (msg: string) => {
      console.log("Received from server: ", msg);
      setMessage(msg);
    });

    socketRef.current.on('disconnect', () => {
      console.log('Disconnected');
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, [url]);

  const sendMessage = (msg: string) => {
    if (socketRef.current) {
      socketRef.current.emit('message', msg);
    }
  };

  return {
    socket: socketRef.current,
    message,
    sendMessage
  };
}

export default useSocket;
