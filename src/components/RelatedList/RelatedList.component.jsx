import React from 'react';
import styled from 'styled-components';
import { useYTApi } from '../../utils/hooks/useYTApi';

import RelatedCard from '../RelatedCard';

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 427px;
  @media (max-width: 1015px) {
    width: calc(100vw - 58px);
    margin-top: 15px;
  }
  user-select: none;
`;

function RelatedList({ id }) {
  let params = {
    relatedToVideoId: id,
    type: 'video',
    part: ['id', 'snippet'],
    order: 'relevance',
    maxResults: 12
  }

  const [related, isLoading, error] = useYTApi({ endpoint: 'search', params: params });

  if (isLoading) {
    return <div className="spinner" data-testid="loading-related"></div>;
  }

  if (error || related.length < 1 || related === undefined) {
    return <div>No related videos were found!</div>;
  }

  const output = related.map(item => item.snippet && <RelatedCard key={item.id.videoId} id={item.id.videoId} img={item.snippet.thumbnails.medium.url} title={item.snippet.title} />);
  return <List title="related-list"> {output} </List>;
}

export default RelatedList;
