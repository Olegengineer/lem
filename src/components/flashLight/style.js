import styled from 'styled-components';

export const Styled = styled.div`
  .flashlight {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    background-repeat: no-repeat;
    pointer-events: none;
    width: 100vw;
    height: 100vh;
    z-index: 1;
  }
  .quote {
    width: 80vw;
    line-height: 140%;
  }
  .author {
    width: 80vw;
    line-height: 140%;
    font-size: 0.8em;
    font-style: italic;
  }
`