import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import 'simpledotcss/simple.min.css';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import SinglePost from './components/SinglePost/SinglePost';


function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/post/:id" element={<SinglePost />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
