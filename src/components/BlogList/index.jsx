import React from "react";
import PostInList from "../PostInList";

function BlogList({ data }){
    return( <div>
        <p className='text-gray-300 text-xl uppercase font-bold'>{data.allMdx.totalCount} posts</p>
        <div className="flex flex-col">
            {
                data.allMdx.nodes.map(node => (
                    <PostInList post={ node } />
                ))
            }
        </div>
    </div>
    );
}

export default BlogList;