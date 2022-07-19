import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import Layout from '../../components/Layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
//TODO: only show if blog tag



const Comments = props => {
  const commentsRef = React.useRef(null)

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const utterancesTheme = "github-dark"
      const scriptElement = document.createElement("script")
      scriptElement.setAttribute("src", "https://utteranc.es/client.js")
      scriptElement.setAttribute("crossorigin", "anonymous")
      scriptElement.setAttribute("async", true)
      scriptElement.setAttribute("repo", "gattaa/franz.codes")
      scriptElement.setAttribute("issue-term", "pathname")
      scriptElement.setAttribute("theme", utterancesTheme)
      while (commentsRef.current.firstChild) {
        commentsRef.current.firstChild.remove()
      }
      commentsRef.current.appendChild(scriptElement)
    }
  })
  return (
    <div ref={commentsRef} id="comments" ></div>
  )
}

const H1 = props => <p className='text-4xl text-mint' {...props} />
const P = props => <p className='text-mint' {...props} />
const H2 = props => <p className='text-mint text-3xl'/>
const H3 = props => <p className='text-2xl text-mint' {...props} />


const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
}


const BlogPost = ({ data }) => {
  const post = data.mdx
    return (
      <Layout >
        <div className="flex flex-col flex-grow text-center pt-20 text-mint" id="blog">
          <div className=''>
            <p className=' text-7xl font-bold text-mint'>{post.frontmatter.title}</p>
            <p className='text-3xl'>{post.frontmatter.description}</p>
            <p className="text-mint lowercase mt-2">{post.frontmatter.date} - {post.fields.readingTime.minutes} min read</p>
          </div>
          <hr className='mt-4 mx-[30%] border-gray-100 '/>
          <div className="pt-5">
          <MDXProvider components={ components }> 
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
          </div>
          <div className="flex justify-center">
            <footer className="grid grid-cols-2 gap-x-3 mt-20 w-full md:w-[65%] lg:w-[45%]">
              {/*<button className="btn-blog">...</button>
              <button className="btn-blog">HH</button>*/}
            </footer>
          </div>
          <Comments />
        </div>
      </Layout>
    )
}

//TODO: post before and post after buttons


export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        description
      }
      slug
      body
      fields {
        readingTime {
          minutes
        }
      }
    }
  }
`
export default BlogPost