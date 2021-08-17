import React/*, { useState, useEffect }*/ from 'react';
// import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
// import { result } from '../../mock/youtube-videos-mock';

import RelatedList from '../../components/RelatedList';
import VideoDetail from '../../components/VideoDetail';

const PlayerLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  padding-top: 27px;
  @media (max-width: 1015px) {
    flex-direction: column;
  }
`;

function Player({ testId }) {
  let { id } = useParams();
  if (id === undefined) {
    id = testId;
  }

  return (
    <>
      <PlayerLayout>
        <VideoDetail id={id} />
        <RelatedList id={id} />
      </PlayerLayout>
    </>
  );
}

export default Player;
