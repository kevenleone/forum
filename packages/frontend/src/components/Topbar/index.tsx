import { useEffect, useState } from 'react';

import {
  Container,
  ContainerIndex,
  Item,
  List,
  Logo,
  Nav,
  SiteHeader,
} from './styles';

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
    <Container>
      <ContainerIndex transparent={scrollTop < 50}>
        <SiteHeader>
          <Logo>Board Index</Logo>
          <Nav>
            <List>
              <Item>Menu</Item>
              <Item>Login</Item>
            </List>
          </Nav>
        </SiteHeader>
      </ContainerIndex>
    </Container>
  );
};

export default Topbar;
