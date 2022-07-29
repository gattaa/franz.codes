import React, {useState} from 'react'

export default function Contact() {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className="flex flex-col w-screen align-center text-center justify-center" id={"contact"}>
            <div className="text-mint text-2xl lg:text-5xl font-bold">
                contact
            </div>
            <div className={"flex justify-center"}>
                <div className="mt-8 w-96 text-mint">
                    <form className="grid grid-cols-1 gap-6">
                        <label className="block">
                            <span className="text-mint text-xl">your full name</span>
                            <input type="text" value={name} onChange={e => setName(e.target.value)} className="text-gray-900 mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="sandro" required minLength={4}/>
                        </label>
                        <label className="block">
                            <span className="text-mint text-xl">give me a subject.</span>
                            <input type="text" value={subject} onChange={e => setSubject(e.target.value)} className="text-gray-900  mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="i want to end you!!" required minLength={5}/>
                        </label>

                        <label className="block">
                            <span className="text-mint text-xl">what do you want to ask me?</span>
                            <textarea value={message} onChange={e => setMessage(e.target.value)} className="text-gray-900  mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" rows="3" placeholder={"why u so dumb"} required minLength={100}></textarea>
                        </label>

                        <a href={"mailto:franzegatta@gmail.com?subject=" + subject + "&body=" + message} className="py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-mint hover:bg-primary-800 focus:border-gray-500 focus:ring-0">
                            go!
                        </a>

                    </form>
                </div>
            </div>
        </div>
    )
}