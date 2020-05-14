import React from "react";

export default ({ Icon, title, number }) => (
  <ul>
    <li><Icon /></li>
    <li>{title}</li>
    <li>{number}</li>
  </ul>
);
