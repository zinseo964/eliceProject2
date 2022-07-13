import { useEffect, useState } from 'react';

export default function useFetch(apiURL) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${process.env.REACT_APP_DOMAIN}:${process.env.REACT_APP_SERVER_PORT}/${apiURL}`,
        );
        const jsonRes = await res.json();
        setData(jsonRes);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [apiURL]);

  if (!data && isLoading) {
    return null;
  }
  return { data, error, isLoading };
}
