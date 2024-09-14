import React, { useEffect, useState } from 'react';
import Blog from '../Blogs/Blog';
import { deleteblog, getblog } from '../Utiliti/Utiliti';

const Bookmarks = () => {
    const [blogs, setblogs] = useState([])
    useEffect(() => {
        const localstorage = getblog()
        setblogs(localstorage)
    }, [])
    const hendledelete = (id) => {
        deleteblog(id)
        const localstorage = getblog()
        setblogs(localstorage)

    }
    return (
        <div className='grid px-4 sm:px-8 lg:px-12 py-8 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {
                blogs.map((copyblogs, idx) => <Blog hendledelete={hendledelete} deleteable={true} key={idx} blog={copyblogs}></Blog>)
            }
        </div>
    );
};

export default Bookmarks;