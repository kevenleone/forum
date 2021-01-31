import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300&display=swap');

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    text-rendering: optimizeLegibility;
    color: #5A5A5A;
  }

  p, a, span {
    font-size: 14px;
  }

  h5 {
    font-size: 17px;
  }

  a {
    color: #5A5A5A;
    font-weight: 600;
    position: relative;
    z-index: 1;
  }

  a:hover {
    color: #1976D2;
  }

  a, a:hover, a:visited {
    text-decoration: none;
  }

  .container {
      margin: 0 auto;
      max-width: 1200px;
      padding: 0 18px;
    }
    
    .flex {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 40px;
      margin-left: -12px;
    }
    .column {
      box-sizing: border-box;
      margin-bottom: 12px;
      margin-left: 12px;
      background: #000;
    }
    .column-content {
      padding: 20px;
      color: #fff;
    }

    .col2 {
        width: calc(50% - 12px);
    }
    .col3 {
        width: calc(33.333% - 12px);
    }        
    .col4 {
        width: calc(25% - 12px);
    }
`;

export const theme = {
  colors: {
    background: '#F8F8F8',
    primary: '#0070f3',
  },
};
