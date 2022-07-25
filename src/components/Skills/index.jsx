import React, {useContext, useRef} from "react";
import * as s from '../../styles/skills.module.css'
import {ScrollContext} from "../../utils/scroll-observer";

function opacityForBlock(sectionProgress, blockNo){
    const progress = sectionProgress - blockNo
    if(progress >=0 && progress < 1) return 1
    return 0.2
}

const skillList = ["sono un pro", "non so cosa scrivere qui", "sto sito sta venendo molto figo", "ma è vuoto"]

export default function Skills() {
    const { scrollY } = useContext(ScrollContext)
    const refContainer = useRef(null)

    const numOfPages = skillList.length + 1
    let progress = 0

    const { current: elContainer } = refContainer
    if(elContainer) {
        const { clientHeight, offsetTop } = elContainer
        const screenH = window.innerHeight
        const halfH = screenH / 2
        const percentY =
            Math.min(clientHeight + halfH,
            Math.max(-screenH, scrollY - offsetTop) + halfH
        ) / clientHeight
        progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages))
    }
    return (
        <div className={"text-mint "} ref={refContainer}>
            <div className="max-w-5xl mx-auto pb-24 pt-12 lg:min-h-screen flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold text-center">
                <div className="leading-[1.15]">
                    {skillList.map((a, index) => (
                        <span key={index} className={`${s.skillText} inline-block after:content-['_']`} style={{
                            opacity: opacityForBlock(progress, index)
                        }}>{a}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}