import React, { useEffect, useState, useRef } from "react";
import html from "../assets/html.png";
import css from "../assets/css-3.png";
import js from "../assets/js.webp";
import react from "../assets/react.png";
import angular from "../assets/angular.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import next from "../assets/next.png";
import c from "../assets/c.png";
import cpp from "../assets/cpp.png";
import csharp from "../assets/c-sharp.png";
import java from "../assets/java.png";
import python from "../assets/python.png";
import sql from "../assets/sql.png";
import mongodb from "../assets/mongodb.png";
import "../styles/SnakeGame.css";

const images = {
  html: html,
  css: css,
  js: js,
  react: react,
  angular: angular,
  node: node,
  express: express,
  next: next,
  c: c,
  cpp: cpp,
  csharp: csharp,
  java: java,
  python: python,
  sql: sql,
  mongodb: mongodb,
};

const SnakeGame = () => {
  const [snake, setSnake] = useState([{ x: 50, y: 50 }]);
  const [direction, setDirection] = useState({ x: 10, y: 0 });
  const [food, setFood] = useState({ x: 200, y: 200, img: null });
  const [isGameOver, setIsGameOver] = useState(false);
  const [snakeImages, setSnakeImages] = useState([]);
  const [remainingImages, setRemainingImages] = useState(
    new Set(Object.keys(images))
  );
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const interval = setInterval(() => {
      if (!isGameOver) {
        updateSnakePosition();
        checkCollision();
        drawGame(ctx);
      }
    }, 100);

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      clearInterval(interval);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [snake, direction, isGameOver]);

  useEffect(() => {
    setFood(generateRandomFood());
  }, []);

  const handleKeyPress = (e) => {
    switch (e.key) {
      case "ArrowUp":
      case "w":
        if (direction.y === 0) setDirection({ x: 0, y: -10 });
        break;
      case "ArrowDown":
      case "s":
        if (direction.y === 0) setDirection({ x: 0, y: 10 });
        break;
      case "ArrowLeft":
      case "a":
        if (direction.x === 0) setDirection({ x: -10, y: 0 });
        break;
      case "ArrowRight":
      case "d":
        if (direction.x === 0) setDirection({ x: 10, y: 0 });
        break;
      default:
        break;
    }
  };

  const handleButtonPress = (key) => {
    handleKeyPress({ key });
  };

  const updateSnakePosition = () => {
    const newSnake = [...snake];
    const head = { ...newSnake[0] };
    head.x += direction.x;
    head.y += direction.y;
    newSnake.unshift(head);
    newSnake.pop();
    setSnake(newSnake);
  };

  const checkCollision = () => {
    const head = snake[0];
    const canvas = canvasRef.current;
    if (!canvas) return;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    if (
      head.x < 0 ||
      head.y < 0 ||
      head.x >= canvasWidth ||
      head.y >= canvasHeight
    ) {
      setIsGameOver(true);
      setTimeout(resetGame, 2000);
    }

    if (head.x === food.x && head.y === food.y) {
      growSnake();
      setFood(generateRandomFood());
    }
  };

  const growSnake = () => {
    const newSnake = [...snake];
    const newSnakeImages = [...snakeImages];

    newSnake.push({ ...snake[snake.length - 1] });
    newSnakeImages.push(food.img);

    setSnake(newSnake);
    setSnakeImages(newSnakeImages);

    setRemainingImages((prev) => {
      const newRemainingImages = new Set(prev);
      newRemainingImages.delete(food.img);
      return newRemainingImages;
    });
  };

  const drawGame = (ctx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Draw canvas border
    ctx.strokeStyle = "#f7c859";
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, canvasWidth, canvasHeight);

    // Draw snake with glowing effect
    ctx.shadowColor = "rgba(0, 255, 0, 0.8)";
    ctx.shadowBlur = 15;
    ctx.fillStyle = "rgba(0, 255, 0, 0.6)";

    snake.forEach((segment, index) => {
      if (index > 0 && snakeImages[index - 1]) {
        const img = new Image();
        img.src = images[snakeImages[index - 1]];
        img.onload = () => {
          ctx.drawImage(img, segment.x, segment.y, 20, 20);
        };
      } else {
        ctx.fillRect(segment.x, segment.y, 20, 20);
      }
    });

    ctx.shadowColor = "rgba(0, 0, 0, 0)";

    if (images[food.img]) {
      const img = new Image();
      img.src = images[food.img];
      img.onload = () => {
        ctx.shadowColor = "rgba(255, 215, 0, 0.8)";
        ctx.shadowBlur = 15;
        ctx.drawImage(img, food.x, food.y, 20, 20);
      };
    }
  };

  const generateRandomFood = () => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0, img: null };
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    if (remainingImages.size === 0) {
      setRemainingImages(new Set(Object.keys(images)));
    }

    const remainingArray = Array.from(remainingImages);
    const randomFoodType =
      remainingArray[Math.floor(Math.random() * remainingArray.length)];

    let x, y;
    x = Math.floor((Math.random() * canvasWidth) / 20) * 20;
    y = Math.floor((Math.random() * canvasHeight) / 20) * 20;

    return { x, y, img: randomFoodType };
  };

  const resetGame = () => {
    setSnake([{ x: 50, y: 50 }]);
    setDirection({ x: 10, y: 0 });
    setIsGameOver(false);
    setSnakeImages([]);
    setRemainingImages(new Set(Object.keys(images)));
    setFood(generateRandomFood());
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        className="snake-game-canvas"
        width={window.innerWidth}
        height={window.innerHeight}
      ></canvas>
      {/* Navigation Buttons */}
      <div className="btn-nav">
        <div className="btns-text">The game is already started!</div>
        <div className="btns" onClick={() => handleButtonPress('w')}>W ( &#8593; )</div>
        <div className="btns-text">Keep Learning Keep Growing...</div>
        <div className="btns" onClick={() => handleButtonPress('a')}>A ( &#8592; )</div>
        <div className="btns" onClick={() => handleButtonPress('s')}>S ( &#8595; )</div>
        <div className="btns" onClick={() => handleButtonPress('d')}>D ( &#8594; )</div>
      </div>
    </div>
  );
};

export default SnakeGame;
