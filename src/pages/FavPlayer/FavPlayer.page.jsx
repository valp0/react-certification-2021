import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import RelatedFavsList from '../../components/RelatedFavsList';

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

function FavPlayer({ testId }) {
  let { id } = useParams();
  if (id === undefined) {
    id = testId;
  }

  return (
    <>
      <PlayerLayout>
        <VideoDetail id={id} />
        <RelatedFavsList id={id} />
      </PlayerLayout>
    </>
  );
}

export default FavPlayer;
