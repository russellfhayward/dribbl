import * as React from 'react'
import styled from 'styled-components'
import CanvasComponent from '../Atoms/Canvas';
import ToolbarComponent from '../Atoms/Toolbar';

const DrawingBoard = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;
  align-items: center;
  background: lightblue;
//   border: 3px solid black
`;

interface props {
    children?: React.ReactNode,
}

const DrawingBoardComponent : React.FC<props> = ({children}) => {

    const [color, setColor] = React.useState('black');
    const [ lineWidth, setLineWidth ] = React.useState(5);
    const [clearCanvas, setClearCanvas] = React.useState<(() => void) | undefined>(undefined);

    const handleColorChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setColor(event.target.value);
    }

    const handleLineWidthChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setLineWidth(Number(event.target.value));
    }

    return (
        <DrawingBoard>
            {clearCanvas && <ToolbarComponent color={color} lineWidth={lineWidth} handleClear={clearCanvas} handleColor={handleColorChange} handleLineWidth={handleLineWidthChange}/>}
            <CanvasComponent setClearCanvas={setClearCanvas} lineWidth={lineWidth} color={color} /> 
        </DrawingBoard>
    )
}

export default DrawingBoardComponent;