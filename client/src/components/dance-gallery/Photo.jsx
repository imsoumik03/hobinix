import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import gojo from '../../assets/tests/Gojo.jpeg';
import sukuna from '../../assets/tests/Sukuna.jpeg';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Photo = ({
    post,
    close,
    isLiked,
    likeNum,
    handleLike,
    isSaved,
    handleSave,
}) => {
    const theme = useTheme();
    const md = useMediaQuery(theme.breakpoints.up('md'));
    const lg = useMediaQuery(theme.breakpoints.up('lg'));

    const [fullScreen, setFullScreen] = useState(false);

    const handleScreen = () => {
        if (fullScreen) setFullScreen(false);
        else setFullScreen(true);
    };

    return (
        <Container
            className={`relative flex w-screen h-screen gap-4 py-5 pt-16 p- px-5 overflow-y-auto ${
                md
                    ? 'justify-around items-start'
                    : 'flex-col justify-start items-center'
            }`}
        >
            <div
                className="bg-[#cccccc66] w-8 h-8 rounded-full absolute top-6 left-10 z-50 flex justify-center items-center cursor-pointer hover:text-slate-700 text-slate-800"
                onClick={close}
            >
                <ChevronLeftRoundedIcon sx={{ fontSize: 34 }} />
            </div>
            <div
                className={`${
                    fullScreen && 'w-full h-full fixed top-0 left-0 blur'
                }`}
            />
            <div
                className={`flex justify-center${
                    fullScreen
                        ? 'w-screen h-screen fixed top-0'
                        : md
                        ? 'w-3/5'
                        : 'w-11/12'
                }`}
            >
                <img
                    src={post.url}
                    className={`rounded-2xl object-contain drop-shadow-3xl cursor-pointer ${
                        fullScreen
                            ? 'max-w-screen max-h-screen cursor-zoom-out'
                            : 'max-w-full max-h-[88vh] cursor-zoom-in'
                    }`}
                    onClick={handleScreen}
                    fetchpriority="high"
                />
            </div>
            <div
                className={`${md && 'w-2/6'} gap-4 flex flex-col ${
                    fullScreen && 'hidden'
                }`}
            >
                <span
                    className={`text-zinc-200 ${
                        lg ? 'text-3xl' : 'text-2xl'
                    } font-semibold tracking-wide text-center`}
                >
                    {post.caption}
                </span>
                <div className="text-zinc-200 flex gap-5">
                    <div className="flex justify-between items-start flex-wrap w-full">
                        <div>
                            <span className="text-slate-400 text-sm whitespace-pre">
                                Posted By
                            </span>
                            <span
                                className={`text-zinc-200 ${
                                    lg ? 'text-xl' : 'text-lg'
                                } font-semibold cursor-pointer hover:underline hover:underline-offset-1`}
                            >
                                {post.postedBy}
                            </span>
                        </div>
                    </div>
                    <div className="cursor-pointer" onClick={handleSave}>
                        {isSaved && <BookmarkAddedIcon sx={{ fontSize: 30 }} />}
                        {!isSaved && (
                            <BookmarkAddOutlinedIcon sx={{ fontSize: 30 }} />
                        )}
                    </div>
                </div>
                <div className="flex items-center gap-4 text-white text-lg">
                    <div className="cursor-pointer" onClick={handleLike}>
                        {isLiked && <FavoriteIcon sx={{ fontSize: 30 }} />}
                        {!isLiked && (
                            <FavoriteBorderIcon sx={{ fontSize: 30 }} />
                        )}
                    </div>
                    <span className="font-semibold">{likeNum}</span>
                </div>
            </div>
        </Container>
    );
};

const Container = styled.div`
    .blur {
        backdrop-filter: blur(4px);
    }
`;

export default Photo;
