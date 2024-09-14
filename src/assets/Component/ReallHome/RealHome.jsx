import React from 'react';

const RealHome = () => {
    return (
        <div className='mb-28'>
            <h1 className='text-5xl font-extrabold my-2'>Welcome to ByteBlaze</h1>
            <p>ByteBlaze is the bridge between the complex world of technology <br /> and the curious minds eager to understand it</p>
            <div className='flex items-center justify-center gap-5 mt-4'>
                <button className="btn btn-primary">Read Blogs</button>
                <button className="btn btn-primary">BookMarks</button>
            </div>
        </div>
    );
};

export default RealHome;