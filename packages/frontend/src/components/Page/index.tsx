import React from 'react';
import styled from 'styled-components';

import Banner from '../Banner';
import Topbar from '../Topbar';

const Container = styled.div`
  padding: 60px;
`;

export default function index({ children }) {
  return (
    <div>
      <Topbar />
      <Banner />
      <Container>{children}</Container>
    </div>
  );
}
