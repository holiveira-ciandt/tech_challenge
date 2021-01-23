/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
import { useEffect, useState } from 'react';

const useApiResult = (request: RequestInfo) => {
  const [results, setResults] = useState<any[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(request)
      .then(async response => {
        if (response.ok) {
          setResults(await response.json());
          setError(null);
        } else {
          setError(null);
        }
      })
      .catch(err => {
        setError(err.message);
      });
  }, [request]);

  return [results, error];
};

export default useApiResult;
