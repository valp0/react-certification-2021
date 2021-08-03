import React/*, { useState, useEffect }*/ from 'react';
// import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
// import { result } from '../../mock/youtube-videos-mock';

import RelatedList from '../../components/RelatedList';
import VideoDetail from '../../components/VideoDetail';

const PlayerLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  @media (max-width: 1015px) {
    flex-direction: column;
  }
`;

function Player() {
  const { id } = useParams();

  return (
    <>
      <Link to="/" className="home-link">
        home
      </Link>
      <PlayerLayout>
        <VideoDetail id={id} />
        <RelatedList id={id} />
      </PlayerLayout>
    </>
  );
}

export default Player;
