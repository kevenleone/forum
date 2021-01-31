import styled from 'styled-components';

import Sidebar from '../components/Layout/Sidebar';
import Category from '../components/Post/Category';

const Container = styled.div`
  display: flex;
`;

export default function Home() {
  return (
    <Container className="container">
      <div style={{ flex: 1 }}>
        <Category />
        <Category />
        <Category />
      </div>
      <Sidebar />
    </Container>
  );
}
