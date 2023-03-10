import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = () => {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/colors">Colors</Link>
          </li>
          {/* <li>
            <Link to="/chat">Chat</Link>
          </li>
          <li>
            <Link to="/components">Sandbox</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li> */}
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
      <Outlet />
    </div>
  );
};
