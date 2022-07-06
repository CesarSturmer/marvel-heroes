import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  grid-area: filters;
`;
export const ContainerSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 500px;
  width: 100%;

  @media (${({ theme }) => theme.breakpoints.desktop}) {
    min-width: auto;
  }

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    justify-content: start;
  }
`;
type WrapperSpanAndSVGProps = {
  aplyCursorPointer?: boolean;
};

export const WrapperSpanAndSVG = styled.div<WrapperSpanAndSVGProps>`
  display: flex;
  align-items: center;

  cursor: ${({ aplyCursorPointer }) => aplyCursorPointer && 'pointer'};

  > svg {
    margin-right: 5px;
  }
`;
