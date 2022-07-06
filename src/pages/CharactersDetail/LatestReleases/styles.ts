import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  padding: 0 10%;
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

export const ComicTitle = styled.span`
  font-size: 32px;
  font-weight: 700;
  color: #404040;
`;

export const WrapperReleases = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 30px 0 100px 0;
`;

export const CardRelease = styled.div`
  width: calc(25% - 20px);
  padding: 10px;

  > img {
    max-width: calc(100% - 20px);
    margin-bottom: 20px;
  }

  > span {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 30px;
  }
`;
