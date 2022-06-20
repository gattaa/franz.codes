import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import Layout from '../../components/Layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'



const Comments = props => {
  const commentsRef = React.useRef(null)
  const theme = window.localStorage.getItem("dark-theme");
  const utterancesTheme = theme === "true" ? "github-dark" : "github-light"
  React.useEffect(() => {
    
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
  }, [theme])
  return (
    <div ref={commentsRef} id="comments" ></div>
  )
}

const H1 = props => <p className='text-4xl dark:text-white' {...props} />
const P = props => (
  <p className='dark:text-white' {...props} />
)

const components = {
  h1: H1,
  p: P,
}


const BlogPost = ({ data }) => {
  const post = data.mdx
    return (
      <Layout >
        <div className="flex flex-col flex-grow text-center pt-20 dark:text-gray-100" id="blog">
          <div className=''>
            <p className=' text-7xl font-bold dark:text-white'>{post.frontmatter.title}</p>
            <p className='text-3xl'>{post.frontmatter.description}</p>
            <p className="text-gray-500 dark:text-white lowercase mt-2">{post.frontmatter.date} - {post.fields.readingTime.minutes} min read</p>
          </div>
          <div className="pt-5">
          <MDXProvider components={ components }> 
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
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