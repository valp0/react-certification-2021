import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAccount } from '../../providers/Account';
import { useAppearance } from '../../providers/Appearance';

const SCard = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  --width: calc(100vw - 40px);
  width: var(--width);
  --aspect-ratio: calc(1250 / 350);
  max-height: calc(var(--width) / var(--aspect-ratio));
  cursor: pointer;
  border: 0px solid transparent;
  &:hover{
    background-color: ${props => props.dark ? "#555" : "lightgrey"};
  }
  @media (max-width: 880px) {
    flex-direction: column;
    max-height: 1200px;
  }
  margin-top: 10px;
  margin-bottom: 10px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 1px 2px 2px ${props => props.dark ? "rgba(7, 7, 7, 0.7)" : "rgba(100, 100, 100, 0.7)"};
  background-color: ${props => props.dark ? "#333" : "white"};
  transition: 0.5s ease-out, color 0.2s ease-out;
`;

const Thumbnail = styled.img`
  --aspect-ratio: calc(16 / 9);
  --width: calc(50vw - 20px);
  width: var(--width);
  overflow: hidden;
  height: calc(var(--width) / var(--aspect-ratio));
  @media (max-width: 880px) {
    --width: calc(100vw - 40px);
    width: var(--width);
    height: calc(var(--width) / var(--aspect-ratio));
  }
  transition: 0.5s ease-out;
`;

const TitleAndDesc = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50vw - 20px);
  @media (max-width: 880px) {
    width: calc(100vw - 40px);
  }
  padding-bottom: 7px;
`;

const Title = styled.h2`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  letter-spacing: -1px;
  font-family: Candara, Times;
  margin-top: 7px;
  margin-bottom: 0px;
  padding: 3px 7px 0px 7px;
`;

const Description = styled.div`
  padding: 7px;
  font-size: 11pt;
  white-space: pre-wrap;
  overflow: hidden;
  @media (max-width: 880px) {
    max-height: 700px;
  }
`;

const FavButton = styled.button`
  font-weight: bolder;
  font-size: 17pt;
  padding: 5px 10px;
  line-height: 20px;
  height: 40px;
  border: 3px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s ease-out;
  background-color: rgba(0,0,0,0.1);
  color: red;
  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 0px 15px ${props => props.dark ? 'rgba(255, 255, 255, 1)' : 'rgba(100, 100, 100, 0.7)'};
  }
  &:active {
    background-color: rgba(77, 77, 77, 0.3);
    border-style: inset;
    border-color: rgba(37, 37, 37, 0.27);
  }
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  opacity: ${props => props.show ? '1' : '0'};
  transition: opacity 0.5s ease-out, visibility 0.5s ease-out;
`;

function FavCard({ video }) {
  const { appearanceCtx } = useAppearance();
  let { darkMode } = appearanceCtx;
  const { AccountFns } = useAccount();
  const [show, setShow] = useState(false);

  const removeFromFavs = (e) => {
    e.preventDefault();
    AccountFns.removeFav(video.id);
  }

  const showButton = () => {
    setShow(true);
  }

  const hideButton = () => {
    setShow(false);
  }

  return (
    <Link to={`/favorites/${video.id}`}>
      <SCard dark={darkMode} onMouseOver={showButton} onMouseOut={hideButton} title="fav-card">
        <Thumbnail src={video.thumbnail} />
        <TitleAndDesc>
          <Title>
            {video.title}
            <FavButton onClick={removeFromFavs} show={show} title="remove-from-favs" dark={darkMode}>
              &times;
            </FavButton>
          </Title>
          <Description>
            {video.description}
          </Description>
        </TitleAndDesc>
      </SCard>
    </Link>
  );
}

export default FavCard;
