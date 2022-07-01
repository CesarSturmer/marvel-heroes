import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 24px;
  height: 64px;
  width: 50%;

  margin-top: 30px;

  > svg {
    margin: 0 20px;
  }

  @media (${({ theme }) => theme.breakpoints.desktop}) {
    width: 80%;
  }

  @media (${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 24px;
  border: none;
  font-size: 16px;
  width: 100%;
  height: 100%;
  outline: none;

  & ::placeholder {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
