import { useEffect, useRef, RefObject } from "react";

const useCanvas = (canvasRef: RefObject<HTMLCanvasElement>, lineWidth: number, color: string) => {
    const painting = useRef(false);
    
    const draw = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => (e: MouseEvent) => {
        if (!painting.current) return;
        console.log("*** TRYING TO DRAW!")
        
        const { left, top } = canvas.getBoundingClientRect();

        context.lineWidth = lineWidth;
        context.lineCap = 'round';
        context.strokeStyle = color;

        context.lineTo(e.clientX - left, e.clientY - top);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX - left, e.clientY - top);
    };

    const startPosition = (draw: (e: MouseEvent) => void) => (e: MouseEvent) => {
        painting.current = true;
        draw(e);
    }

    const finishedPosition = (context: CanvasRenderingContext2D) => {
        painting.current = false;
        context.beginPath();
    }

    const clearCanvas = () => {
        if (!canvasRef.current) return;
        const context = canvasRef.current.getContext('2d');

        if (!context) return;
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        context.fillStyle = 'white';
        context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      };

    useEffect(() => {
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        const boundDraw = draw(canvas, context);
        canvas.addEventListener('mousedown', startPosition(boundDraw));
        window.addEventListener('mouseup', () => finishedPosition(context));
        canvas.addEventListener('mousemove', boundDraw);

        return () => {
            canvas.removeEventListener('mousedown', startPosition(boundDraw));
            window.removeEventListener('mouseup', () => finishedPosition(context));
            canvas.removeEventListener('mousemove', boundDraw);
        }
    }, [canvasRef, color, lineWidth]); 

    return { clearCanvas }
};

export default useCanvas;