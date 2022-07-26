import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {RoughNotation} from "react-rough-notation";
import {Link, useStaticQuery, graphql} from "gatsby";

function Slide( { title, description, link, image, time, data } ){
    const a = getImage(data.find(b => b.name === image))
    const [hover, setHover] = React.useState(false)
    return ( <Link to={link} key={title}>
        <div className="" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <figure><GatsbyImage
                image={a}
                alt={title}
                className="md:w-[80%]"/></figure>
            <div className="pt-4">
                <p className="text-minto">{time}</p>

                <p className="inline-flex text-4xl font-bold">
                    <RoughNotation type="underline" strokeWidth="5" color="purple" show={hover}>
                        {title}
                    </RoughNotation>
                </p>

                <p>{description}</p>
            </div>
        </div>
    </Link> )
}

export default function Carousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", startIndex: 2 })
    const data = useStaticQuery(
        graphql`query{
            allFile(filter: {sourceInstanceName: {eq: "img"}}) {
                nodes {
                    name
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }`
    )
    const odiolavita = data.allFile.nodes

    useEffect(() => {
        if (emblaApi) {
            emblaApi.reInit()
        }
    }, [emblaApi])

    return (
        <div className={"w-screen py-20 text-center"}>
        <p className='text-mint text-xl uppercase pb-5 font-bold px-10'>projects - 1</p>
        <div className="embla overflow-hidden" ref={emblaRef} id={"projects"}>
            <div className="embla__container text-mint flex text-center">
                <div className="embla__slide relative basis-full">
                    ?
                </div>
                <div className="embla__slide relative basis-full">?</div>
                <div className="embla__slide relative basis-full">
                   <Slide data={odiolavita} title={"tristezaensemble.com"} link={`/projects/tristeza`} image={'tristeza'} time={"2019-NOW"} description={`theatre company's website`}/>
                </div>
                <div className="embla__slide relative basis-full">?</div>
                <div className="embla__slide relative basis-full">?</div>
            </div>
        </div>
        </div>
    )
}