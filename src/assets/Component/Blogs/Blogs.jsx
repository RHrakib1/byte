import React from 'react';
import { NavLink, useLoaderData, useNavigation } from 'react-router-dom';
import Blog from './Blog';
import Loadder from '../Loader/Loadder';

const Blogs = () => {
    const blogs = useLoaderData()
    const navigation = useNavigation()
    // if(navigation.state === 'Loadder') return <Loadder></Loadder>
    if (navigation.state === 'loading') return <Loadder></Loadder>

    return (
        <div>
            <NavLink to='' className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50 mb-5 rounded-xl">
                <img src={blogs[0].cover_image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                <div className="p-6 space-y-2 lg:col-span-5">
                    <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogs[0].title}</h3>
                    <span className="text-xs dark:text-gray-600">{blogs[0].readable_publish_date}</span>
                    <p>{blogs[0].description}</p>
                </div>
            </NavLink>
            <div className='grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                {
                    blogs.slice(1, 19).map((copyblogs, idx) => <Blog key={idx} blog={copyblogs}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;
