import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { Button } from '../components/common/Button';
import Text from '../components/common/Text';
import { error } from '../components/util/error';

const ax = axios.create({
  // TODO change to server url when you know what it is
  baseURL:
    process.env.NODE_ENV === 'production' ? 'https://as25-api.azurewebsites.net' : '/api',
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' },
});

export const useGet = (url: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let response: any;
      try {
        response = await ax.get(`/${url}`);
      } catch (e) {
        console.log(e);
      }
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
      try {
        const response = await ax.post(`/${url}`, data);
        setRes(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  return data;
};

export const Home = () => {
  console.log('get data');
  const data = useGet('');

  return (
    <Text variant="title2" color="muted1">
      {data}
    </Text>
  );
};

export const R = () => {
  const data = useGet('r');
  return <div>{data}</div>;
};

export const Tg = () => {
  const data = usePost('tg', 'jee');
  return data;
};

export const My = () => {
  const handleClick = () => {
    axios
      .post('/api/tg', {
        message: 'Helou!',
      })
      .then(res => {
        toast.success(res.data);
      })
      .catch(error);
  };

  return (
    <div>
      <Button onClick={handleClick}>Make POST Request</Button>
    </div>
  );
};
