import React from 'react';
import FaisalImg from '../../images/faisal.jpg';

const Home = () => {
  return (
    <div className="home">
      <img src={FaisalImg} alt="Faisal Ahammad" className='profile-pic' />
      <p>Hi,<br />
        I am <a href="https://github.com/faisalahammad" target="_blank" rel='noreferrer'>Faisal Ahammad</a>. I'm learning React and wanna be a good MERN Developer. I know those keywords-
      </p>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>PHP</li>
        <li>WordPress</li>
        <li>Shopify</li>
        <li><mark>CrateJoy</mark></li>
      </ul>
      <p>Oh, I forgot to tell you, you've go to <a href="/blog">Blog</a> page to check all blog post.</p>
    </div>
  );
};

export default Home;