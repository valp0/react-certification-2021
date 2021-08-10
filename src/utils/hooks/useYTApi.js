import { useState, useEffect } from 'react';
import axios from 'axios';
import { buildUrl } from '../fns';

function useYTApi({ endpoint, params }) {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(true);
  const url = buildUrl(endpoint, params);

  useEffect(() => {
    async function callApi() {
      setIsLoading(true);
      try {
        const res = await axios.get(url);
        const responseItems = res.data.items;

        // Will print endpoint and size of response whenever API is called
        console.log(
          `Received ${responseItems.length} element${
            responseItems.length > 1 ? 's' : ''
          } from /${url.split('/')[5].split('?')[0]}.`
        );

        if (responseItems === undefined || responseItems.length < 1) {
          setError(true);
          setResponse([]);
        } else {
          setError(false);
          setResponse(responseItems);
        }
      } catch (e) {
        setError(true);
        setResponse([]);

        console.log(e.toString());
      } finally {
        setTimeout(() => setIsLoading(false), 100);
      }
    }

    callApi();
  }, [url]);

  return [response, isLoading, error];
}

export { useYTApi };
