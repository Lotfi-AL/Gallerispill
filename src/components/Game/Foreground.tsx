import React, { useRef, useEffect } from "react";
import charWalkCycle from "../../assets/character/walkCycle.png";

const Foreground = (
    props: JSX.IntrinsicAttributes &
        import("react").ClassAttributes<HTMLCanvasElement> &
        import("react").CanvasHTMLAttributes<HTMLCanvasElement>
) => {
    const canvasRef = useRef(null);

    let characterX = 260;
    const characterSpeed = 2;

    let sprite = new Image();
    sprite.src = charWalkCycle;

    let currentFrame = 0;
    let row = 1;
    let walking = false;

    const draw = (ctx: CanvasRenderingContext2D) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        if (walking) {
            currentFrame++;
            currentFrame > 3 ? (currentFrame = 0) : null;
            ctx.drawImage(
                sprite,
                currentFrame * 20,
                row * 20,
                20,
                20,
                characterX,
                20,
                40,
                40
            );
        } else {
            ctx.drawImage(sprite, 0, row * 20, 20, 20, characterX, 20, 40, 40);
        }
        ctx.fill();
    };

    document.onkeydown = (event) => {
        if (event.keyCode === 39) {
            walking = true;
            characterX += characterSpeed;
            row = 0;
        } else if (event.keyCode === 37) {
            walking = true;
            characterX -= characterSpeed;
            row = 1;
        }
    };

    document.onkeyup = (event) => {
        walking = false;
        if (event.keyCode === 39 || event.keyCode === 37) {
            currentFrame = 0;
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        context.webkitImageSmoothingEnabled = false;
        context.mozImageSmoothingEnabled = false;
        context.imageSmoothingEnabled = false;

        let fpsTimer: NodeJS.Timeout;

        const render = () => {
            draw(context);
            fpsTimer = setTimeout(render, 1000 / 8);
        };

        render();
    }, [draw]);

    return <canvas width="560" ref={canvasRef} {...props} />;
};

export default Foreground;
