import * as React from 'react'
import styled from 'styled-components'
import DrawingBoardComponent from '../Molecules/DrawingBoard';
import UserChatDisplayComponent from '../Organisms/UserChatDisplay';
import ChatBoxComponent from '../Molecules/ChatBox';

const DrawingBoardOuter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-direction: column;
  // border: 3px solid green;
`;

interface DribbleHomeProps {
  className?: string;
  children?: React.ReactNode;
}

const DribbleHome: React.FC<DribbleHomeProps> = ({className, children}) => {
  
  return (
    <DrawingBoardOuter>
      <DrawingBoardComponent/>
      <UserChatDisplayComponent/>
    </DrawingBoardOuter>
  )
}

export default DribbleHome;