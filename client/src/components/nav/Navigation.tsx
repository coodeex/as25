import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import ASLogo from '../../assets/images/as_plain_bw.png';
import CompanyLogos from './CompanyLogos';

export const Navigation = () => {
  return (
    <div>
      <LogoBanner>
        <TitleText>Automaatio- ja systeemitekniikan killan 25. juhlavuosi</TitleText>
      </LogoBanner>
      {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
      <NavBar>
        <StyledLink to="/">Etusivu</StyledLink>
        <StyledLink to="/timeline">Tapahtumat</StyledLink>

        <Logo>
          <img src={ASLogo} alt="Logo" style={{ width: '30px', height: '30px' }} />
        </Logo>

        <StyledLink to="/stimulaatio">Stimulaatio</StyledLink>
        <StyledLink to="/info">Yleistä</StyledLink>
      </NavBar>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
      <Outlet />
      <Footer>
        <CompanyLogos></CompanyLogos>
      </Footer>
    </div>
  );
};

const LogoBanner = styled.div`
  display: flex;
  width: 100%;
  background-color: #26123f;
  justify-content: space-between;
`;

const Logo = styled.div`
  align-self: flex-start;
  padding: 5px;
`;

const TitleText = styled.div`
  display: flex;
  margin: auto;
  align-self: center;
  font-size: 14px;
  color: #bdadcc;
  font-weight: 300;
  padding-bottom: 2px;
  @media only screen and (min-width: 500px) {
    font-size: 18px;
  }
`;

const NavBar = styled.nav`
  z-index: 1;
  position: sticky;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  font-size: 22px;
  align-items: center;
  background-color: #baa5da;
  padding: 10px;
  box-shadow: 5 0 10px rgba(0, 0, 0, 0.1);
`;

const StyledLink = styled(Link)`
  background-color: transparent;
  color: #1f0437;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;

  &:hover {
    color: #53188b;
    text-shadow: 0px 0px 1px #dbc0e9;
  }
`;

const Footer = styled.div`
  height: max-content;
  background-color: #baa5da;
`;
