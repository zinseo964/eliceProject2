import { useEffect, useState } from 'react';

export default async function useData(apiURL) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_DOMAIN}:${process.env.REACT_APP_SERVER_PORT}/${apiURL}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );
      const jsonRes = await res.json();
      setData(jsonRes);
    };
    getData();
  }, []);
  return data;
}
