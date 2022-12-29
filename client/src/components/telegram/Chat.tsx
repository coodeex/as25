import { My, useGet } from '../../api/Api';
import Spinner from '../Spinner';

type Msg = { id: string; msg: string; sender: string }[] | null;

export const Chat = () => {
  const data = useGet('tg') as Msg;
  if (!data) return <Spinner />;
  return (
    <>
      <My />
      <pre style={{ whiteSpace: 'pre-wrap' }}>
        {'data: '}
        {JSON.stringify(
          data?.map(m => ({ ...m })),
          null,
          2,
        )}
      </pre>
    </>
  );
};
