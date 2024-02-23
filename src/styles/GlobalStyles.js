import { css } from '@emotion/react';

export const GlobalStyles = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  button {
  
    border: none;
 
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    display: block;
  }
`;
