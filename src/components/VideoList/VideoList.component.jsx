import React from 'react';
import { result } from '../../mock/youtube-videos-mock';
import VideoCard from '../VideoCard';
import styled from 'styled-components';

const List = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 345px);
  grid-gap: 20px;
`;

function VideoList() {
  const list = result.items.map((item, index) => {
    return index !== 0 && <VideoCard key={index} video={item} />;
  });

  return <List>{list}</List>;
}

export default VideoList;
