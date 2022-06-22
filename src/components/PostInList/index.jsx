import React from "react";
import { Link } from "gatsby";
import { RoughNotation } from "react-rough-notation"

function PostInList({ post }) {
    const [hover, setHover] = React.useState(false)
    return (
        <div className="inline-flex">
            
            <div className="text-white mt-5 " role="listitem" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <p className="text-slate-200 lowercase">{post.frontmatter.date} - {post.fields.readingTime.minutes} min read</p>
                <div className="font-bold text-3xl">
                <RoughNotation type="highlight" color="purple" show={hover}>
                    <Link to={`/blog/${post.slug}`}>
                        {post.frontmatter.title}
                    </Link>
                </RoughNotation>
                </div>
                <p>{post.frontmatter.description}</p>
            </div>
        </div>
    );
}

export default PostInList;