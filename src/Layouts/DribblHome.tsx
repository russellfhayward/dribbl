import * as React from 'react'
import styled from 'styled-components'

const DrawingBoardOuter = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh; /* Minimum height of the viewport */
  min-width: 100vw; /* Minimum width of the viewport */

  //background: lightgray;
`;

const Header = styled.header`
  text-align: right;
  
  width: 100%;
  height: 5vh;

  //background: lightgreen;
`;

const DrawingBoardBackGround = styled.div`
  position: relative;

  width: 100%;
  height: 50vh;

  background: yellow;
`;

const DrawingBoard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  width: 85%;
  height: 75%;

  background: lightblue;
`;

const TableEntryOuter = styled.div`
  position: relative;

  width: 100%;
  height: 50vh;

  //background: teal;
`

const TableArea = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

  width: 45%;
  height: 100%;

  background: red;
`
const EntryArea = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);  
  
  width: 45%;
  height: 100%;

  background: lightpink;
`

interface DribbleHomeProps {
  className?: string;
  children?: React.ReactNode;
}

const DribbleHome: React.FC<DribbleHomeProps> = ({className, children}) => {
  return (
    <DrawingBoardOuter>
      <Header data-cy="home-page-header">Link1 Link2 Link3 Menu{children}</Header>
      <DrawingBoardBackGround>
        <DrawingBoard>Player45{children}</DrawingBoard>
      </DrawingBoardBackGround>
      <TableEntryOuter>
        <TableArea>Table{children}</TableArea>
        <EntryArea>Entry{children}</EntryArea>
      </TableEntryOuter>
    </DrawingBoardOuter>
  )
}

export default DribbleHome;