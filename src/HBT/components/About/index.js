import React from "react";
import {
  Container,
  About,
  AboutContent,
  AboutImageSection,
  PrimaryText,
  AboutImage,
  AboutH1,
  Testmonials,
  TestimonialH1
} from "../../css/main";
import Testimonial from './components/Testimonial'
import Photo2 from "../../img/photo-2.jpg";
import Person1 from "../../img/person-1.jpg";
import Person2 from "../../img/person-2.jpg";

export default () => (
  <div>
    <About>
      <Container>
        <AboutContent>
          <AboutH1>
            <PrimaryText>About</PrimaryText> our Hotel
          </AboutH1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem veritatis illo, similique labore voluptate nulla
            animi dolorum eius laborum illum, nesciunt quod reprehenderit dicta
            autem vel nobis minima sit deleniti!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A velit
            voluptatem impedit voluptate. Doloribus, voluptas dolore! Cupiditate
            aliquid sequi deserunt.
          </p>
        </AboutContent>
        <AboutImageSection>
          <AboutImage src={Photo2} width="100%" />
        </AboutImageSection>
      </Container>
    </About>
    <Testmonials>
      <Container
        style={{
          color: "white",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TestimonialH1>What our Guests Say.</TestimonialH1>
        <Testimonial person={Person1} />
        <Testimonial person={Person2} />
      </Container>
    </Testmonials>
  </div>
);
