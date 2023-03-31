import React from 'react';
import styled from 'styled-components';

const Rectangle = styled.div`
  position: relative;
  width: 94px;
  height: 10px;
  background-color: #BAE948;
  border-radius: 50px;
  box-shadow: 0px 0px 47.376px #5E6E26,
              0px 0px 27.072px #5E6E26,
              0px 0px 15.792px #5E6E26,
              0px 0px 7.896px #5E6E26,
              0px 0px 2.256px #5E6E26,
              0px 0px 1.128px #5E6E26;
`;

const Ellipse = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  background-color: #BAE948;
  border-radius: 50%;
  margin-left: 10px;
  box-shadow: 0px 0px 5.04px #5E6E26,
              0px 0px 2.88px #5E6E26,
              0px 0px 1.68px #5E6E26,
              0px 0px 0.84px #5E6E26,
              0px 0px 0.24px #5E6E26,
              0px 0px 0.12px #5E6E26;
`;

const RectangleAndCircles = () => {
  return (
    <>
      <Rectangle />
      <Ellipse style={{left: ""}} />
      <Ellipse style={{left: ""}} />
    </>
  );
};

export default RectangleAndCircles;