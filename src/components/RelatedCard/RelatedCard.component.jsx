import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  width: 427px;
  border: 1px solid transparent;
  background-color: white;
  cursor: pointer;
  transition: 0.2s ease-in;
  overflow: hidden;
  &:hover {
    background-color: lightgrey;
  }
  margin-bottom: 2px;
  @media (max-width: 1015px) {
    width: calc(100vw - 58px);
  }
`;

const Img = styled.img`
  height: 98px;
  width: 175px;
`;

const Title = styled.div`
  font-size: 12pt;
  text-align: left;
  width: 252px;
  max-height: 80px;
  margin: auto 0;
  padding: 7px;
  overflow:hidden;
  @media (max-width: 1015px) {
    width: calc(100vw - 217px);
  }
`;

const Anchor = styled(Link)`
  text-decoration: none;
  color: none;
  width: 427px;
  overflow: hidden;
  @media (max-width: 1015px) {
    width: calc(100vw - 58px);
  }
`;

function VideoCard({ id, img, title }) {
  return (
    <Anchor to={`/watch/${id}`} >
      <Card data-testid='video-card'>
        <Img src={img.url} />
        <Title> {title} </Title>
      </Card>
    </Anchor >
  );
}

export default VideoCard;
