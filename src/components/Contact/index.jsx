import React from 'react'

export default function Contact() {
    return (
        <div className="flex flex-col w-screen align-center text-center justify-center" id={"contact"}>
            <div className="text-mint text-2xl lg:text-5xl font-bold">
                contact
            </div>
            <a className="text-indigo-500 pt-5" href={"mailto:franzegatta@gmail.com"}>do you really need to?</a>
        </div>
    )
}