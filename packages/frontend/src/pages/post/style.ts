import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
`;

export const Article = styled.article`
  background-color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const ArticleHeader = styled.div`
  border-bottom: 1px solid lightgray;
  padding: 10px 0;
  display: flex;

  span:first-child {
    flex: 1;
  }
`;

export const ArticleBody = styled.div`
  margin: 20px 0;
  clear: both;
  display: inline-block;
  font-size: 1em;
  line-height: 1.6154;
  min-height: 60px;
  width: 100%;
  word-wrap: break-word;
`;

export const Author = styled.div`
  margin-top: 30px;
  margin-right: 30px;
  text-align: center;
`;

export const Avatar = styled.img`
  width: 66px;
  height: 66px;
  border-radius: 100%;
  object-fit: cover;
`;

export const Nickname = styled.span``;

export const ArticlePost = styled.div``;
