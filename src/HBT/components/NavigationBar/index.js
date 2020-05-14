import React from "react";
import { Link } from 'react-router-dom'
import * as Styled from '../../css/main'

export default () => (
  <Styled.NavBar>
    <Styled.Container>
      <Link to="/HBT">
        <Styled.Logo>HBT</Styled.Logo>
      </Link>
      <Styled.Ul>
        <Styled.Li>
          <Styled.NavA
            activeClassName="hbt_active"
            className="hbt_nav"
            to="/HBT"
            exact
          >
            Home
          </Styled.NavA>
        </Styled.Li>
        <Styled.Li>
          <Styled.NavA
            activeClassName="hbt_active"
            className="hbt_nav"
            to="/HBT/about"
          >
            About
          </Styled.NavA>
        </Styled.Li>
        <Styled.Li>
          <Styled.NavA
            activeClassName="hbt_active"
            className="hbt_nav"
            to="/HBT/contact"
          >
            Contact
          </Styled.NavA>
        </Styled.Li>
      </Styled.Ul>
    </Styled.Container>
  </Styled.NavBar>
);
