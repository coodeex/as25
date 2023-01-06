import { useEffect, useState } from 'react';
import styled from 'styled-components';
import myImage from '../../assets/RunningDonkey.gif';

const DONKEY_HEIGHT = 1395 / 18;
const DONKEY_WIDTH = 1800 / 18;
const GAME_HEIGHT = 500;
const GAME_WIDTH = 700;
const OBSTACLE_HEIGHT = 170;
const OBSTACLE_WIDTH = 30;
const JUMP_SPEED = 22;
const GRAVITY = 1;
const MINIMAL_JUMP_TIME = 3;
const FRAME_RATE = 24;

const donkeyGroundLevel = GAME_HEIGHT - DONKEY_HEIGHT;
const obstacleGroundLevel = donkeyGroundLevel - OBSTACLE_HEIGHT;

export const Game = () => {
  const [donkeyY, setDonkeyY] = useState(donkeyGroundLevel - 10);
  const [obstacleX, setObstacleX] = useState(GAME_WIDTH);
  const [gameRunning, setGameRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [jumped, setJumped] = useState(false);
  const [jumpTime, setJumpTime] = useState(0);

  useEffect(() => {
    if (obstacleX + 5 <= DONKEY_WIDTH && donkeyY - 50 >= obstacleGroundLevel) {
      //some slack
      setGameRunning(false);
    }
  }, [donkeyY, obstacleX]);

  useEffect(() => {
    let xId: NodeJS.Timer;
    if (gameRunning && obstacleX > -OBSTACLE_WIDTH) {
      xId = setInterval(() => {
        setObstacleX(obstacleX - 5);
      }, FRAME_RATE);
      return () => clearInterval(xId);
    } else if (gameRunning) {
      setObstacleX(GAME_WIDTH);
      setScore(score + 1);
    }
  }, [obstacleX, gameRunning, score]);

  useEffect(() => {
    let timeId: NodeJS.Timer;
    if (jumped && donkeyY <= donkeyGroundLevel) {
      timeId = setInterval(() => {
        setJumpTime(jumpTime + 1);
        setDonkeyY(
          // y = y0 - v0t + 1/2*at²
          donkeyGroundLevel -
            JUMP_SPEED * jumpTime +
            (1 / 2) * GRAVITY * Math.pow(jumpTime, 2),
        );
      }, FRAME_RATE);
      return () => clearInterval(timeId);
    }
    if (jumpTime > MINIMAL_JUMP_TIME && donkeyY >= donkeyGroundLevel) {
      setDonkeyY(donkeyGroundLevel);
      setJumped(false);
      setJumpTime(0);
    }
  }, [donkeyY, jumpTime, jumped]);

  const resetGame = () => {
    setDonkeyY(donkeyGroundLevel);
    setObstacleX(GAME_WIDTH);
    setGameRunning(true);
    setScore(0);
  };

  const handleClick = () => {
    if (!gameRunning) resetGame();
    if (donkeyY == donkeyGroundLevel) setJumped(true);
  };

  return (
    <CenterWrapper>
      <GameBox height={GAME_HEIGHT} width={GAME_WIDTH} onClick={handleClick}>
        {/* <Log>
          <pre style={{ whiteSpace: 'pre-wrap' }}>
            {'gameRunning: '}
            {JSON.stringify(gameRunning, null, 2)}
          </pre>
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
  background-image: url(${myImage});
  background-size: cover;
  position: relative;
  top: ${p => p.y}px;
  height: ${p => p.height}px;
  width: ${p => p.width}px;
`;

const GameBox = styled.div<{ height: number; width: number }>`
  height: ${p => p.height}px;
  width: ${p => p.width}px;
  background-color: #b0a2c5;
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
