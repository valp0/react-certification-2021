import React, { useContext } from 'react';
import styled from 'styled-components';
import { useYTApi } from '../../utils/hooks/useYTApi';
import { Redirect } from 'react-router';
import { StateContext } from '../../providers/State';

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
  background: ${props => props.dark ? "#333" : "white"};
  border: 1px solid transparent;
  border-radius: 0 0 7px 7px;
  margin-bottom: auto;
  box-shadow: 0px 2px 7px 2px ${props => props.dark ? "rgba(7, 7, 7, 0.7)" : "rgba(100, 100, 100, 0.7)"};
  padding-bottom: 7px;
  transition: 0.5s ease-out;
`;

function VideoDetail({ id, test }) {
  const [state] = useContext(StateContext);
  let { darkMode } = state;
  if (test) darkMode = test;

  let params = {
    id: id,
    part: 'snippet'
  }

  const [details, isLoading, error] = useYTApi({ endpoint: 'videos', params: params });

  if (isLoading) {
    return <div className="spinner" data-testid="loading-videos"></div>;
  }

  if (error || details.length < 1 || details === undefined) {
    return test ? "Redirected to 404" : <Redirect to="/404" />;
  }

  return (
    <Detail title="video-details" dark={darkMode}>
      <YTFrame
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <VideoTitle title={"video-title"}>{details[0].snippet.title}</VideoTitle>
      <Description title={"video-description"}>{details[0].snippet.description}</Description>
    </Detail>
  )
}

export default VideoDetail;
