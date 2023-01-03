import { useEffect, useState } from 'react';
import styled from 'styled-components';

const DONKEY_HEIGHT = 30;
const DONKEY_WIDTH = 30;
const GAME_HEIGHT = 500;
const GAME_WIDTH = 700;
const JUMP_HEIGHT = 200;
const OBSTACLE_HEIGHT = 160;
const OBSTACLE_WIDTH = 30;

const donkeyGroundLevel = GAME_HEIGHT - DONKEY_HEIGHT;
const obstacleGroundLevel = donkeyGroundLevel - OBSTACLE_HEIGHT;

export const Game = () => {
  const [donkeyY, setDonkeyY] = useState(donkeyGroundLevel - 10);
  const [goingUp, setGoingUp] = useState(false);
  const [obstacleX, setObstacleX] = useState(GAME_WIDTH);
  const [gameRunning, setGameRunning] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (donkeyY < JUMP_HEIGHT) setGoingUp(false);
    if (donkeyY > donkeyGroundLevel) setDonkeyY(donkeyGroundLevel);
  }, [donkeyY]);

  useEffect(() => {
    if (obstacleX <= DONKEY_WIDTH && donkeyY >= obstacleGroundLevel) {
      setGameRunning(false);
    }
  }, [obstacleX]);

  useEffect(() => {
    let xId: NodeJS.Timer;
    if (gameRunning && obstacleX > -OBSTACLE_WIDTH) {
      xId = setInterval(() => {
        setObstacleX(obstacleX - 5);
      }, 24);
      return () => clearInterval(xId);
    } else if (gameRunning) {
      setObstacleX(GAME_WIDTH);
      setScore(score + 1);
    }
  }, [obstacleX, gameRunning]);

  useEffect(() => {
    let downId: NodeJS.Timer;
    let upId: NodeJS.Timer;
    if (donkeyY < donkeyGroundLevel && !goingUp) {
      downId = setInterval(() => {
        setDonkeyY(Math.min(donkeyY + 10, donkeyGroundLevel));
      }, 24);
      return () => clearInterval(downId);
    } else if (goingUp && gameRunning) {
      upId = setInterval(() => {
        setDonkeyY(donkeyY - 12);
      }, 24);
      return () => clearInterval(upId);
    }
  }, [donkeyY, GAME_HEIGHT, goingUp, gameRunning]);

  const resetGame = () => {
    setDonkeyY(donkeyGroundLevel);
    setGoingUp(false);
    setObstacleX(GAME_WIDTH);
    setGameRunning(true);
    setScore(0);
  };

  const handleClick = () => {
    if (!gameRunning) resetGame();
    if (donkeyY == donkeyGroundLevel) setGoingUp(true);
  };

  return (
    <CenterWrapper>
      <GameBox height={GAME_HEIGHT} width={GAME_WIDTH} onClick={handleClick}>
        {/* <Log>
          <pre style={{ whiteSpace: 'pre-wrap' }}>
            {'obstacleX: '}
            {JSON.stringify(obstacleX, null, 2)}
          </pre>
          <pre style={{ whiteSpace: 'pre-wrap' }}>
            {'donkeyY: '}
            {JSON.stringify(donkeyY, null, 2)}
          </pre>
          <pre style={{ whiteSpace: 'pre-wrap' }}>
            {'obstacleGroundLevel: '}
            {JSON.stringify(obstacleGroundLevel, null, 2)}
          </pre>
        </Log> */}
        <Donkey height={DONKEY_HEIGHT} width={DONKEY_WIDTH} y={donkeyY} />
        <Obstacle
          height={OBSTACLE_HEIGHT}
          width={OBSTACLE_WIDTH}
          top={obstacleGroundLevel}
          x={obstacleX}
        />
      </GameBox>
      {!gameRunning && <ClickToStart>Click to start</ClickToStart>}
      <Score>{score}</Score>
    </CenterWrapper>
  );
};

const Score = styled.span`
  align-self: flex-start;
  ${p => p.theme.typography.title1};
`;

const ClickToStart = styled.span``;

const Log = styled.div`
  position: absolute;
`;

const Obstacle = styled.div<{ height: number; width: number; top: number; x: number }>`
  position: relative;
  top: ${p => p.top}px;
  background-color: #545353;
  left: ${p => p.x}px;
  height: ${p => p.height}px;
  width: ${p => p.width}px;
`;

const Donkey = styled.div<{ height: number; width: number; y: number }>`
  position: relative;
  top: ${p => p.y}px;
  background-color: #6717a0;
  border-radius: 50%;
  height: ${p => p.height}px;
  width: ${p => p.width}px;
`;

const GameBox = styled.div<{ height: number; width: number }>`
  height: ${p => p.height}px;
  width: ${p => p.width}px;
  background-color: #ccc;
  overflow: hidden;
`;

const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  & span {
    position: absolute;
  }
`;
