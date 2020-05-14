import React from 'react'
import {
  Testimonial,
  TestimonialImage,
  TestimonialText
} from '../../../css/main'

export default ({ person }) => (
  <Testimonial>
  <TestimonialImage src={person} />
  <TestimonialText>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
    eligendi quibusdam, dolorum maxime cum numquam quisquam, deleniti
    eum incidunt, velit non consectetur. Facere, ipsa maxime, ullam id
    amet odio laboriosam sit iusto tempore fugit exercitationem, a
    dolore quo maiores nisi!
  </TestimonialText>
</Testimonial>
    )
