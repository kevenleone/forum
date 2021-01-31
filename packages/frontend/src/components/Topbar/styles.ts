import Link from 'next/link';
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

export const Container = styled.div`
  height: 56px;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const ContainerIndex = styled.div`
  ${handleContainerProps}
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 4 !important;
  transition: background-color 0.18s cubic-bezier(0.6, 0, 0.1, 1),
    box-shadow 0.18s cubic-bezier(0.6, 0, 0.1, 1);
`;

export const SiteHeader = styled.div`
  color: #fafafa;

  height: 56px;
  line-height: 56px;
  min-height: 56px;
  position: relative;

  margin: 0 auto;
  max-width: 1200px;
  padding: 0 18px;

  a {
    color: #fafafa !important;
  }
`;

export const Nav = styled.nav`
  display: initial;
`;

export const List = styled.ul`
  margin: 0;
  float: right;
  list-style: none;
  margin-left: 18px;

  list-style: none;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
`;

export const Item = styled.li`
  margin-left: 10px;
`;

export const Logo = styled(Link).attrs({ href: '/' })``;
