import React from 'react';
import styled from 'styled-components';
import { useAccount } from '../../providers/Account';

import RelatedCard from '../RelatedCard';

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 427px;
  @media (max-width: 1015px) {
    width: calc(100vw - 58px);
  }
  user-select: none;
  margin-top: 10px;
`;

const NoVids = styled.div`
  font-size: 1.5rem;
  font-family: Candara, Times;
  margin-top: 70px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1015px) {
    margin-top: 15px;
  }
`;

function RelatedFavsList({ id }) {
  const { accountCtx } = useAccount();
  const { favorites, user } = accountCtx;
  const favs = favorites[user];

  if (!favorites[user]) {
    return <NoVids title="related-list">Nothing to show here!</NoVids>;
  } else if (Object.keys(favs).length < 1) {
    return <NoVids title="related-list">You have no favorite videos yet!</NoVids>;
  }

  const output = Object.keys(favs).map(vid => {
    const { thumbnail, title } = favs[vid];
    return <RelatedCard key={vid} id={vid} img={thumbnail} title={title} fromFavs={true} bordered={vid === id} />;
  });

  return <Container>Your favorite videos:<List title="related-list"> {output} </List></Container>;
}

export default RelatedFavsList;
