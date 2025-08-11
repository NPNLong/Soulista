import React, { useEffect, useRef, useState } from "react";

export default function DinoGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [score, setScore] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isDucking, setIsDucking] = useState(false);
  const [rewardPoints, setRewardPoints] = useState(0);

  const isRunningRef = useRef(false);
  const animationId = useRef<number | null>(null);

  const dino = useRef({ x: 50, y: 150, width: 44, height: 44, velocityY: 0 });
  const gravity = 0.8;
  const obstacles = useRef<{ x: number; width: number; height: number; y: number }[]>([]);
  const frame = useRef(0);
  const obstacleSpeed = useRef(6);
  const dinoFrame = useRef(0);

  const jump = () => {
    if (dino.current.y >= 150) {
      dino.current.velocityY = -15;
    }
  };

  const resetGame = () => {
    setScore(0);
    obstacles.current = [];
    dino.current.y = 150;
    dino.current.velocityY = 0;
    frame.current = 0;
    obstacleSpeed.current = 6;
    setIsRunning(true);
    isRunningRef.current = true;
  };

  const drawGround = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "#C2B280";
    ctx.fillRect(0, 190, 800, 10);
  };

  const drawDino = (ctx: CanvasRenderingContext2D) => {
    ctx.save();
    ctx.shadowColor = "rgba(0,0,0,0.3)";
    ctx.shadowBlur = 5;
    ctx.shadowOffsetY = 3;

    ctx.fillStyle = "#1506ebff";
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;

    let height = isDucking ? dino.current.height / 2 : dino.current.height;
    let yPos = isDucking ? dino.current.y + dino.current.height / 2 : dino.current.y;
    if (frame.current % 10 === 0) dinoFrame.current = (dinoFrame.current + 1) % 2;
    const offset = dinoFrame.current === 0 ? 0 : 4;

    ctx.beginPath();
    ctx.rect(dino.current.x, yPos + offset, dino.current.width, height - offset);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  };

  const drawObstacle = (ctx: CanvasRenderingContext2D, ob: any) => {
    ctx.save();
    ctx.shadowColor = "rgba(0,0,0,0.2)";
    ctx.shadowBlur = 4;
    ctx.shadowOffsetY = 2;

    ctx.fillStyle = "#2E7D32";
    ctx.beginPath();
    ctx.rect(ob.x, ob.y, ob.width, ob.height);
    ctx.fill();
    ctx.restore();
  };

  const checkCollision = (ob: any) => {
    let dinoHeight = isDucking ? dino.current.height / 2 : dino.current.height;
    let dinoY = isDucking ? dino.current.y + dino.current.height / 2 : dino.current.y;
    return (
      dino.current.x < ob.x + ob.width &&
      dino.current.x + dino.current.width > ob.x &&
      dinoY + dinoHeight > ob.y &&
      dinoY < ob.y + ob.height
    );
  };

  const updateGame = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "#E0F7FA";
    ctx.fillRect(0, 0, 800, 200);

    drawGround(ctx);

    // Dino physics
    dino.current.y += dino.current.velocityY;
    dino.current.velocityY += gravity;
    if (dino.current.y > 150) dino.current.y = 150;

    drawDino(ctx);

    // Spawn cactus
    if (frame.current % 90 === 0) {
      const cactusHeight = 20 + Math.random() * 30;
      obstacles.current.push({
        x: 800,
        width: 20,
        height: cactusHeight,
        y: 190 - cactusHeight,
      });
    }

    for (let ob of obstacles.current) {
      ob.x -= obstacleSpeed.current;
      drawObstacle(ctx, ob);

      if (checkCollision(ob)) {
        setIsRunning(false);
        isRunningRef.current = false;
        ctx.fillStyle = "#000";
        ctx.font = "30px Arial";
        ctx.fillText("GAME OVER", 300, 100);
        return;
      }
    }

    obstacles.current = obstacles.current.filter((ob) => ob.x > -50);

    frame.current++;
    setScore((prev) => {
      const newScore = prev + 1;

      // Check reward thresholds
      if (newScore === 5000) setRewardPoints((r) => r + 50);
      if (newScore === 10000) setRewardPoints((r) => r + 100);

      return newScore;
    });

    if (frame.current % 500 === 0) {
      obstacleSpeed.current += 0.5;
    }
  };

  const gameLoop = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    updateGame(ctx);

    if (isRunningRef.current) {
      animationId.current = requestAnimationFrame(gameLoop);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        if (!isRunningRef.current) resetGame();
        else jump();
      } else if (e.code === "ArrowDown") setIsDucking(true);
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === "ArrowDown") setIsDucking(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    if (isRunning) {
      const ctx = canvasRef.current?.getContext("2d");
      ctx?.clearRect(0, 0, 800, 200);
      animationId.current = requestAnimationFrame(gameLoop);
    } else {
      if (animationId.current) cancelAnimationFrame(animationId.current);
    }
  }, [isRunning]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Dino Game</h1>
      <div className="flex gap-8">
        {/* Game bên trái */}
        <div>
          <canvas
            ref={canvasRef}
            width={800}
            height={200}
            className="border border-gray-400 bg-white rounded shadow"
            onClick={() => (isRunningRef.current ? jump() : resetGame())}
          />
          <div className="flex items-center justify-start gap-4 mt-2 text-xl">
            <div>Điểm: {score}</div>
            {!isRunning && (
              <button
                onClick={resetGame}
                className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 shadow"
              >
                Chơi lại
              </button>
            )}
          </div>
          <div className="mt-2 text-lg text-gray-700">
            Điểm tích luỹ: {rewardPoints}
          </div>
        </div>

        {/* Hướng dẫn chơi bên phải */}
        <div className="w-64 p-4 bg-white rounded shadow border border-gray-300">
          <h2 className="text-lg font-bold mb-2">Hướng dẫn chơi</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Nhấn <b>Space</b> để nhảy</li>
            <li>Giữ <b>Arrow Down</b> để cúi người</li>
            <li>Nhấp vào màn hình để bắt đầu lại</li>
            <li>Đạt 5000 điểm được +50 điểm tích luỹ</li>
            <li>Đạt 10000 điểm được +100 điểm tích luỹ</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
