import styled from 'styled-components';

export const Container = styled.div`
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
`;
