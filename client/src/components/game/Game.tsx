import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import RunningDonkey from '../../assets/RunningDonkey.gif';
import StaticDonkey from '../../assets/Donkey/Aasi6.png';
import bg from '../../assets/BG2.gif';
import bgStatic from '../../assets/BGStatic.png';

const DONKEY_HEIGHT = 1395 / 18;
const DONKEY_WIDTH = 1700 / 18;
const DONKEY_IMAGES = { runningDonkey: RunningDonkey, staticDonkey: StaticDonkey };
const BG_IMAGES = { movingBG: bg, staticBG: bgStatic };
const GAME_HEIGHT = 500;
const GAME_WIDTH = 700;
const DONKEY_LEFT_PADDING = 100;
const OBSTACLE_HEIGHT = 120;
const OBSTACLE_WIDTH = 30;
const COLLISION_FLEX_X = 5; //How much the donkey can be on top of obstacle in x before collision
const COLLISION_FLEX_Y = 10; //How much the donkey can be on top of obstacle in y before collision
const JUMP_SPEED = 20;
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
  const [donkeyImg, setDonkeyImg] = useState(DONKEY_IMAGES.runningDonkey);
  const [bgImg, setBgImg] = useState(BG_IMAGES.movingBG);

  useEffect(() => {
    if (
      obstacleX <= DONKEY_LEFT_PADDING + DONKEY_WIDTH - COLLISION_FLEX_X &&
      obstacleX > DONKEY_LEFT_PADDING - OBSTACLE_WIDTH &&
      donkeyY - COLLISION_FLEX_Y >= obstacleGroundLevel
    ) {
      setGameRunning(false);
      setDonkeyImg(DONKEY_IMAGES.staticDonkey);
      setBgImg(BG_IMAGES.staticBG);
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
    if (jumped && donkeyY <= donkeyGroundLevel && gameRunning) {
      timeId = setInterval(() => {
        setJumpTime(jumpTime + 1);
        setDonkeyY(
          // y = y0 - v0t + 1/2*at²
          donkeyGroundLevel -
            JUMP_SPEED * jumpTime +
            0.5 * GRAVITY * Math.pow(jumpTime, 2),
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
    setDonkeyImg(DONKEY_IMAGES.runningDonkey);
    setBgImg(BG_IMAGES.movingBG);
    setScore(0);
  };

  const handleClick = () => {
    if (!gameRunning) resetGame();
    if (donkeyY == donkeyGroundLevel) setJumped(true);
  };

  return (
    <CenterWrapper>
      <GameBox height={GAME_HEIGHT} width={GAME_WIDTH} onClick={handleClick} img={bgImg}>
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
        <Donkey
          height={DONKEY_HEIGHT}
          width={DONKEY_WIDTH}
          y={donkeyY}
          img={donkeyImg}
          padding={DONKEY_LEFT_PADDING}
        />
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
  background-color: #4b0877;
  left: ${p => p.x}px;
  height: ${p => p.height}px;
  width: ${p => p.width}px;
`;

const Donkey = styled.div<{
  height: number;
  width: number;
  y: number;
  img: string;
  padding: number;
}>`
  background-image: url(${p => p.img});
  background-size: cover;
  position: relative;
  top: ${p => p.y}px;
  left: ${p => p.padding}px;
  height: ${p => p.height}px;
  width: ${p => p.width}px;
`;

// const bgAnimation = keyframes`
//  0% { background-color: 	'#800000' }
//  30% { background-color: 	'	#FF0000' }
//  40% { background-color: 	'#800080' }
//  100% { background-color: 	'#FF00FF' }
// `

const GameBox = styled.div<{ height: number; width: number; img: string }>`
  height: ${p => p.height}px;
  width: ${p => p.width}px;
  background-image: url(${p => p.img});
  background-size: cover;
  background-position: -4px -50px;
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
