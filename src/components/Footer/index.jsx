import React from 'react';
import {FaGithub} from "react-icons/fa";
import io from '../../assets/images/gatsby-icon.png'

export default function Footer() {
    return(
        <div className="flex justify-center align-middle pt-20 pb-10 text-minto">
            <img src={io} alt={""} className={"w-[22px] h-[22px] mr-2"} height={"22px"} width={"22px"}/>
            <a href={"https://github.com/gattaa"} target={"_blank"} rel={"noreferrer"}><FaGithub size={22} className={"mr-2"} /></a>
            <span>&copy; 2022</span>
        </div>
    )
}