import styled from 'styled-components';

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
`;

export const DescriptionContainer = styled.div`
  width: 30%;
  padding: 10%;
  z-index: 1;
`;

export const DescriptionContent = styled.div`
  width: 100%;
  min-width: 350px;
`;

export const WrapperDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  width: 100%;

  div > button {
    border: none;
    cursor: pointer;
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

  @media (${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const HeroTitle = styled.span`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.text.primary};
`;

export const HeroDescriptionCard = styled.div`
  width: 100%;
  font-size: 22px;
  margin-top: 40px;
  font-weight: 500;
  color: #8c8c8c;
  line-height: 40px;
`;

export const HeroInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 40px;
  width: 100%;
  color: #404040;
`;

export const HeroInfoComics = styled.div`
  width: 70%;

  > span {
    font-weight: 500;
    &:first-child {
      font-size: 20px;
    }
    &:last-child {
      font-size: 22px;
    }
  }
`;

export const HeroInfoMovies = styled.div`
  width: 30%;

  > span {
    font-weight: 500;
    &:first-child {
      font-size: 20px;
    }
    &:last-child {
      font-size: 22px;
    }
  }
`;

export const HeroRating = styled.div`
  width: 100%;
  margin-top: 40px;
  color: #404040;

  display: flex;
  align-items: center;

  > span {
    &:first-child {
      font-weight: 500;
      font-size: 20px;
    }
    &:last-child {
      margin-left: 20px;
    }
  }

  img {
    height: 23px;
  }
`;

export const HeroLastComic = styled.div`
  width: 100%;
  margin-top: 40px;
  font-size: 20px;
  color: #404040;

  > span {
    &:first-child {
      font-weight: 500;
    }
  }
`;
