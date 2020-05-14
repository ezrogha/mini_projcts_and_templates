import React from "react";
import * as Styled from '../../../css/main'
import { withRouter } from "react-router";

const NavigationBar = (props) => (
  <Styled.ShowCase>
    {console.log(props)}
    <Styled.DarkWrapper>
      <Styled.Heading>
        <Styled.PrimaryText>Enjoy</Styled.PrimaryText> Your Stay.
      </Styled.Heading>
      <Styled.LeadingText>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,
        eligendi laboriosam. Repellendus officia harum eaque.
      </Styled.LeadingText>
      <Styled.LeadButton to="/about">About Us</Styled.LeadButton>
    </Styled.DarkWrapper>
  </Styled.ShowCase>
);

export default withRouter(NavigationBar);
