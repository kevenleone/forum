import Link from 'next/link';
import React from 'react';
import { FaComment } from 'react-icons/fa';
import styled from 'styled-components';

const Container = styled.div`
  border-color: #eaeaea;
  background-color: #fff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.03);
`;

const Icon = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 36px;
`;

const Header = styled.div`
  padding: 15px;
  background-color: #455a64;
`;

const Text = styled.span`
  color: #fafafa;
  font-weight: bold;
`;

const Post = styled.li`
  display: flex;
  width: 100%;
  align-content: center;
  align-items: center;
  margin-bottom: 30px;
  border-bottom: 1px solid #eaeaea;

  div {
    flex: 1;
  }

  div:first-child {
    flex-grow: unset;
    flex-basis: 40px;
  }

  div:nth-child(3) {
    flex-grow: unset;
    flex-basis: 80px;
  }

  div:nth-child(2) {
    padding: 0 10px;
    flex: 4;
  }

  :hover {
    ${Icon} {
      transition: background-color 0.18s linear,
        box-shadow 0.18s cubic-bezier(0.6, 0, 0.1, 1);
      background-color: #1976d2;
      border-radius: 5px;

      svg {
        color: white;
      }
    }
  }
`;

const Posts = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0px 30px;

  ${Post}:last-child {
    border-bottom: none;
  }
`;

export default function index() {
  return (
    <Container>
      <Header>
        <Text>Main Category</Text>
      </Header>
      <Posts>
        <Post>
          <Icon>
            <FaComment />
          </Icon>
          <div>
            <Link href="/category/informations">Informations</Link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div>
            <p>1 Topics</p>
            <p>1 Posts</p>
          </div>
          <div>
            <p>
              <Link href="/">Welcome to ReactJS</Link>
            </p>
            <p>
              by: <Link href="/">ADMIN</Link>
            </p>
            <time dateTime="">24 February 2019, 3:16</time>
          </div>
        </Post>
      </Posts>
    </Container>
  );
}
