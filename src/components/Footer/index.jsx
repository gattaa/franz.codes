import React from 'react';
import {FaGithub} from "react-icons/fa";
import {StaticImage} from "gatsby-plugin-image";

export default function Footer() {
    return(
        <div className="flex justify-center align-middle pt-20 pb-10 text-minto">
            <StaticImage src={'../../assets/images/gatsby-icon.png'} alt={""} className={"mr-2"} height={22} width={22}/> {/* TODO: make different small sized image to make lighthouse happy*/}
            <a href={"https://github.com/gattaa"} target={"_blank"} rel={"noreferrer"}><FaGithub size={22} className={"mr-2"} /></a>
            <span>&copy; 2022</span>
        </div>
    )
}