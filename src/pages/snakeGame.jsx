import React, { useEffect, useState, useRef } from "react";
import "../styles/SnakeGame.css";

const SnakeGame = () => {
  const [snake, setSnake] = useState([{ x: 50, y: 50 }]);
  const [direction, setDirection] = useState({ x: 10, y: 0 });
  const [food, setFood] = useState({ x: 200, y: 200 });
  const [isGameOver, setIsGameOver] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

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
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    if (
      head.x < 10 ||
      head.y < 10 ||
      head.x >= canvasWidth - 10 ||
      head.y >= canvasHeight - 10
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
    newSnake.push({ ...snake[snake.length - 1] });
    setSnake(newSnake);
  };

  const drawGame = (ctx) => {
    const canvas = canvasRef.current;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    ctx.strokeStyle = "#f7c859";
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, canvasWidth - 2, canvasHeight - 2);

    ctx.fillStyle = "#00ff00";
    snake.forEach((segment) => {
      ctx.fillRect(segment.x, segment.y, 10, 10);
    });

    ctx.fillStyle = "#ff0000";
    ctx.fillRect(food.x, food.y, 10, 10);
  };

  const generateRandomFood = () => {
    const canvas = canvasRef.current;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const safeZone = 50;

    let x, y;
    do {
      x = Math.floor((Math.random() * (canvasWidth - 20 - safeZone)) / 10) * 10;
      y = Math.floor((Math.random() * (canvasHeight - 20 - safeZone)) / 10) * 10;
    } while (x < 10 || x > canvasWidth - 20 || y < 10 || y > canvasHeight - 20);

    return { x, y };
  };

  const resetGame = () => {
    setSnake([{ x: 50, y: 50 }]);
    setDirection({ x: 10, y: 0 });
    setIsGameOver(false);
  };

  return (
    <canvas
      ref={canvasRef}
      className="snake-game-canvas"
      width="800"
      height="600"
    ></canvas>
  );
};

export default SnakeGame;
