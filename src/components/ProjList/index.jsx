import React from "react";
import { Link } from "gatsby"
import { RoughNotation } from "react-rough-notation";
import { StaticImage } from "gatsby-plugin-image";

/*function ProjInList({ post }) {
    const [hover, setHover] = React.useState(false)
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
}*/

function ProjList(){
    const [hover, setHover] = React.useState(false)
    return(
        <div className="flex flex-col text-mint">
            <p className='text-mint text-xl uppercase font-bold'>projects - 1</p>
            <div className="flex flex-col">
            <div className="inline-flex pt-5" >
            <Link to={`/proj/tristeza`}>
                <div className="" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <figure><StaticImage
                                src={'../../assets/images/tristeza.png'}
                                alt={'tristeza'}
                                className="md:w-[50%]"/></figure>
                    <div className="pt-4">
                        <p className="text-minto">2019-NOW</p>
                        
                        <p className="inline-flex text-4xl font-bold">
                            <RoughNotation type="underline" strokeWidth="5" color="purple" show={hover}>
                                tristezaensemble.com
                            </RoughNotation>
                        </p>
                        
                        <p>theatre company's website</p>
                    </div>
                </div>
            </Link>
        </div>
          </div>
        </div>

    )
}

export default ProjList;