import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: ${({ theme }) => theme.borderRadius};
`;

type ImageCardProps = {
  url: string;
};

export const ImageCard = styled.div<ImageCardProps>`
  background-image: url(${({ url }) => `${url}`});
  background-repeat: no-repeat;
  background-size: cover;
  width: 250px;
  height: 250px;

  cursor: pointer;

  border-bottom: 5px solid ${({ theme }) => theme.colors.primary};

  @media (${({ theme }) => theme.breakpoints.desktop}) {
    width: 200px;
    height: 200px;
  }

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s linear;
  }
`;

export const WrapperNameAndFavorite = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  margin-top: 20px;
  cursor: pointer;

  > span {
    color: ${({ theme }) => theme.text.primary};
    font-weight: 700;
  }

  @media (${({ theme }) => theme.breakpoints.desktop}) {
    width: 200px;
  }
`;
