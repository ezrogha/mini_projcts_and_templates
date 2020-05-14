import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import showcase from "../img/showcase.jpg";
import photo1 from "../img/photo-1.jpg";
import TestBg from "../img/test-bg.jpg";

const deviceWidth = {
  mobile: "764px"
}

// Constants
const LIGHT_COLOR = "#F4F4F4";
const DARK_COLOR = "#333";
const DEFAULT_FONT = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

// Utilities
const text_primary = `color: #f7c08a`;

const bg_light = `
  background-color: #f4f4f4;
  color: #333
`;
const bg_dark = `
  background: #333;
  color: #fff
`;

const bg_primary = `
  background: #f7c08a;
  color: #333
`;
const bg_nav_button = `
  background-color: #444;
  color: #f7c08a
`;

const primary_text_style = `
  font-size: 1.1rem;
  
`;


export const Body = styled.div`
  font-family: ${DEFAULT_FONT};
  font-size: 20px;
  @media (max-width: ${deviceWidth.mobile}) {
    font-size: 16px
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  margin: auto;
  padding: 0 1rem;
`;

// NAVBAR
export const NavBar = styled.nav`
  background-color: ${DARK_COLOR};
  /* position: sticky; */
`;

export const Header = styled.header``;

export const Logo = styled.h1`
  color: ${LIGHT_COLOR};
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const Li = styled.li``;

export const NavA = styled(NavLink)`
  display: inline-block;
  /* color: white; */
  padding: 1.5rem;
  &:hover {
    ${bg_nav_button}
  }
  @media (max-width: ${deviceWidth.mobile}) {
    padding: 1rem;
  }
`;

export const A = styled(Link)`
  display: inline-block;
  color: white;
  padding: 1.5rem;
  &:hover {
    ${bg_nav_button}
  }
`;

// FOOTER
export const Footer = styled.footer`
  padding: 2rem 0;
  text-align: center;
  ${bg_nav_button};
  color: #f4f4f4;
`;

//HOME
// SHOWCASE
export const ShowCase = styled.div`
  background: #333 url(${showcase}) no-repeat center center/cover;
  height: 100vh;
`;

export const DarkWrapper = styled.div`
  background: rgba(0, 0, 0, 0.1);
  color: ${LIGHT_COLOR};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Heading = styled.h1`
  font-size: 4rem;
  text-align: center;
  @media (max-width: ${deviceWidth.mobile}) {
    font-size: 3rem;
    padding: 0 1rem;
  }
`;

export const PrimaryText = styled.span`
  ${text_primary};
`;
export const LeadingText = styled.p`
  font-size: 1.5rem;
  padding: 2rem;
  text-align: center;
`;
export const LeadButton = styled(A)`
  font-size: 1.5rem;
  background: #333;
  padding: 1rem 1.5rem;
  cursor: pointer;
  &:hover {
    ${bg_primary}
  }
  @media (max-width: ${deviceWidth.mobile}) {
    padding: 0.75rem 1rem;
    font-size: 1.1rem;
  }
`;

// HOME INFO
export const HomeInfo = styled.section`
  display: flex;
  min-height: 400px;
`;

const FlexDiv = styled.div`
  flex: 1;
`;

export const HomeImage = styled(FlexDiv)`
  min-height: 100%;
  background: #333 url(${photo1}) no-repeat;
  @media (max-width: ${deviceWidth.mobile}) {
    display: none;
  }
`;

export const HomeContent = styled(FlexDiv)`
  ${bg_dark};
  padding: 4rem;
  text-align: center;
  @media (max-width: ${deviceWidth.mobile}) {
    padding: 2rem 0.5rem;
  }
`;

export const HomeText = styled(LeadingText)`
  font-size: 1.2rem;
`;

export const HomeButton = styled(LeadButton)`
  ${bg_light};
`;

// FEATURES
export const Features = styled.div`
  display: flex;
  @media (max-width: ${deviceWidth.mobile}) {
    display: block;
  }
`;

export const FeatureItem = styled(FlexDiv)`
  padding: 4rem;
  text-align: center;
  @media (max-width: ${deviceWidth.mobile}) {
    padding: 2rem;
  }
`;

export const FeatureItemPri = styled(FeatureItem)`
  ${bg_primary};
`;

export const FHeading = styled.h4`
  padding: 1rem 0;
`;

// ABOUT
export const About = styled.div`
  background: #f4f4f4;
  padding: 2rem 0;
`;

export const AboutContent = styled(FlexDiv)`
  font-size: 1.1rem;
  line-height: 2rem;
  padding-right: 1rem;
`;

export const AboutH1 = styled.h1`
  padding-bottom: 1rem;
`;

export const AboutImageSection = styled(FlexDiv)`
  min-height: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: ${deviceWidth.mobile}) {
    display: none
  }
`;

export const AboutImage = styled.img`
  width: 70%;
  border-radius: 50%;
`;

// TESTIMONIALS
export const Testmonials = styled.div`
  ${primary_text_style}
  min-height: 100vh;
  padding: 2rem 0;
  background: #333 url(${TestBg}) no-repeat center center/cover;
`;

export const TestimonialH1 = styled.h1`
  font-size: 3rem;
  margin: 2rem 0 4rem 0;
  @media (max-width: ${deviceWidth.mobile}) {
    font-size: 1.9rem;
  }
`;

export const Testimonial = styled.div`
  ${bg_primary};
  display: flex;
  width: 100%;
  padding: 1.7rem;
  margin-bottom: 4rem;
  opacity: 0.9;
  border-radius: 5px;
  @media (max-width: ${deviceWidth.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TestimonialImage = styled.img`
  width: 6.3rem;
  /* height: 6.3rem; */
  border-radius: 50%;
`;

export const TestimonialText = styled.p`
  padding-left: 2rem;
  line-height: 2rem;
`;

/* CONTACT */
export const Contact = styled.div`
  padding-top: 1.5rem;
`;

export const ContactH1 = styled.h1`
  padding-bottom: 1rem;
`;
export const ContactText = styled.p`
  font-size: 1.1rem;
  line-height: 2rem;
  padding-bottom: 1rem;
`;

export const ContactLabel = styled.label`
  font-size: 1.1rem;
  display: block;
  margin-bottom: 0.5rem;
`;

const formInput = `
  width: 100%;
  font-size: 1.1rem;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
  &:focus {
    outline: none;
    border: 1px solid #f7c08a;
  }
`;

export const ContactInput = styled.input`
  ${formInput}
`;

export const ContactTextArea = styled.textarea`
  height: 200px;
  ${formInput}
`;

export const ContactSend = styled(LeadButton)`
  padding: 0.5rem 1.3rem;
  font-size: 1.1rem;
`

export const ContactFeatures = styled.div`
  display: flex;
  margin-top: 2rem;
  @media (max-width: ${deviceWidth.mobile}) {
    display: block;
  }
`

export const ContactFeature = styled(FlexDiv)`
  text-align: center;
  padding: 4rem;
  ${bg_dark};
  @media (max-width: ${deviceWidth.mobile}) {
    padding: 2rem;
  }
`
