import { useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useApiResult = (request: string): [any[], string | null] => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
