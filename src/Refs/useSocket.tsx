import { useEffect, useRef } from 'react';
import {io, Socket} from 'socket.io-client';

export const useSocket = (serverUrl: string) => {
  const socketRef = useRef<Socket>();

  useEffect(() => {
    // Initialize socket connection when the component mounts
    socketRef.current = io(serverUrl);

    // Clean up the connection when the component unmounts
    return () => {
      if (socketRef.current) socketRef.current.disconnect();
    };
  }, [serverUrl]);

  return socketRef.current;
};