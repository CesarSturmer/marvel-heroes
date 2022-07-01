import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 0 100px;

  @media (${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 50px;
  }
`;

export const Title = styled.h1`
  font-size: 34px;
  text-align: center;
  margin-top: 40px;
  font-weight: 700;
  letter-spacing: 3px;
  color: ${({ theme }) => theme.text.primary};

  @media (${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 28px;
  }
`;

export const SubTitle = styled.h3`
  font-size: 24px;
  text-align: center;
  font-weight: 300;
  margin-top: 20px;
  color: ${({ theme }) => theme.text.secondary};
`;

export const ContainerFilters = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 250px);
  grid-template-rows: auto;
  justify-items: baseline;
  justify-content: center;
  grid-template-areas: 'firtsSpan firtsSpan  filters filters';
  gap: 50px;
  align-items: center;
  padding: 0 70px;

  margin-top: 50px;

  span {
    grid-area: firtsSpan;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 200px);
    grid-template-areas: 'firtsSpan  filters filters';
    padding: 0 30px;
    width: 100%;
    justify-content: space-around;
  }

  @media (${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: start;
    padding: 0;
  }
`;
