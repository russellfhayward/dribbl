import React, {useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useCanvas from "../Refs/useCanvas";

const StyledCanvasOuter = styled.div`
    width: 100%;
    height: 100%;

    position: relative;
`

const StyledCanvas = styled.canvas`
    display: inline-block;
    width: 80%;
    height: 80%;

    border: 2px solid black;
`;

const PlayerNameInput = styled.input`
    width: 8rem;
    height: 1rem;

    position: absolute;
    top: 4%;
    left: 11.5%;

    white-space: nowrap;
    overflow: hidden;  
    text-overflow: ellipsis;

    background-color: lightblue;

    &::placeholder {
        color: black;
    }
`

interface CanvasComponentProps {
    lineWidth: number,
    color: string,
    setClearCanvas: (clearCanvas: () => void) => void,
}

const CanvasComponent : React.FC< CanvasComponentProps & React.CanvasHTMLAttributes<HTMLCanvasElement>> = ({lineWidth, color, setClearCanvas,...props }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const { clearCanvas } = useCanvas(canvasRef, lineWidth, color);
    const [boardPlaceholder, setBoardPlaceholder] = useState('Player144234353553323535235235235235')
    useEffect(() => {
        if (canvasRef.current){
            setClearCanvas(() => clearCanvas);

            const rect = canvasRef.current.getBoundingClientRect();
            
            canvasRef.current.width = rect.width;
            canvasRef.current.height= rect.height;

            const context = canvasRef.current.getContext('2d');
            if (!context) return;
            context.fillStyle = 'white';
            context.fillRect(0, 0, rect.width, rect.height);
        }
    }, [])

    return (
        <StyledCanvasOuter className="styled-canvas-outer">
            <StyledCanvas ref={canvasRef} {...props}></StyledCanvas>
            <PlayerNameInput placeholder={boardPlaceholder} />
        </StyledCanvasOuter>
    )
}

export default CanvasComponent;