import axios from 'axios';
import { useEffect, useState } from 'react';

import { sleep } from '../components/util/sleep';

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

export const usePost = (url: string, data: any) => {
  const [res, setRes] = useState('...');

  useEffect(() => {
    const fetchData = async () => {
      const response = await ax.post(`/${url}`, data);
      setRes(response.data);
    };
    fetchData();
  }, []);
  return res;
};

export const R = () => {
  const data = useGet('r');
  return <div>{data}</div>;
};

export const Tg = () => {
  const data = usePost('tg', 'jee');
  return data;
};

export function My() {
  const [response, setResponse] = useState(null);

  const handleClick = () => {
    axios
      .post('/api/tg', {
        // message: 'Helou!',
      })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const wait = async () => {
      await sleep(1000);
      setResponse(null);
    };
    wait();
  }, [response]);

  return (
    <div>
      <button onClick={handleClick}>Make POST Request</button>
      {response && <p>{response}</p>}
    </div>
  );
}
