import React from 'react';
import { useAccount } from '../../providers/Account';
import FavsList from '../../components/FavsList';
import styled from 'styled-components';

const Welcome = styled.h2`
  font-size: 2.7rem;
  letter-spacing: -1px;
  font-family: Candara, Times;
  margin-top: 20px;
  margin-bottom: 0px;
  text-align: center;
`;

const NoVids = styled.div`
  font-size: 1.5rem;
  font-family: Candara, Times;
  margin-top: 70px;
  text-align: center;
`;

function Favorites() {
  const [account] = useAccount();
  const { name, favorites, user } = account;

  if (!favorites[user]) {
    return (
      <>
        <Welcome title="welcome"> {`Welcome back, ${name}`} </Welcome>
        <NoVids>User not found!</NoVids>
      </>
    )
  }

  return (
    <>
      <Welcome title="welcome"> {`Welcome back, ${name}`} </Welcome>
      {Object.keys(favorites[user]).length > 0 ? <FavsList /> : <NoVids>You have no favorite videos yet!</NoVids>}
    </>
  );
}

export default Favorites;
