import React from 'react';
import styled from 'styled-components';
import VideoList from '../../components/VideoList';
import { useYTApi } from '../../utils/hooks/useYTApi';

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 0 20px;
`;

const Spinner = styled.div`
  margin: auto;
`;

const Welcome = styled.h1`
  font-size: 3.5rem;
  letter-spacing: -1px;
  font-family: Candara, Times;
  margin-top: 20px;
`;

function HomePage({ query }) {
  let params = {
    q: query,
    type: 'video',
    part: ['id', 'snippet'],
    order: 'relevance',
    maxResults: 12
  }

  const [videos, isLoading, error] = useYTApi({ endpoint: 'search', params: params });

  if (isLoading || videos === null || videos === undefined) {
    return (
      <Container>
        <Welcome>Welcome to the Challenge!</Welcome>
        <Spinner className="spinner" data-testid="spinner" />
      </Container>
    )
  }

  if (error) {
    return (
      <Container>
        <Welcome>Welcome to the Challenge!</Welcome>
        <h5>Couldn&apos;t find any videos for your search :(</h5>
      </Container>
    )
  }

  return (
    <Container>
      <Welcome>Welcome to the Challenge!</Welcome>
      <VideoList videos={videos} data-testid="video-list" />
    </Container>
  );
}

export default HomePage;
