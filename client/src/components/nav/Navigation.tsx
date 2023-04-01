import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import ASLogo from '../../pictures/as_plain_bw.png';

export const Navigation = () => {
  return (
    <div>
        <LogoBanner>
            <Logo>
              <img src={ASLogo} alt="Logo" style={{ width: "54.2px", height: "54.2px" }} />
            </Logo>
            <TitleText>
              AS-Kilta 25 vuosijuhla
            </TitleText>
        </LogoBanner>
      {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
      <nav>
        <NavBar>
          <>
            <StyledLink to="/">Home</StyledLink>
          </>
          <>
            <StyledLink to="/colors">Colors</StyledLink>
          </>
          <>
            <StyledLink to="/timeline">Timeline</StyledLink>
          </>
          {/* <li>
            <Link to="/chat">Chat</Link>
          </li>
          <li>
            <Link to="/components">Sandbox</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li> */}
        </NavBar>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
      <Outlet />
    </div>
  );
};

const LogoBanner = styled.div`
  display: flex;
  width: 100%;
  background-color: #F5F5F5;
  justify-content: space-between;
`;

const Logo = styled.div`
  align-self: flex-start;
`;

const TitleText = styled.div`
  display: flex;
  margin: auto;
  align-self: center;
  font-size: 22px;
`;

const NavBar = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  font-size: 22px;
  align-items: center;
  background-color: ${p => p.theme.colors.asPurple};
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StyledLink = styled(Link)`
  background-color: transparent;
  color: #ffc0cb;
  text-decoration: none;

  &:hover {
    color: #FFFFFF;
    text-shadow: 0px 0px 1px white;
  }
`;