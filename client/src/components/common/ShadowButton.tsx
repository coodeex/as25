import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import styled from 'styled-components';

import Spinner from '../Spinner';
import Stack from '../Stack';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => any;
};

const ShadowButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, loading, ...rest }, ref) => {
    return (
      <Button {...rest} ref={ref}>
        <Stack axis="x" spacing="small" align="center">
          {loading && <Spinner color="primary" size="medium" />}
          <span>{children}</span>
        </Stack>
      </Button>
    );
  },
);

ShadowButton.displayName = 'ShadowButton';

export default ShadowButton;

const Button = styled.button<{ disabled?: boolean | undefined }>`
  text-decoration: none;
  border: none;
  font-family: inherit;
  text-align: center;
  background: linear-gradient(90deg, #170490, #b02775, #831496, #170490);
  background-size: 300%;
  border-radius: 30px;
  transition: box-shadow 0.5s ease-out;
  :hover {
    ${p => p.disabled && 'cursor: not-allowed'}
  }
  :hover {
    animation: ani 8s linear infinite;
    border: none;
    box-shadow: 0 0 0px 0px #fff, 0px 3px 30px 1px #f0f, 0px -1px 40px 2px #0ff;
  }
  @keyframes ani {
    0% {
      background-position: 0%;
    }

    100% {
      background-position: 400%;
    }
  }

  :active {
    ${p => !p.disabled && 'background: linear-gradient(32deg, #0f016a, #741a4d, #4b0b57)'}
  }
`;

// 80s :D
// box-shadow: 0 0 6px 3px #fff, /* inner white */ 0 0 10px 6px #f0f,
//       /* middle magenta */ 0 0 14px 9px #0ff; /* outer cyan */
//     transition: box-shadow 0.3s ease-in-out;
