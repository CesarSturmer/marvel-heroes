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
`;

export const WrapperSpanAndSVG = styled.div`
  display: flex;
  align-items: center;

  > svg {
    margin-right: 5px;
  }
`;
