import React from "react";
import { Link } from "gatsby";
import { RoughNotation } from "react-rough-notation"

function ProjInList({ post }) {
    const [hover, setHover] = React.useState(false)
    return (
        <div className="inline-flex" >
            
            <div className="text-minto mt-5 " role="listitem" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <p className="text-minto lowercase">{post.frontmatter.date}</p>
                <div className="font-bold text-3xl">
                <RoughNotation type="highlight" color="purple" show={hover}>
                    <Link to={`/proj/${post.slug}`}>
                        {post.frontmatter.title}
                    </Link>
                </RoughNotation>
                </div>
                <p className="text-minto">{post.frontmatter.description}</p>
            </div>
        </div>
    );
}

export default ProjInList;