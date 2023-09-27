import * as React from 'react'
import styled from 'styled-components'
import CanvasComponent from '../Molecules/Canvas';
import ToolbarComponent from '../Atoms/Toolbar';

const DrawingBoardOuter = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  margin: 0;
  max-width: 80%;
  // max-height: 80%
  flex-direction: column;
  padding: 50px 0 0px 150px;
  min-height: calc(100vh - 20px);
`;

const DrawingBoard = styled.div`
  width: 100%;
  height: 100%;
  flex: 1
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  background: lightblue;
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

  const [color, setColor] = React.useState('black');
  const [ lineWidth, setLineWidth ] = React.useState(5);

  const handleColorChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setColor(event.target.value);
  }

  const handleLineWidthChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setLineWidth(Number(event.target.value));
  }
  return (
    <DrawingBoardOuter>
      <DrawingBoard>
        <ToolbarComponent color={color} lineWidth={lineWidth} handleColor={handleColorChange} handleLineWidth={handleLineWidthChange}/>
        <CanvasComponent lineWidth={lineWidth} color={color}> 
          {children} 
        </CanvasComponent>
          {/* Player45{children} */}
      </DrawingBoard>
      <TableEntryOuter>
        <TableArea>Table{children}</TableArea>
        <EntryArea>Entry{children}</EntryArea>
      </TableEntryOuter>
    </DrawingBoardOuter>
  )
}

export default DribbleHome;