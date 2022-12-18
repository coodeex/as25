import axios from 'axios';
import { useEffect, useState } from 'react';

const ax = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' },
});

const useGet = (url: string) => {
  const [data, setData] = useState('...');

  useEffect(() => {
    const fetchData = async () => {
      const response = await ax.get(`/${url}`);
      setData(response.data);
    };
    fetchData();
  }, []);
  return data;
};

export const R = () => {
  const data = useGet('r');
  return <div>{data}</div>;
};
