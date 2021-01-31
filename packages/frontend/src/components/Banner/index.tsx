import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;

const Banner = styled.div`
  width: 100%;
  height: 448px;
  background-image: url('/banner.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-self: center;
  align-items: center;
  justify-content: center;
`;

const Description = styled.div`
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  text-align: center;

  h1 {
    font-size: 2em;
  }

  h1,
  h2 {
    display: block;
    font-weight: 300;
    line-height: 1.3;
    position: relative;
    z-index: 1;
    color: white;
  }
`;

export default function index() {
  return (
    <Container>
      <Banner>
        <Description>
          <h1>Gramziu Themes Preview</h1>
          <h2>Let's take a look</h2>
        </Description>
      </Banner>
    </Container>
  );
}
