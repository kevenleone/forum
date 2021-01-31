import { useEffect, useState } from 'react';
import styled from 'styled-components';

function handleContainerProps({ transparent }) {
  if (transparent) {
    return `
    background-color: transparent;
    `;
  }

  return `
      background-color: #1976d2;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.42);
  `;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 10;
  transition: background-color 0.18s linear,
    box-shadow 0.18s cubic-bezier(0.6, 0, 0.1, 1);
  ${handleContainerProps}
`;

const Nav = styled.nav`
  display: flex;
`;

const List = styled.ul`
  list-style: none;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
`;

const Item = styled.li`
  margin-left: 10px;
`;

const Logo = styled.a``;

const Topbar = (): React.ReactElement => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const scrollHandler = (e) => {
      setScrollTop(e.target.scrollingElement.scrollTop);
    };

    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <Container transparent={scrollTop < 50}>
      <Logo>Abc</Logo>
      <Nav>
        <List>
          <Item>a</Item>
          <Item>a</Item>
        </List>
      </Nav>
    </Container>
  );
};

export default Topbar;
