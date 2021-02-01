import Link from 'next/link';
import React from 'react';
import { FaComment } from 'react-icons/fa';

import {
  Container,
  Header,
  Icon,
  IconWrapper,
  Post,
  PostInfo,
  Posts,
  Text,
} from './styles';

export default function index({ name, topics = [] }) {
  return (
    <Container>
      <Header>
        <Text>{name}</Text>
      </Header>
      {topics.map((topic, index) => (
        <Posts key={index}>
          <Post>
            <IconWrapper>
              {topic.icon ? <Icon src={topic.icon} /> : <FaComment />}
            </IconWrapper>
            <PostInfo>
              <Link href="/category/informations">{topic.name}</Link>
              <p>{topic.description}</p>
            </PostInfo>
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
      ))}
    </Container>
  );
}
