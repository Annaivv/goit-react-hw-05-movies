import styled from 'styled-components';

export const MovieInfo = styled.section`
  display: flex;
  justify-content: flex-start;
  gap: 18px;
  padding-bottom: 18px;
  border-bottom: 2px solid #aeaeae;
`;

export const MoviePoster = styled.div`
  min-width: 400px;
  margin: 0 auto;
  padding-top: 12px;
`;

export const MovieData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
`;

export const MoreInfo = styled.section`
  padding: 18px 0;
  border-bottom: 2px solid #aeaeae;
`;

export const InfoItem = styled.li`
  padding-top: 12px;
`;
