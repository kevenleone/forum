import styled from 'styled-components';

export const Container = styled.div`
  border-color: #eaeaea;
  background-color: #fff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.03);
`;

export const IconWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 36px;
`;

export const Icon = styled.img`
  width: 32px;
  height: 32px;
`;

export const Header = styled.div`
  padding: 15px;
  background-color: #455a64;
`;

export const Text = styled.span`
  color: #fafafa;
  font-weight: bold;
`;

export const Post = styled.li`
  display: flex;
  width: 100%;
  align-content: center;
  align-items: center;
  border-bottom: 1px solid lightgray !important;

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

  &:last-child {
    border-bottom: none;
  }

  :hover {
    ${IconWrapper} {
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

export const PostInfo = styled.div`
  a {
    color: black;
  }
`;

export const Posts = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0px 30px;

  ${Post}:last-child {
    border-bottom: none;
  }
`;
