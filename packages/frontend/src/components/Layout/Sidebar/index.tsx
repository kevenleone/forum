import Link from 'next/link';
import React from 'react';
import { FaComments } from 'react-icons/fa';
import styled from 'styled-components';

const Container = styled.div`
  flex-basis: 250px;
  margin-left: 20px;
`;

const Title = styled.p`
  font-weight: bold;
`;

const Box = styled.div`
  font-size: 1.3em;
  background-color: white;
  padding: 5px 18px 18px;
  margin-bottom: 20px;
`;

const WrittenBy = styled.p`
  color: rgb(173, 173, 173);
`;

const Topic = styled.div``;

export default function index() {
  return (
    <Container>
      <Box>
        <Title>
          <FaComments style={{ marginRight: 10 }} />
          Recent Topics
        </Title>
        <Topic>
          <Link href="https://preview.gramziu.com/phpbb/viewtopic.php?style=5&amp;t=1&amp;p=1#p1">
            Welcome to phpBB3
          </Link>
          <WrittenBy>by Admin in Informations </WrittenBy>
        </Topic>
        <Topic>
          <Link href="https://preview.gramziu.com/phpbb/viewtopic.php?style=5&amp;t=1&amp;p=1#p1">
            Welcome to phpBB3
          </Link>
          <WrittenBy>by Admin in Informations </WrittenBy>
        </Topic>
        <Topic>
          <Link href="https://preview.gramziu.com/phpbb/viewtopic.php?style=5&amp;t=1&amp;p=1#p1">
            Welcome to phpBB3
          </Link>
          <WrittenBy>by Admin in Informations </WrittenBy>
        </Topic>
      </Box>

      <Box>
        <Title>
          <FaComments style={{ marginRight: 10 }} />
          Theme Variant
        </Title>
        <Topic>
          <Link href="https://preview.gramziu.com/phpbb/viewtopic.php?style=5&amp;t=1&amp;p=1#p1">
            Welcome to phpBB3
          </Link>
          <WrittenBy>by Admin in Informations </WrittenBy>
        </Topic>
        <Topic>
          <Link href="https://preview.gramziu.com/phpbb/viewtopic.php?style=5&amp;t=1&amp;p=1#p1">
            Welcome to phpBB3
          </Link>
          <WrittenBy>by Admin in Informations </WrittenBy>
        </Topic>
        <Topic>
          <Link href="https://preview.gramziu.com/phpbb/viewtopic.php?style=5&amp;t=1&amp;p=1#p1">
            Welcome to phpBB3
          </Link>
          <WrittenBy>by Admin in Informations </WrittenBy>
        </Topic>
      </Box>
    </Container>
  );
}
