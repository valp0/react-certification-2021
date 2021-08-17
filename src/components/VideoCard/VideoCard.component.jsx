import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components';
import { StateContext } from '../../providers/State';

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
    transform: scale(1.017);
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
  margin: 5px 7px;
  text-align: left;
  color: ${props => props.dark ? "#FFF" : "#333"};
  transition: 0.5s ease-out;
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

function VideoCard({ video, test }) {
  const [state] = useContext(StateContext);
  let { darkMode } = state;
  if (test) darkMode = test;

  const { thumbnails, title, description } = video.snippet;
  const id = video.id.videoId;

  return (
    <Card data-testid='video-card' dark={darkMode}>
      <Anchor to={`/watch/${id}`} >
        <Img src={thumbnails.medium.url} alt="thumbnail" />
        <Title title="title" dark={darkMode}> {title} </Title>
        <Description title="description" > {description} </Description>
      </Anchor>
    </Card>
  );
}

export default VideoCard;
