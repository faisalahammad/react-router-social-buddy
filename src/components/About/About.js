import React from 'react';

const About = () => {
  return (
    <div className='about'>
      <h2>About Us</h2>
      <img alt="A dog on an iPad" src="https://simplecss.org/assets/images/dog-ipad.jpg" />

      <h3>Image with caption</h3>
      <figure>
        <img alt="This is a black swan" src="https://simplecss.org/assets/images/goose.jpg" />
        <figcaption>This is a black swan</figcaption>
      </figure>
    </div>
  );
};

export default About;