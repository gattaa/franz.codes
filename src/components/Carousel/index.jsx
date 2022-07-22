import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export default function Carousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    useEffect(() => {
        if (emblaApi) {
            emblaApi.reInit()
        }
    }, [emblaApi])

    return (
        <div className="embla w-screen px-10 py-20 overflow-hidden" ref={emblaRef}>
            <div className="embla__container text-mint flex">
                <div className="embla__slide relative basis-full">Slide 1</div>
                <div className="embla__slide relative basis-full">Slide 2</div>
                <div className="embla__slide relative basis-full">Slide 3</div>
            </div>
        </div>
    )
}