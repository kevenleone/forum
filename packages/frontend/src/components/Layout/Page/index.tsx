import React from 'react';
import styled from 'styled-components';

import Banner from '../../Banner';
import Topbar from '../../Topbar';
import Footer from '../Footer';
import Sidebar from '../Sidebar';

const Content = styled.div`
  padding: 20px 0;
  display: flex;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
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
