import { useRouter } from 'next/router';
import React from 'react';

import { Banner, Container, Description } from './styles';

export default function index() {
  const { pathname } = useRouter();
  const fullSize = pathname === '/';

  return (
    <Container>
      <Banner fullSize={fullSize}>
        <Description fullSize={fullSize}>
          {fullSize && <h1>Gramziu Themes Preview</h1>}
          <div className="container">
            <h2>Let's take a look</h2>
          </div>
        </Description>
      </Banner>
    </Container>
  );
}
