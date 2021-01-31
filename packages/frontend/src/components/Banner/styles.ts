import styled from 'styled-components';

const getBannerProps = ({ fullSize }) => {
  if (fullSize) {
    return `
        align-items: center;
        height: 448px;
    `;
  }
  return `
      height: 170px;
    `;
};

const getDescriptionProps = ({ fullSize }) => {
  if (fullSize) {
    return `text-align: center;`;
  }

  return `
    padding-top: 40px;
    padding-left: 30px;
  `;
};

export const Container = styled.div`
  position: relative;
`;

export const Banner = styled.div`
  width: 100%;
  background-image: url('/banner.png');
  transition: background-color 0.18s cubic-bezier(0.6, 0, 0.1, 1),
    box-shadow 0.18s cubic-bezier(0.6, 0, 0.1, 1);
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-content: center;

  ${getBannerProps};
`;

export const Description = styled.div`
  ${getDescriptionProps};

  h1 {
    font-size: 2em;
  }

  h1,
  h2 {
    display: block;
    font-weight: 300;
    line-height: 1.3;
    z-index: 1;
    color: white;
  }
`;
