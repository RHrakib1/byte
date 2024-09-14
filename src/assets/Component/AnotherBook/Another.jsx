import { useState } from "react";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import { MdBookmarkAdd } from "react-icons/md";
import { saveblog } from "../Utiliti/Utiliti";

const Another = () => {
    const [tab, settab] = useState(0)
    const anoth = useLoaderData()
    const {  readable_publish_date, title, tags, reading_time_minutes, comments_count, public_reactions_count, } = anoth
    const handleclickBook = (anoth) => {
        console.log(anoth);
        saveblog(anoth)
    }

    return (
        <div className="max-w-2xl px-6 py-16 mx-auto space-y-12 ">
            <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
                <div className="space-y-6 p-5">
                    <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
                    <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
                        <div className="flex justify-between md:space-x-2">
                            <p className="text-sm">{reading_time_minutes}min read • {readable_publish_date}</p>
                            <p className="text-sm">{comments_count}min read • {public_reactions_count}views</p>
                        </div>
                    </div>
                    <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                        <NavLink to='' onClick={() => settab(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600 ${tab === 0 ? 'border border-b-0' : 'border-b'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <span>Content</span>
                        </NavLink>
                        <NavLink to='author' onClick={() => settab(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600 ${tab === 1 ? 'border border-b-0' : 'border-b'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                            <span>Author</span>
                        </NavLink>
                        <div onClick={() => handleclickBook(anoth)} className="bg-primary ml-4 p-4 rounded-full hover:bg-opacity-30 bg-opacity-20 cursor-pointer hover:scale-105">
                            <MdBookmarkAdd size={20} />
                        </div>
                    </div>
                    <Outlet></Outlet>
                </div>
            </article>
            <div>
                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
                    {
                        tags.map((tag, idx) => <a key={idx} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline ">#{tag}</a>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Another;