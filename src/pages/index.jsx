import React from 'react';
import Layout from '../components/Layout';
import { FaGithub } from 'react-icons/fa';
import { graphql, Link } from "gatsby";
import Typewriter from 'typewriter-effect';
import BlogList from '../components/BlogList'
import { RoughNotation } from "react-rough-notation"
import { BiChevronsDown } from 'react-icons/bi';

const Index = ({ data }) => {
  const [hover, setHover] = React.useState(false)
  return (
    <Layout>
      <div className='flex h-screen wotfard' id="page-top">
        <div className="content-center flex-grow place-self-center" >
          <p className='text-9xl dark:text-white'>
            <Typewriter
            options={{
              strings: ['fraaaaaaaanz', 'franz'],
              autoStart: true,
              loop: true,
              cursor: "|"
            }}
          /></p>
          <RoughNotation className="inline-flex" type="crossed-off" color="purple" show={hover} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}><p className='text-2xl dark:text-white'>do i actually code tho</p></RoughNotation>
          <div className="mt-1">
            <a href="https://github.com/gattaa" target={"_blank"} rel="noreferrer">
              <FaGithub size="25" className='me-link'/>
            </a>
          </div>
          <div className='absolute left-[50%] pb-10 bottom-0 animate-bounce text-white' style={{"transform": "translate(-50%, 0);"}}>
            <BiChevronsDown size="50"/>
          </div>
        </div>

       
      </div>
      <div className="content-center flex-grow place-self-center pt-10" id="blog">
        <BlogList data={ data } />
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