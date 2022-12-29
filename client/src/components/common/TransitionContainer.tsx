import React, { useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import styled from 'styled-components';

type Props = {
  show: boolean;
};

const appearDuration = 300;
const transitionName = `tn`;

const Container = styled.section`
  background-color: #fff;
  padding: ${p => p.theme.spacing.small}px;
  margin: ${p => p.theme.spacing.small}px;
  width: max-content;

  &.${transitionName}-enter {
    opacity: 0;
  }

  &.${transitionName}-enter-active {
    opacity: 1;
    transition: opacity ${appearDuration}ms ease-in-out;
  }

  &.${transitionName}-exit {
    opacity: 1;
  }

  &.${transitionName}-exit-active {
    opacity: 0;
    transition: opacity ${appearDuration}ms ease-in-out;
  }
`;

const TransitionContainer = ({ show }: Props) => {
  const nodeRef = useRef(null);
  return (
    <>
      <TransitionGroup>
        {show ? (
          <CSSTransition
            in={show}
            nodeRef={nodeRef}
            classNames={transitionName}
            timeout={appearDuration}
            unmountOnExit
          >
            <Container ref={nodeRef}>
              This will have the appear transition applied!
            </Container>
          </CSSTransition>
        ) : null}
      </TransitionGroup>
    </>
  );
};

export default TransitionContainer;
