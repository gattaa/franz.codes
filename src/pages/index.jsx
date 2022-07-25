import React from 'react';

import Layout from '../components/Layout';
import Padded from '../components/Padded';
import { FaGithub } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import BlogList from '../components/BlogList'
import { RoughNotation } from "react-rough-notation";
import { BiChevronsDown } from 'react-icons/bi';
import Carousel from '../components/Carousel'
import Contact from "../components/Contact";
import Skills from '../components/Skills'

const Hero = ( { children } ) => {
  return (
    <div className='flex flex-col bg-mint w-[100%] p-20'> 
      {children}
    </div>
  );
}

const Index = () => {
  const [hover, setHover] = React.useState(false)

  return (
    <Layout con="false">
      <Padded>
        <div className='flex h-screen wotfard sticky top-0 bg-gray-900' id="page-top">
          <div className="content-center flex-grow place-self-center" >
            <div className='text-[10rem] leading-none text-mint'>
              <Typewriter
              options={{
                strings: ['franz', 'fraaaaaaaanz', 'franz', 'fraaaaaaaaaaaanz', 'franz', 'fraaaaaaaaaaaaaaanz'],
                autoStart: true,
                loop: true,
                cursor: "|"
              }}
            /></div>
            <RoughNotation className="inline-flex" type="crossed-off" color="purple" strokeWidth="3" show={hover} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}><p className='text-2xl text-mint'>do i actually code tho</p></RoughNotation>
            <div className="mt-1">
              <a href="https://github.com/gattaa" target={"_blank"} rel="noreferrer">
                <FaGithub size="25" className='me-link'/>
              </a>
            </div>
    
            <div className='absolute left-[48%] pb-10 bottom-0 animate-bounce text-mint' >
              <BiChevronsDown size="50"/>
            </div>
          </div>
        </div>
      </Padded>
      <Skills/>
      <Hero>
        <div className="text-gray-900 text-7xl font-bold">non so cosa scrivere qui</div>
        <div className="text-gray-900 text-5xl">spacca però il sito vero?</div>
      </Hero>
      <Padded className="">
        <div className='pt-24'>
          <div className="content-center flex-grow place-self-center" id="blog">
            <BlogList/>
          </div>
        </div>
      </Padded>
     <Carousel/>
      <Contact/>
    </Layout>
  );
}

export default Index;