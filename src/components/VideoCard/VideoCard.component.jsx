import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components';
import { useAccount } from '../../providers/Account';
import { useAppearance } from '../../providers/Appearance';
import { types } from '../../utils/constants';

const cardEntrance = keyframes`
from {
  opacity: 0;
  transform: scale(0.3);
}
to {
  opacity: 1;
  transform: scale(1);
}
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  height: 345px;
  width: 345px;
  border: 0px solid transparent;
  border-radius: 7px;
  box-shadow: 1px 2px 2px ${props => props.dark ? "rgba(7, 7, 7, 0.7)" : "rgba(100, 100, 100, 0.7)"};
  background-color: ${props => props.dark ? "#333" : "white"};
  transition: all 0.5s ease-out;
  cursor: pointer;
  animation: ${cardEntrance} 0.7s ease-in-out;
  animation-fill-mode: backwards;
  &:hover {
    background-color: ${props => props.dark ? "#555" : "lightgrey"};
  }
  overflow: hidden;
`;

const Img = styled.img`
  width: 345px;
`;

const Title = styled.div`
  font-size: 14pt;
  line-height: 17pt;
  overflow: hidden;
  margin: 5px 0px;
  text-align: left;
  color: ${props => props.dark ? "#FFF" : "#333"};
  transition: 0.5s ease-out;
`;

const TitleContainer = styled.div`
  width: 345px;
  padding: 0px 7px;
  margin: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Description = styled.div`
  font-size: 10pt;
  color: darkgrey;
  text-align: left;
  margin: 0px 7px 0px 7px;
`;

const Anchor = styled(Link)`
  text-decoration: none;
  height: 345px;
  width: 345px;
  position: relative;
  top: 0px;
  left: 0px;
`;

const FavsButton = styled.button`
  padding: 5px 10px;
  line-height: 20px;
  height: 40px;
  font-size: 15pt;
  border: 3px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s ease-out;
  background-color: rgba(0,0,0,0.1);
  color: inherit;
  color: ${props => props.invert && 'gold'}};
  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 0px 15px ${props => props.dark ? 'rgba(255, 255, 255, 1)' : 'rgba(100, 100, 100, 0.7)'};
  }
  &:active {
    background-color: rgba(77, 77, 77, 0.3);
    border-style: inset;
    border-color: rgba(37, 37, 37, 0.27);
  }
  visibility: ${props => props.hide && !props.invert ? 'hidden' : 'visible'};
  opacity: ${props => props.hide && !props.invert ? '0' : '1'};
  transition: opacity 0.5s ease-out, visibility 0.5s ease-out;
`;

function VideoCard({ video, test }) {
  const [appearance] = useAppearance();
  const [hide, setHide] = useState(true);
  const [account, accDispatch] = useAccount();
  const { user, favorites, authenticated } = account;

  let { darkMode } = appearance;
  if (test) darkMode = test;

  const { thumbnails, title, description } = video.snippet;
  const id = video.id.videoId;

  const alreadyInFavs = () => {
    if (!favorites[user]) return false;
    if (favorites[user].hasOwnProperty(id)) return true;
    return false;
  }

  const invert = alreadyInFavs();

  // Adds video to favs if not in there yet, removes it if it is.
  const toFavs = (e) => {
    e.preventDefault();
    if (!authenticated) {
      accDispatch({ type: types.OPEN_MODAL });
      return;
    }
    if (alreadyInFavs()) {
      accDispatch({ type: types.REMOVE_FROM_FAVS, id: id });
    } else {
      accDispatch({
        type: types.ADD_TO_FAVS,
        id: id,
        thumbnail: thumbnails.medium.url,
        title: title,
        description: description
      });
    }
  }

  const showButton = () => setHide(false);
  const hideButton = () => setHide(true);

  return (
    <Card data-testid='video-card' dark={darkMode} onMouseOver={showButton} onMouseOut={hideButton} >
      <Anchor to={`/watch/${id}`} >
        <Img src={thumbnails.medium.url} alt="thumbnail" />
        <TitleContainer>
          <Title title="title" dark={darkMode}> {title} </Title>
          <FavsButton onClick={toFavs} invert={invert} dark={darkMode} hide={hide} title="add/remove-favs">
            &#9733;
          </FavsButton>
        </TitleContainer>
        <Description title="description" > {description} </Description>
      </Anchor>
    </Card>
  );
}

export default VideoCard;
