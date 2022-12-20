import { Toaster as HotToaster } from 'react-hot-toast';

export const HotToast = () => {
  return (
    <HotToaster
      toastOptions={{
        success: {
          style: {
            backgroundColor: 'green',
            color: 'white',
          },
        },
        error: {
          style: {
            backgroundColor: '#fedcdc',
          },
        },
      }}
    />
  );
};
