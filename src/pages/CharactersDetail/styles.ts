import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundDetailHero};

  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 50px;
`;

export const WraperHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    justify-content: start;
    width: 65%;
  }

  > input {
    justify-content: stretch;
    width: 100%;
  }
  @media (${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 50px;
  }

  @media (${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0;
    flex-direction: column;
  }
`;

type WrapperSectionAndIMGProps = {
  name: string;
};

export const WrapperSectionAndIMG = styled.div<WrapperSectionAndIMGProps>`
  min-height: calc(100vh - 120px - 64px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  &:after {
    content: '${(props) => props.name}';
    position: absolute;

    font-size: 600px;
    color: white;
    font-weight: 700;
    top: 15%;
    left: 10%;
    z-index: 0;

    white-space: nowrap;
  }

  @media (${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const IMGContainer = styled.div`
  width: 50%;
  padding: 10% 10% 10% 0;
  max-height: calc(100vh - 200px);
  z-index: 1;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    flex-wrap: wrap;

    img {
      width: 100%;
      height: -webkit-fill-available;
      max-height: 50vh;
      object-fit: cover;
    }
  }

  @media (${({ theme }) => theme.breakpoints.desktop}) {
    padding: 20% 0% 0% 4%;
    width: 100%;
  }
`;
