import React from 'react';
// import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import VideoList from '../../components/VideoList';
import './Home.styles.css';
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

function HomePage({ query }) {
  // const history = useHistory();
  let params = `q=${query}&type=video&part=id,snippet&order=relevance&maxResults=12`;

  const [videos, isLoading, error] = useYTApi({ endpoint: 'search', params: params });

  if (isLoading || videos === null || videos === undefined) {
    return (
      <Container>
        <h1 className="welcome">Welcome to the Challenge!</h1>
        <Spinner className="spinner" data-testid="video-list" />
      </Container>
    )
  }

  if (error || videos.length < 1) {
    return (
      <Container>
        <h1 className="welcome">Welcome to the Challenge!</h1>
        <h5 data-testid="video-list" >Couldn't find any videos for your search</h5>
      </Container>
    )
  }

  return (
    <Container>
      <h1 className="welcome">Welcome to the Challenge!</h1>
      <VideoList videos={videos} data-testid="video-list" />
    </Container>
  );
}

export default HomePage;
