import { My, useGet } from '../../api/Api';

export const Chat = () => {
  const data = useGet('tg');
  return (
    <>
      <My />
      <pre style={{ whiteSpace: 'pre-wrap' }}>
        {'data: '}
        {JSON.stringify(data, null, 2)}
      </pre>
    </>
  );
};
