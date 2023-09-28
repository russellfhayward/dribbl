import { useEffect, useRef, RefObject } from "react";

interface params {
    ref: React.RefObject<HTMLCanvasElement>
}

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
        console.log('MOUSE DOWN!!!');
        painting.current = true;
        draw(e);
    }

    const finishedPosition = (context: CanvasRenderingContext2D) => {
        console.log("Done!!!")
        painting.current = false;
        context.beginPath();
    }

    useEffect(() => {
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = 'white';
        context.fillRect(-2, -2, canvas.width+6, canvas.height+6);

        const boundDraw = draw(canvas, context);
        canvas.addEventListener('mousedown', startPosition(boundDraw));
        window.addEventListener('mouseup', () => finishedPosition(context));
        canvas.addEventListener('mousemove', boundDraw);

        return () => {
            canvas.removeEventListener('mousedown', startPosition(boundDraw));
            window.removeEventListener('mouseup', () => finishedPosition(context));
            canvas.removeEventListener('mousemove', boundDraw);
        }
    }, [canvasRef, lineWidth, color]); // Don't forget dependencies!
};


export default useCanvas;