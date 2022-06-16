import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer, MDXProvider } from 'gatsby-plugin-mdx'
import Layout from '../../components/Layout'


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

//TODO: https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#mdxrenderer


const BlogPost = ({ data }) => {
  const post = data.mdx
    return (
      <Layout >
        <div className="flex flex-col flex-grow text-center pt-20 dark:text-gray-300" id="blog">
          <div className=''>
            <p className="text-gray-500 dark:text-slate-200 lowercase">{post.frontmatter.date} - {post.fields.readingTime.minutes} min read</p>
            <p className=' text-3xl font-bold'>{post.frontmatter.title}</p>
            <p>{post.frontmatter.description}</p>
          </div>
          <div className="pt-5">
            <MDXRenderer >
              {post.body}
            </MDXRenderer>
          </div>
          <Comments />
        </div>
      </Layout>
    )
}

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