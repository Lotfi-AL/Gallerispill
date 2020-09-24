import React, { useRef, useEffect } from "react";
import charWalkCycle from "../../assets/character/walkCycle.png";
import buttonText from "../../assets/character/buttonText.png";
import housePaintings from "../../assets/house/paintings.png";
import { useStatus } from "../Store/StatusProvider";
import { statusType } from "../Store/StatusContext";

//const canvas = document.createElement("canvas");
let characterX = 250;
let row = 1;
const Foreground = (
  props: JSX.IntrinsicAttributes &
    import("react").ClassAttributes<HTMLCanvasElement> &
    import("react").CanvasHTMLAttributes<HTMLCanvasElement>
) => {
  const canvasRef = useRef(null);
  const { status, setStatus } = useStatus();

  //let characterX = 250;
  const characterSpeed = 2;

  const sprite = new Image();
  sprite.src = charWalkCycle;

  const spacebar = new Image();
  spacebar.src = buttonText;

  const paintings = new Image();
  paintings.src = housePaintings;
  const paintingPositions = [40, 120, 200];
  const activePainting = [false, false, false];

  let fpsTimer: NodeJS.Timeout;
  let currentFrame = 0;

  let walking = false;

  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.drawImage(paintings, 0, 0, 32, 32, paintingPositions[0], 32, 32, 32);
    ctx.drawImage(paintings, 32, 0, 32, 32, paintingPositions[1], 32, 32, 32);
    ctx.drawImage(paintings, 32, 32, 32, 32, paintingPositions[2], 32, 32, 32);

    if (
      characterX > paintingPositions[0] - 16 &&
      characterX < paintingPositions[0] + 32
    ) {
      ctx.drawImage(
        spacebar,
        0,
        0,
        64,
        32,
        paintingPositions[0] - 16,
        16,
        64,
        32
      );
      activePainting[0] = true;
    } else {
      activePainting[0] = false;
    }

    if (
      characterX > paintingPositions[1] - 16 &&
      characterX < paintingPositions[1] + 32
    ) {
      ctx.drawImage(
        spacebar,
        0,
        0,
        64,
        32,
        paintingPositions[1] - 16,
        16,
        64,
        32
      );
      activePainting[1] = true;
    } else {
      activePainting[1] = false;
    }

    if (
      characterX > paintingPositions[2] - 16 &&
      characterX < paintingPositions[2] + 32
    ) {
      ctx.drawImage(
        spacebar,
        0,
        0,
        64,
        32,
        paintingPositions[2] - 16,
        16,
        64,
        32
      );
      activePainting[2] = true;
    } else {
      activePainting[2] = false;
    }

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
        60,
        20,
        20
      );
    } else {
      ctx.drawImage(sprite, 0, row * 20, 20, 20, characterX, 60, 20, 20);
    }
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

    if (event.keyCode === 32) {
      const newStatus: statusType = {
        night: status.night,
        rain: status.rain,
        wind: status.wind,
      };
      if (activePainting[0]) {
        console.log("Toggle Night!");
        clearTimeout(fpsTimer);
        newStatus.night = !newStatus.night;
        setStatus(newStatus);
      } else if (activePainting[1]) {
        console.log("Toggle Wind!");
        clearTimeout(fpsTimer);
        newStatus.wind = !newStatus.wind;
        setStatus(newStatus);
      } else if (activePainting[2]) {
        console.log("Toggle Rain!");
        clearTimeout(fpsTimer);
        newStatus.rain = !newStatus.rain;
        setStatus(newStatus);
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.webkitImageSmoothingEnabled = false;
    context.mozImageSmoothingEnabled = false;
    context.imageSmoothingEnabled = false;

    const render = () => {
      draw(context);
      fpsTimer = setTimeout(render, 1000 / 12);
    };

    render();
  }, [draw]);

  return <canvas width="480" height="100" ref={canvasRef} {...props} />;
};

export default Foreground;
