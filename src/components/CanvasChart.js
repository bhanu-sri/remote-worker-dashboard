import React, { useRef, useEffect } from 'react';

function CanvasChart() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const networkStrength = 75;

        ctx.beginPath();
        ctx.arc(150, 100, 70, 0, 2 * Math.PI);
        ctx.strokeStyle = '#555';
        ctx.lineWidth = 15;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(150, 100, 70, -0.5 * Math.PI, (2 * Math.PI) * (networkStrength / 100) - 0.5 * Math.PI);
        ctx.strokeStyle = '#61dafb';
        ctx.lineWidth = 15;
        ctx.stroke();

        ctx.font = '22px Segoe UI';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.fillText(`${networkStrength}%`, 150, 110);
    }, []);

    return (
        <canvas ref={canvasRef} width="300" height="200" style={{ border: '1px solid #ddd' }}></canvas>
    );
}

export default CanvasChart;
