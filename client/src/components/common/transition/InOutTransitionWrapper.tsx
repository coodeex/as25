/* eslint-disable react/display-name */
import './transition.css';

import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

type Props = {
  children: ReactElement;
  show?: boolean | undefined;
};

const appearDuration = 300; // same in transition.css
const transitionName = `in-out-transition`;

const InOutTransitionWrapper = ({ children, show = true }: Props) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(show);
  }, [show]);
  const nodeRef = useRef(null);

  return (
    <>
      <TransitionGroup>
        {visible ? (
          <CSSTransition
            in={show}
            nodeRef={nodeRef}
            classNames={transitionName}
            timeout={appearDuration}
            unmountOnExit
          >
            {React.cloneElement(children, { ref: nodeRef })}
          </CSSTransition>
        ) : null}
      </TransitionGroup>
    </>
  );
};

export default InOutTransitionWrapper;
