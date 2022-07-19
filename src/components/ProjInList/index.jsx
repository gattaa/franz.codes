import React from "react";
import { Link } from "gatsby";
import { RoughNotation } from "react-rough-notation"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

function ProjInList({ post }) {
    const [hover, setHover] = React.useState(false)
    const image = getImage(post.frontmatter.hero_image)
    return (
        <div className="inline-flex pt-5" >
            <Link to={`/proj/${post.slug}`}>
                <div className="" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <figure><GatsbyImage
                                image={image}
                                alt={post.frontmatter.hero_image_alt}
                                className=""/></figure>
                    <div className="p-4">
                        <p className="text-minto lowercase">{post.frontmatter.year}</p>
                        
                        <p className="inline-flex text-4xl font-bold">
                            <RoughNotation type="highlight" color="purple" show={hover}>
                                {post.frontmatter.title}
                            </RoughNotation>
                        </p>
                        
                        <p>{post.frontmatter.description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ProjInList;