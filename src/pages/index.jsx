import React from 'react';
import Layout from '../components/Layout';
import { FaGithub } from 'react-icons/fa';
import { graphql } from "gatsby";
import Typewriter from 'typewriter-effect';
import BlogList from '../components/BlogList'
import ProjList from '../components/ProjList';
import { RoughNotation } from "react-rough-notation"
import { BiChevronsDown } from 'react-icons/bi';

const Index = ({ data }) => {
  const [hover, setHover] = React.useState(false)
  return (
    <Layout>
      <div className='flex h-screen wotfard' id="page-top">
        <div className="content-center flex-grow place-self-center" >
          <p className='text-9xl text-white'>
            <Typewriter
            options={{
              strings: ['fraaaaaaaanz', 'franz'],
              autoStart: true,
              loop: true,
              cursor: "|"
            }}
          /></p>
          <RoughNotation className="inline-flex" type="crossed-off" color="purple" strokeWidth="3" show={hover} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}><p className='text-2xl text-white'>do i actually code tho</p></RoughNotation>
          <div className="mt-1">
            <a href="https://github.com/gattaa" target={"_blank"} rel="noreferrer">
              <FaGithub size="25" className='me-link'/>
            </a>
          </div>
   
          <div className='absolute left-[48%] pb-10 bottom-0 animate-bounce text-white' >
            <BiChevronsDown size="50"/>
          </div>
        </div>

       
      </div>
      <div className='md:flex md:flex-row'>
        <div className="content-center flex-grow place-self-center pt-10" id="blog">
          <BlogList data={ data } />
        </div>
        <div id="projects" className="content-center place-self-center pt-10">
          <ProjList/>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          description
        }
        id
        slug
        fields {
          readingTime {
            minutes
          }
        }
      }
      totalCount
    }
  }
`

export default Index;