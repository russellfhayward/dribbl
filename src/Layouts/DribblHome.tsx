import * as React from 'react'
import styled from 'styled-components'
import DrawingBoardComponent from '../Molecules/DrawingBoard';

const DrawingBoardOuter = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  margin: 0;
  max-width: 80%;
  flex-direction: column;
  padding: 50px 0 0px 150px;
  min-height: calc(100vh - 20px);
`;

const TableEntryOuter = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`
const TableArea = styled.div`
  flex: 1;
  text-align: center;
  background: red;
`
const EntryArea = styled.div`
  flex: 1;
  text-align: center;
  background: lightpink;
`
interface DribbleHomeProps {
  className?: string;
  children?: React.ReactNode;
}

const DribbleHome: React.FC<DribbleHomeProps> = ({className, children}) => {

  return (
    <DrawingBoardOuter>
      <DrawingBoardComponent/>
      <TableEntryOuter>
        <TableArea>Table{children}</TableArea>
        <EntryArea>Entry{children}</EntryArea>
      </TableEntryOuter>
    </DrawingBoardOuter>
  )
}

export default DribbleHome;