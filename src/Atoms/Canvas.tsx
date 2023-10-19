import React, {useEffect, useRef } from "react";
import styled from "styled-components";
import useCanvas from "../Refs/useCanvas";

const StyledCanvas = styled.canvas`
    display: inline-block;
    border: 2px solid black;
    width: 80%;
    height: 80%;
`;

interface CanvasComponentProps {
    lineWidth: number,
    color: string,
    setClearCanvas: (clearCanvas: () => void) => void,
}

const CanvasComponent : React.FC< CanvasComponentProps & React.CanvasHTMLAttributes<HTMLCanvasElement>> = ({lineWidth, color, setClearCanvas,...props }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const { clearCanvas } = useCanvas(canvasRef, lineWidth, color);

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
        <StyledCanvas ref={canvasRef} {...props}></StyledCanvas>
    )
}

export default CanvasComponent;