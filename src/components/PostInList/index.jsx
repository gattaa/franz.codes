import React from "react";
import { Link } from "gatsby";
import { RoughNotation } from "react-rough-notation"

function PostInList({ post }) {
    const [hover, setHover] = React.useState(false)
    return (
        <div className="inline-flex" role={"article"}>
            
            <div className="text-minto mt-5 "  onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <p className="text-minto lowercase">{post.frontmatter.date} - {post.fields.readingTime.minutes} min read</p>
                <div className="font-bold text-3xl">
                <RoughNotation type="highlight" color="purple" show={hover}>
                    <Link to={`/blog/${post.slug}`}>
                        {post.frontmatter.title}
                    </Link>
                </RoughNotation>
                </div>
                <p className="text-minto">{post.frontmatter.description}</p>
            </div>
        </div>
    );
}

export default PostInList;