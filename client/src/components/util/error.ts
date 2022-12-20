import toast from 'react-hot-toast';

export const error = (error: any) => {
  console.log('err', error.response.status, error.response.data);
  toast.error('error');
};
