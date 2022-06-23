import React from 'react';

import Layout from '../components/Layout';
import { FaGithub } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import BlogList from '../components/BlogList'
import ProjList from '../components/ProjList';
import { RoughNotation } from "react-rough-notation"
import { BiChevronsDown } from 'react-icons/bi';

const Index = () => {
  const [hover, setHover] = React.useState(false)
  return (
    <Layout>
      <div className='flex h-screen wotfard' id="page-top">
        <div className="content-center flex-grow place-self-center" >
          <div className='text-[10rem] leading-none text-mint'>
            <Typewriter
            options={{
              strings: ['franz', 'fraaaaaaaanz', 'franz', 'fraaaaaaaaaaaanz', 'franz'],
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

      <div className='flex flex-col bg-mint py-20 w-[100%] px-20'> {/* TODO: full screen width */}
        <div className="text-gray-900 text-5xl">non so cosa scrivere qui</div>
        <div className="text-gray-900 text-3xl">spacca però il sito vero?</div>
      </div>

      <div className='md:flex md:flex-row pt-16'>
        <div className="content-center flex-grow place-self-center" id="blog">
          <BlogList/>
        </div>
        <div id="projects" className="content-center flex-grow place-self-center pt-10 md:pt-0">
          <ProjList/>
        </div>
      </div>
    </Layout>
  );
}

export default Index;