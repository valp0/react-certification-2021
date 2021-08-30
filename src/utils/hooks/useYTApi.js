import { useState, useEffect } from 'react';
import axios from 'axios';
import { buildUrl, storage } from '../fns';

function useYTApi({ endpoint, params }) {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(true);
  const url = buildUrl(endpoint, params);

  useEffect(() => {
    // Will remove everything after &key= in a string
    const removeKey = (fullUrl) => {
      const index = fullUrl.indexOf('&key=');
      const noKeyUrl = fullUrl.slice(0, index);
      return noKeyUrl;
    }

    async function callApi() {
      const noKeyUrl = removeKey(url);

      if (!storage.get("cache")) {
        storage.set("cache", {});
      }

      if (storage.get("cache")[noKeyUrl]) {
        setResponse(storage.get("cache")[noKeyUrl]);
        setError(false);
        setTimeout(() => setIsLoading(false));
        return;
      }

      setIsLoading(true);
      try {
        const res = await axios.get(url);
        const responseItems = res.data.items;

        // Will print endpoint and size of response whenever API is called
        // console.log(
        //   `Received ${responseItems.length} element${responseItems.length > 1 ? 's' : ''
        //   } from /${url.split('/')[5].split('?')[0]}.`
        // );

        if (responseItems === undefined || responseItems.length < 1) {
          setError(true);
          setResponse([]);
        } else {
          setError(false);
          setResponse(responseItems);

          const oldCache = storage.get("cache");
          const curResult = { [noKeyUrl]: responseItems };
          const updCache = { ...oldCache, ...curResult };
          storage.set("cache", updCache);
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
