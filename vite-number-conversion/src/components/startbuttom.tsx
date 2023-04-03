import React, { useState } from 'react';
import styled from 'styled-components';
import startButtonImage from '/Startbutton.svg';

const StartButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  background-color: #2D3142;
  width: 130px;
  height: 120px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-bottom: 30px;

  :hover {
    transform: scale(1.05);
  }

  :active {
    transform: scale(0.95);
  }
`;

const StartButtonImage = styled.img`
  width: 200px;
  height: 170px;
`;

const Start = () => {
  const [webSocket, setWebSocket] = useState<WebSocket | null>(null);

  const handleClick = () => {
    if (webSocket) {
      webSocket.send('Button clicked!');
    }
  };

  const handleWebSocketOpen = () => {
    console.log('WebSocket connection opened');
  };

  const handleWebSocketMessage = (event: MessageEvent) => {
    console.log(`Received message: ${event.data}`);
  };

  const handleWebSocketError = (event: Event) => {
    console.log(`WebSocket error: ${event}`);
  };

  const handleWebSocketClose = (event: CloseEvent) => {
    console.log('WebSocket connection closed');
  };

  const handleWebSocketInit = () => {
    // const ws = new WebSocket('ws://192.168.1.91:5173'); // replace with the IP address of your ESP32 WebSocket server
    const ws = new WebSocket('wss://lovely-tennis-robot.vercel.app/'); //remote server
    ws.addEventListener('open', handleWebSocketOpen);
    ws.addEventListener('message', handleWebSocketMessage);
    ws.addEventListener('error', handleWebSocketError);
    ws.addEventListener('close', handleWebSocketClose);
    setWebSocket(ws);
  };

  return (
    <StartButtonWrapper onClick={handleClick}>
      <StartButtonImage src={startButtonImage} alt="Start" onLoad={handleWebSocketInit} />
    </StartButtonWrapper>
  );
};

export default Start;