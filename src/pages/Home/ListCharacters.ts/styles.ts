import styled from 'styled-components';

export const Container = styled.div`
  padding: 70px;
  display: grid;
  grid-template-columns: repeat(4, 250px);
  grid-template-rows: auto;
  justify-items: stretch;
  justify-content: center;
  gap: 50px;

  @media (${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 200px);
    padding: 30px;
    justify-content: space-around;
    width: 100%;
  }

  @media (${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 200px);
    gap: 10px;
  }

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 20px;
    justify-content: space-around;
    align-items: stretch;
  }
`;
