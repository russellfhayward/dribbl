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
    
}

const CanvasComponent : React.FC< CanvasComponentProps & React.CanvasHTMLAttributes<HTMLCanvasElement>> = ({lineWidth, color,...props }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    useCanvas(canvasRef, lineWidth, color);

    useEffect(() => {
        if (canvasRef.current){
            const rect = canvasRef.current.getBoundingClientRect();
            canvasRef.current.width = rect.width;
            canvasRef.current.height=rect.height;
        }
    })

    return (
        <StyledCanvas ref={canvasRef} {...props}></StyledCanvas>
    )
}

export default CanvasComponent;