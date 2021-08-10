import React from 'react';
import styled from 'styled-components';
import { useYTApi } from '../../utils/hooks/useYTApi';
import { Redirect } from 'react-router';

const YTFrame = styled.iframe`
  --aspect-ratio: calc(16 / 9);
  --width: calc(100vw - 491.6px);
  --height: calc(var(--width) / var(--aspect-ratio));
  width: var(--width);
  height: var(--height);
  @media (max-width: 1015px) {
    width: calc(100vw - 44.4px);
    height: calc(calc(100vw - 44.4px) / var(--aspect-ratio));
  }
  margin-bottom: -5px;
  position: relative;
  left: -1px;
  top: -1px;
`;

const VideoTitle = styled.h2`
  letter-spacing: -1px;
  font-family: Candara, Times;
  margin-bottom: 0px;
  margin-top: 0px;
  padding: 7px;
  border-right: 1px solid transparent;
  border-left: 1px solid transparent;
`;

const Description = styled.div`
  color: #777;
  padding: 7px;
  border-radius: 0 0 7px 7px;
  font-size: 11pt;
  white-space: pre-wrap;
`;

const Detail = styled.div`
  width: calc(100vw - 491.6px);
  @media (max-width: 1015px) {
    width: calc(100vw - 44.4px);
  }
  background-color: white;
  border: 1px solid transparent;
  border-radius: 0 0 7px 7px;
  margin-bottom: auto;
  box-shadow: 0px 2px 7px 2px rgba(100, 100, 100, 0.7);
  padding-bottom: 7px;
`;

function VideoDetail({ id }) {
  let params = {
    id: id,
    part: 'snippet'
  }

  const [details, isLoading, error] = useYTApi({ endpoint: 'videos', params: params });

  if (isLoading) {
    return <div className="spinner" data-testid="loading-videos"></div>;
  }

  if (error || details.length < 1 || details === undefined) {
    return <Redirect to="/404" />;
  }

  return (
    <Detail title="video-details">
      <YTFrame src={`https://www.youtube-nocookie.com/embed/${id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      <VideoTitle>{details[0].snippet.title}</VideoTitle>
      <Description>{details[0].snippet.description}</Description>
    </Detail>
  )
}

export default VideoDetail;
