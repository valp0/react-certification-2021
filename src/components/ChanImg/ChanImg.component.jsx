import React from 'react';
import styled from 'styled-components';
import { useYTApi } from '../../utils/hooks/useYTApi';

const ChannelImg = styled.img`
  vertical-align: middle;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
`;

function ChanImg({ id, test }) {
  let chanParams = {
    part: 'snippet',
    id: id
  }
  const [img, isLoadingImg, errorImg] = useYTApi({ endpoint: 'channels', params: chanParams });
  // setTimeout(() => null, 2000);

  if (isLoadingImg) {
    return <div data-testid="loading-chanImg"></div>;
  }

  if (errorImg || img.length < 1 || img === undefined) {
    return test ? "No img found" : <img src="" alt="no-img" />;
  }

  return <ChannelImg src={img[0].snippet.thumbnails.medium.url} alt="channel" />;
}

export default ChanImg;
