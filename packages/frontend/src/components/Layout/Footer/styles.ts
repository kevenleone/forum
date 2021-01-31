import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgb(235, 235, 235);
  padding: 30px 0 12px;
`;

export const FooterCustom = styled.div`
  clear: both;
  display: flex;
  overflow: hidden;
  width: 100%;
`;

export const FooterBlock = styled.div`
  flex: 1;

  &:first-child {
    flex: 2;
  }
`;

export const TextSpaced = styled.p`
  flex: 1;
`;

export const FooterStatistics = styled.div`
  border-top: 1px solid lightgray;
  padding: 20px;
  display: flex;
`;
