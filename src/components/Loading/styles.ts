import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .blob-1,
  .blob-2 {
    width: 70px;
    height: 70px;
    position: absolute;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .blob-1 {
    left: 20%;
    animation: osc-l 2.5s ease infinite;
  }

  .blob-2 {
    left: 80%;
    animation: osc-r 2.5s ease infinite;
    background: #fdd201;
  }

  @keyframes osc-l {
    0% {
      left: 20%;
    }
    50% {
      left: 50%;
    }
    100% {
      left: 20%;
    }
  }
  @keyframes osc-r {
    0% {
      left: 80%;
    }
    50% {
      left: 50%;
    }
    100% {
      left: 80%;
    }
  }
`;
