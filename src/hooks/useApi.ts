import { useEffect, useState } from 'react';
import { Songs } from 'types/songs';

interface Response {
  Songs: Songs[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useApiResult = (request: string): [any[], string | null] => {
  const [results, setResults] = useState<Response[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(request)
      .then(async response => {
        if (response.ok) {
          const res = await response.json();
          setResults(res.data);
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
