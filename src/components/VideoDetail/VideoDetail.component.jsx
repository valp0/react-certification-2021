import React, { useState } from 'react';
import styled from 'styled-components';
import { useYTApi } from '../../utils/hooks/useYTApi';
import { Redirect } from 'react-router';
import { useAppearance } from '../../providers/Appearance';
import ChanImg from '../ChanImg';
import { useAccount } from '../../providers/Account';

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
  margin-top: 7px;
  margin-bottom: 0px;
  padding: 3px 7px 0px 7px;
  border-right: 1px solid transparent;
  border-left: 1px solid transparent;
`;

const Description = styled.div`
  padding: 7px;
  border-radius: 0 0 7px 7px;
  font-size: 11pt;
  white-space: pre-wrap;
  max-height: ${props => props.showFull ? '2400px' : '157px'};
  overflow: hidden;
  text-overflow: ellipsis;
  transition: max-height 0.5s ease-in-out;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
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

const VideoUploadDate = styled.span`
  margin: 0px 7px;
  font-size: 10pt;
  margin-bottom: 7px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ChannelData = styled.span`
  margin-top: 5px;
  display: flex;
  flexbox-direction: row;
  align-items: center;
  padding: 5px 10px;
`;

const ChannelTitle = styled.span`
  margin-left: 10px;
  font-size: 11pt;
  font-weight: bold;
`;

const SizeSelector = styled.label`
  position: relative;
  margin-left: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  cursor: pointer;
  padding-right: 7px;
  user-select: none;
`;

const Arrow = styled.span`
  text-decoration: underline inherit;
  font-size: 9pt;
  height: 20px;
  transform: ${props => props.showFull ? "rotate(180deg)" : "none"};
  transition: 0.2s ease-out;
  text-shadow: ${props => {
    if (props.highlight) {
      if (props.dark) {
        return `0px 0px 5px white , 0px 0px 7px white, 0px 0px 15px white`;
      } else {
        return `0px 0px 5px black, 0px 0px 7px black, 0px 0px 15px black`;
      }
    }
  }};
  &:hover{
    text-shadow: ${props => {
    if (props.dark) {
      return `0px 0px 5px white , 0px 0px 7px white, 0px 0px 15px white`;
    } else {
      return `0px 0px 5px black, 0px 0px 7px black, 0px 0px 15px black`;
    }
  }};
    transition: 0.2s ease-out;
  }
`;

const FavsButton = styled.button`
  font-size: 12pt;
  padding: 5px 10px;
  line-height: 20px;
  font-size: 15pt;
  border: 3px solid transparent;
  border-radius: 5px;
  background-color: rgba(0,0,0,0.1);
  cursor: pointer;
  transition: 0.2s ease-out;
  color: inherit;
  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 0px 15px ${props => props.dark ? 'rgba(255, 255, 255, 1)' : 'rgba(100, 100, 100, 0.7)'};
  }
  &:active {
    background-color: rgba(77, 77, 77, 0.3);
    border-style: inset;
    border-color: rgba(37, 37, 37, 0.27);
  }
`;

function VideoDetail({ id, test }) {
  const [showFull, setShowFull] = useState(false);
  const [highlight, setHighlight] = useState(false);
  const { accountCtx, AccountFns } = useAccount();
  const { favorites, user, authenticated } = accountCtx;

  const { appearanceCtx } = useAppearance();
  let { darkMode } = appearanceCtx;
  if (test) darkMode = test;

  let vidParams = {
    id: id,
    part: 'snippet'
  }
  const [details, isLoading, error] = useYTApi({ endpoint: 'videos', params: vidParams });

  const toggleDescription = () => { setShowFull(showFull => !showFull) }

  const alreadyInFavs = () => {
    if (!favorites[user]) return false;
    if (favorites[user].hasOwnProperty(id)) return true;
    return false;
  }

  // Add to favs if not in there yet, or remove to favs if already in favs
  const toFavs = () => {
    if (!authenticated) {
      AccountFns.openModal();
      return;
    }
    if (alreadyInFavs()) {
      AccountFns.removeFav(id);
    } else {
      AccountFns.addFav({
        id,
        thumbnail: details[0].snippet.thumbnails.medium.url,
        title: details[0].snippet.title,
        description: details[0].snippet.description
      });
    }
  }

  if (isLoading) {
    return <div className="spinner" data-testid="loading-videos"></div>;
  }

  if (error || details.length < 1 || details === undefined) {
    return test ? "Redirected to 404" : <Redirect to="/404" />;
  }

  const highlightOn = () => {
    setHighlight(true);
  }

  const highlightOff = () => {
    setHighlight(false);
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

      <VideoTitle title="video-title">{details[0].snippet.title}</VideoTitle>

      <VideoUploadDate>
        {new Date(details[0].snippet.publishedAt).toDateString().slice(4)}

        <FavsButton dark={darkMode} onClick={toFavs}>&#9733; {alreadyInFavs() ? "Remove from favorites" : "Add to favorites"}</FavsButton>
      </VideoUploadDate>

      <ChannelData>
        <a href={`https://www.youtube.com/channel/${details[0].snippet.channelId}`} target="_blank" rel="noopener noreferrer">
          <ChanImg id={details[0].snippet.channelId} />

          <ChannelTitle> {details[0].snippet.channelTitle} </ChannelTitle>
        </a>

        <SizeSelector>
          <Arrow showFull={showFull} dark={darkMode} highlight={highlight} onClick={toggleDescription}>
            ▼
          </Arrow>
        </SizeSelector>
      </ChannelData>

      <Description
        title="video-description"
        id="description"
        showFull={showFull}
        onMouseOver={highlightOn}
        onMouseOut={highlightOff}
      >
        {details[0].snippet.description}
      </Description>
    </Detail>
  )
}

export default VideoDetail;
