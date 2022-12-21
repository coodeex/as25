import toast from 'react-hot-toast';

export const error = (error: any) => {
  console.log('error', error?.response?.status, error?.response?.data);
  toast.error('error');
};
