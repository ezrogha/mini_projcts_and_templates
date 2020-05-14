import React from "react";
import { FaUtensils, FaDumbbell, FaHotel } from "react-icons/fa";
import HomeShowCase from "./components/HomeShowCase";
import Feature from "./components/Feature";
import HomeInfoSection from "./components/HomeInfoSection";
import * as Styled from "../../css/main";

export default (props) => (
  <>
    <Styled.Header>
      <HomeShowCase />
    </Styled.Header>

    <Styled.HomeInfo>
      <HomeInfoSection />
    </Styled.HomeInfo>

    <Styled.Features>
      <Feature Icon={FaHotel} />
      <Feature Icon={FaUtensils} />
      <Feature Icon={FaDumbbell} />
    </Styled.Features>
  </>
);
