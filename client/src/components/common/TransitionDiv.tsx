import styled from 'styled-components';

import InOutTransitionWrapper from './transition/InOutTransitionWrapper';

type Props = {
  show: boolean;
};

export const TransitionDiv = ({ show }: Props) => {
  return (
    <InOutTransitionWrapper show={show}>
      <CoolDiv>jea</CoolDiv>
    </InOutTransitionWrapper>
  );
};

const CoolDiv = styled.div`
  background-color: ${p => p.theme.colors.primary};
  padding: ${p => p.theme.spacing.medium}px;
  width: min-content;
`;
