import { useState } from 'react';
import styled from 'styled-components';

import Stack from '../Stack';
import { Button } from './Button';
import ShadowButton from './ShadowButton';
import { TransitionDiv } from './TransitionDiv';

export const ComponentSandbox = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Stack axis="y" spacing="medium">
      <Stack axis="x" spacing="medium">
        <Button>button1</Button>
        <Button>button2</Button>
      </Stack>

      <Stack axis="x" spacing="medium">
        <div></div>
        <ShadowButton loading={loading} onClick={() => setLoading(!loading)}>
          Hello
        </ShadowButton>
      </Stack>
      <TransitionDiv show={!loading} />
    </Stack>
  );
};
