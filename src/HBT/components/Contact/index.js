import React from "react";
import {
  Container,
  Contact,
  PrimaryText,
  ContactH1,
  ContactText,
  ContactLabel,
  ContactInput,
  ContactTextArea,
  ContactSend,
  ContactFeatures
} from "../../css/main";
import { FaHotel, FaPhone, FaEnvelope } from "react-icons/fa";
import ContactFeatureItem from './components/ContactFeatureItem';

export default () => (
  <Contact>
    <Container
      style={{
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <ContactH1>
        <PrimaryText>Contact</PrimaryText> Us
      </ContactH1>
      <ContactText>Please fill the form below</ContactText>
      <form style={{ width: "100%" }}>
        <div>
          <ContactLabel>Name</ContactLabel>
          <ContactInput type="text" />
        </div>
        <div>
          <ContactLabel>Email</ContactLabel>
          <ContactInput type="text" />
        </div>
        <div>
          <ContactLabel>Message</ContactLabel>
          <ContactTextArea />
        </div>
        <ContactSend>SUBMIT</ContactSend>
      </form>
    </Container>
    <ContactFeatures>
      <ContactFeatureItem
        Icon={FaHotel}
        heading={"Location"}
        body={"Kampala, Uganda"}
      />
      <ContactFeatureItem
        Icon={FaPhone}
        heading={"Phone Number"}
        body={"(256) 777-7777777"}
      />
      <ContactFeatureItem
        Icon={FaEnvelope}
        heading={"Email Address"}
        body={"frontdesk@hbt.co"}
      />
    </ContactFeatures>
  </Contact>
);
