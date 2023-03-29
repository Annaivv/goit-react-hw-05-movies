import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export const Header = styled.header`
  padding: 18px;
  border-bottom: 2px solid #aeaeae;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin-right: 10px;

  &.active {
    color: red;
  }
`;
