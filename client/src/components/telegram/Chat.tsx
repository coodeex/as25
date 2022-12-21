import { useGet } from '../../api/Api';

export const Chat = () => {
  const data = useGet('tg');
  return (
    <pre style={{ whiteSpace: 'pre-wrap' }}>
      {'data: '}
      {JSON.stringify(data, null, 2)}
    </pre>
  );
};
