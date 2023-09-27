import React, {useEffect, useRef } from "react";
import styled from "styled-components";

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

const CanvasComponent : React.FC< CanvasComponentProps & React.CanvasHTMLAttributes<HTMLCanvasElement>> = ({lineWidth, color, ...props }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) { 
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.strokeStyle = 'black';
                ctx.fillStyle = 'orange';
                ctx.fillRect(10, 10, 100, 100)
            }
            // const canvasOffsetX = canvas.offsetLeft;
            // const canvasOffsetY= canvas.offsetTop;

            // canvas.width = window.innerWidth - canvasOffsetX;
            // canvas.height = window.innerHeight - canvasOffsetY;

        }
    })

    return (
        <StyledCanvas ref={canvasRef} {...props}></StyledCanvas>
    )
}

export default CanvasComponent;