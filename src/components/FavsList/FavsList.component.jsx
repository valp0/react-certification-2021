import React from 'react';
import styled from 'styled-components';
import { useAccount } from '../../providers/Account';
import FavCard from '../FavCard';

const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px;
  padding-top: 27px;
`;

function FavsList() {
  const { accountCtx } = useAccount();
  const { favorites, user } = accountCtx;
  const list = favorites[user];

  return (
    <List title="favs-list">
      {!favorites[user] ? "No favorites to show!" : Object.keys(list).map(id => <FavCard key={id} video={list[id]} />)}
    </List>
  );
}

export default FavsList;
