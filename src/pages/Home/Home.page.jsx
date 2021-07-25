import React /*, { useRef }*/ from 'react';
// import { useHistory } from 'react-router-dom';

import VideoList from '../../components/VideoList';
import './Home.styles.css';

function HomePage() {
  // const history = useHistory();

  return (
    <div className="homepage">
      <h1 className="welcome">Welcome to the Challenge!</h1>
      <VideoList />
    </div>
  );
}

export default HomePage;
