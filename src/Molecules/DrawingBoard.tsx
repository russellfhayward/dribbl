import * as React from 'react'
import styled from 'styled-components'
import CanvasComponent from '../Atoms/Canvas';
import ToolbarComponent from '../Atoms/Toolbar';

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

interface props {
    children?: React.ReactNode,
}

const DrawingBoardComponent : React.FC<props> = ({children}) => {

    const [color, setColor] = React.useState('black');
    const [ lineWidth, setLineWidth ] = React.useState(5);

    const handleColorChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setColor(event.target.value);
    }

    const handleLineWidthChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setLineWidth(Number(event.target.value));
    }

    return (
        <DrawingBoard>
            <ToolbarComponent color={color} lineWidth={lineWidth} handleColor={handleColorChange} handleLineWidth={handleLineWidthChange}/>
            <CanvasComponent lineWidth={lineWidth} color={color} /> 
        </DrawingBoard>
    )
}

export default DrawingBoardComponent;