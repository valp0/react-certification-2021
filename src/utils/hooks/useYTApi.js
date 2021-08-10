import { useState, useEffect } from 'react';
const API_URL = 'https://www.googleapis.com/youtube/v3';
const API_KEY = process.env.REACT_APP_KEY4;

function useYTApi({ endpoint, params }) {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    async function searchDetails({ route, queryParams }) {
      setIsLoading(true);
      try {
        let res = await fetch(`${API_URL}/${route}?${queryParams}&key=${API_KEY}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });

        const data = await res.json();
        let responseItems = data.items;

        // console.log(responseItems);

        if (responseItems === undefined || responseItems.length < 1) {
          setError(true);
        } else {
          setResponse(responseItems);
          setError(false);
        }
      } catch (e) {
        console.log(e.toString());
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    searchDetails({ route: endpoint, queryParams: params });
  }, [endpoint, params]);

  return [response, isLoading, error];
}

export { useYTApi };
