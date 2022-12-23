import styled from 'styled-components';

import Stack from '../Stack';
import { Button } from './Button';

export const ComponentSandbox = () => {
  return (
    <Stack axis="y" spacing="medium">
      <Stack axis="x" spacing="medium">
        <Button>button1</Button>
        <Button>button2</Button>
      </Stack>
      <CoolDiv>jea</CoolDiv>
    </Stack>
  );
};

const CoolDiv = styled.div`
  background-color: ${p => p.theme.colors.primary};
  padding: ${p => p.theme.spacing.medium}px;
  width: min-content;
`;
