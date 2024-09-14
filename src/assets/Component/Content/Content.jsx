import { useLoaderData } from 'react-router-dom';
import Markdown from "react-markdown"
import rehypeRaw from 'rehype-raw';


const Content = () => {
    const blog = useLoaderData()
    const { social_image, body_html, profile_image_90 } = blog

    return (
        <div>

            <img src={social_image} alt="" />
            <img src={profile_image_90} alt="" />
            {/* <p>{github_username}</p> */}
            <Markdown rehypePlugins={[rehypeRaw]}> {body_html}</Markdown>

        </div>
    );
};

export default Content;