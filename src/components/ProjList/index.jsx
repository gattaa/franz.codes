import React from "react"
import { graphql, StaticQuery } from "gatsby"
import ProjInList from '../ProjInList'

function ProjList( { data } ){
    return(
        <StaticQuery
      query={graphql`
        query {
          allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {tags: {eq: "proj"}}}) {
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
        <div className="flex flex-col text-mint">
            <p className='text-mint text-xl uppercase font-bold'>projects - {data.allMdx.totalCount}</p>
            <div className="flex flex-col">
            {
                data.allMdx.nodes.map(node => {
                    if(node.frontmatter.tags.includes("proj")){  
                        return <ProjInList post={node}/>
                    }
                })
            }
        </div>
        </div>
      )}/>
    )
}

export default ProjList;