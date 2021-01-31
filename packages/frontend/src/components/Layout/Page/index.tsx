import React from 'react';
import styled from 'styled-components';

import Banner from '../../Banner';
import Topbar from '../../Topbar';
import Footer from '../Footer';
import Sidebar from '../Sidebar';

const Content = styled.div`
  padding: 60px;
  display: flex;
`;

const Container = styled.div`
  display: flex;
`;

export default function index({ children }) {
  return (
    <div>
      <Topbar />
      <Banner />
      <Content>
        <Container className="container">
          <div style={{ flex: 1 }}>{children}</div>
          <Sidebar />
        </Container>
      </Content>
      <Footer />
    </div>
  );
}
