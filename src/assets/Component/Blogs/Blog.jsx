import { NavLink, useNavigation } from 'react-router-dom';
// import Loadder from '../Loader/Loadder';
import { MdDeleteForever } from "react-icons/md";

const Blog = ({ blog, deleteable,hendledelete }) => {
    const { id, title, description, readable_publish_date, cover_image } = blog

    return (
        <div className='flex relative'>
            <section className="dark:bg-gray-100 dark:text-gray-800 hover:scale-105">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <NavLink to={`/bookmarkanother/${id}`} className="  max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 rounded-lg border-primary hover:border-secondary border-opacity-30 hover:scale-105">
                        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image} />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                            <span className="text-xs dark:text-gray-600">{readable_publish_date}</span>
                            <p>{description}</p>
                        </div>
                    </NavLink>
                </div>
            </section>
            {deleteable && <div onClick={() => hendledelete(id)} className='absolute  -top-4 -right-4'><MdDeleteForever className='text-2xl text-blue-500 bg-blue-600 rounded-full bg-opacity-50 hover:bg-opacity-30 hover:scale-125 '></MdDeleteForever></div>}
        </div>
    );
};

export default Blog;