import React from "react";
import {
  ContactFeature,
  FHeading
} from '../../../css/main'

export default ({ Icon }) => (
  <ContactFeature>
    <h1>
      <Icon />
    </h1>
    <FHeading>Location</FHeading>
    <p>Kampala, Uganda</p>
  </ContactFeature>
);
