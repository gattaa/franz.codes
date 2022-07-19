import React from "react";
import PostInList from "../PostInList";
import { graphql } from "gatsby";
import { StaticQuery } from "gatsby";

function BlogList({ data }){
  return( 
    <StaticQuery
    query={graphql`
      query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {tags: {eq: "blog"}}}) {
          nodes {
            frontmatter {
              date(formatString: "MMMM D, YYYY")
              title
              description
              tags
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
    `}
    render={(
      data
    ) => (
      <div className="flex flex-col">
      <p className='text-mint text-xl uppercase font-bold'>blog - {data.allMdx.totalCount} posts</p>
      <div className="flex flex-col">
          {
              data.allMdx.nodes.map(node => {
                return <PostInList post={ node } key={node.slug}/>
              })
          }
      </div>
      </div>
    )}
  />
  );
}

export default BlogList;