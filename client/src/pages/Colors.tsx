import styled from 'styled-components';

import { theme } from '../components/style/theme';

const Colors = () => {
  const colors = Object.entries(theme.colors).map(([key, value], i) => (
    <Color key={i} color={value}>
      {key}
    </Color>
  ));
  return <>{colors}</>;
};
const Color = styled.div<{ color?: string }>`
  background-color: ${p => p.color};
  height: 25px;
  width: 150px;
`;

export default Colors;
