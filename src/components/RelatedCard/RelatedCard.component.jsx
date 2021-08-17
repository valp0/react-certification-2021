import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { StateContext } from '../../providers/State';

const Card = styled.div`
  height: 100px;
  width: 427px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.5s ease-out;
  overflow: hidden;
  border-radius: 7px;
  &:hover {
    background-color: ${props => props.dark ? "#555" : "lightgrey"};
  }
  margin-bottom: 2px;
  @media (max-width: 1015px) {
    width: calc(100vw - 44.4px);
  }
  background: ${props => props.dark ? "#333" : "white"};
  color: ${props => props.dark ? "white" : "black"};
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
  max-height: 100px;
  margin: auto 0;
  padding: 7px;
  overflow:hidden;
  @media (max-width: 1015px) {
    width: calc(100vw - 217px);
  }
`;

const Anchor = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  width: 427px;
  overflow: hidden;
  @media (max-width: 1015px) {
    width: calc(100vw - 58px);
  }
`;

function RelatedCard({ id, img, title }) {
  const [state] = useContext(StateContext);
  const { darkMode } = state;

  return (
    <Card data-testid='video-card' dark={darkMode}>
      <Anchor to={`/watch/${id}`} >
        <Img src={img} />
        <Title title='title'> {title} </Title>
      </Anchor >
    </Card>
  );
}

export default RelatedCard;
