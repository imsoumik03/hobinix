import React from 'react';
import VideoPlayer from '../../components/dance-gallery/VideoPlayer';
import Product from '../../assets/tests/Product.mp4';
import Park from '../../assets/tests/Park.mp4';

const VideoById = () => {
    return (
        <div className="fixed w-screen h-screen bg-slate-800 flex p-3 justify-center text-zinc-200">
            <VideoPlayer video={Park} />
        </div>
    );
};

export default VideoById;
