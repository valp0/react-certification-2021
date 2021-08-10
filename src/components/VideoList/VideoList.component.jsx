import React from 'react';
import VideoCard from '../VideoCard';
import styled from 'styled-components';

const List = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 345px);
  grid-gap: 20px;
`;

function VideoList({ videos }) {
  let output = videos.map(item => item.snippet && <VideoCard key={item.id.videoId} video={item} />);

  return <List data-testid="video-list">{output}</List>;
}

export default VideoList;
