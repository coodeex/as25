import styled from 'styled-components';

export const ShadowButton = () => {
  return <Button>Hello</Button>;
};

const Button = styled.button`
  text-decoration: none;
  border: none;
  font-family: inherit;
  text-align: center;
  background: linear-gradient(90deg, #170490, #b02775, #831496, #170490);
  background-size: 300%;
  border-radius: 30px;
  :hover {
    animation: ani 8s linear infinite;
    border: none;
    transition: box-shadow 0.5s ease-out;
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
    background: linear-gradient(32deg, #170490, #b02775, #831496);
  }
`;

// 80s :D
// box-shadow: 0 0 6px 3px #fff, /* inner white */ 0 0 10px 6px #f0f,
//       /* middle magenta */ 0 0 14px 9px #0ff; /* outer cyan */
//     transition: box-shadow 0.3s ease-in-out;
