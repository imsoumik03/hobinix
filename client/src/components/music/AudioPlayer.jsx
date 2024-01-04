import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import itachi from '../../assets/tests/Naruto Redraws.jpeg';
import PauseIcon from '@mui/icons-material/Pause';
import Slider from '@mui/material/Slider';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import {
    likeSong,
    nextSong,
    prevSong,
    saveSong,
    togglePlay,
} from '../../actions/musicActions';

const AudioPlayer = () => {
    const dispatch = useDispatch();

    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState();
    const audioRef = useRef();

    const { currentSong, songs, songIndex, isPlaying } = useSelector(
        state => state.music
    );
    const { user } = useSelector(state => state.authUser);

    useEffect(() => {
        if (songs.length > 0) {
            audioRef.current.play().then(() => {
                dispatch(togglePlay(true));
            });
        }
    }, [songIndex]);

    useEffect(() => {
        if (currentTime === duration) {
            audioRef.current.currentTime = 0;
            dispatch(nextSong());
        }
    }, [currentTime]);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying)
                audioRef.current.play().then(() => {
                    console.log(2);
                });
            else audioRef.current.pause();
        }
    }, [isPlaying]);

    const handlePlaying = async () => {
        dispatch(togglePlay());
    };

    const previousSong = async () => {
        dispatch(prevSong());
    };

    const nxtSong = async () => {
        dispatch(nextSong());
    };

    const handleLike = () => {
        dispatch(likeSong(currentSong._id));
    };

    const handleSave = () => {
        dispatch(saveSong(currentSong._id));
    };

    const handleSlide = e => {
        setCurrentTime(e.target.value);
        audioRef.current.currentTime = e.target.value;
    };

    const formatTime = secs => {
        secs = Math.round(secs);
        var minutes = Math.floor(secs / 60) || 0;
        var seconds = secs - minutes * 60 || 0;
        return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    };

    return (
        <>
            {songs.length > 0 && (
                <motion.div
                    drag
                    dragConstraints={{
                        top: -600,
                        bottom: 0,
                        left: -600,
                        right: 600,
                    }}
                    whileHover={{ scale: 1.05 }}
                    className={`flex flex-col fixed bottom-3 left-1/2 z-30 rounded-xl py-2 px-6 ml-[-10rem] bg-[rgba(64,138,92,0.2)] text-zinc-200 cursor-pointer ${
                        songIndex === -1 && 'hidden'
                    }`}
                >
                    <Container>
                    <div className="flex items-center gap-5 w-64">
                        <img
                            src={songs[songIndex].thumbUrl}
                            className="w-20 h-20 rounded-tl-xl"
                        />
                        <div className="flex flex-col gap-3 w-full">
                            <div className="flex flex-col h-min">
                                <div className="flex justify-between items-end">
                                    <span className="text-lg font-semibold cursor-pointer hover:underline">
                                        {songs[songIndex].title}
                                    </span>
                                    <div className="flex gap-3">
                                        <div
                                            className="cursor-pointer"
                                            onClick={handleLike}
                                        >
                                            {songs[songIndex].likes.includes(
                                                user._id
                                            ) ? (
                                                <FavoriteIcon />
                                            ) : (
                                                <FavoriteBorderIcon />
                                            )}
                                        </div>
                                        <div
                                            className="cursor-pointer"
                                            onClick={handleSave}
                                        >
                                            {songs[songIndex].saves.includes(
                                                user._id
                                            ) ? (
                                                <BookmarkAddedIcon />
                                            ) : (
                                                <BookmarkAddOutlinedIcon />
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[0.7rem] cursor-pointer hover:underline">
                                        {songs[songIndex].artist}
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex justify-start items-center gap-3">
                                    <SkipPreviousIcon
                                        className="cursor-pointer"
                                        sx={{ fontSize: 30 }}
                                        onClick={previousSong}
                                    />
                                    <div
                                        className="w-8 h-8 flex justify-center items-center bg-zinc-300 rounded-full cursor-pointer text-black"
                                        onClick={handlePlaying}
                                    >
                                        {isPlaying && <PauseIcon />}
                                        {!isPlaying && <PlayArrowIcon />}
                                    </div>
                                    <SkipNextIcon
                                        className="cursor-pointer"
                                        sx={{ fontSize: 30 }}
                                        onClick={nxtSong}
                                    />
                                </div>
                                <span className="text-xs">
                                    {formatTime(currentTime)}
                                </span>
                            </div>
                        </div>
                    </div>
                    <Slider
                        size="small"
                        aria-label="Small"
                        min={0}
                        max={duration}
                        value={currentTime}
                        onChange={handleSlide}
                    />
                    <audio
                        src={songs[songIndex].url}
                        autoPlay
                        ref={audioRef}
                        onTimeUpdate={e => {
                            setCurrentTime(audioRef.current.currentTime);
                        }}
                        onLoadedMetadata={() => {
                            setDuration(audioRef.current.duration);
                        }}
                    />
                    </Container>
                </motion.div>
            )}
        </>
    );
};

const Container = styled.div`
    .MuiSlider-track {
        color: green;
    }
    .MuiSlider-thumb {
        color: white;
        width: 12px;
        height: 12px;
    }
    .MuiSlider-rail {
        color: white;
    }
`;

export default AudioPlayer;
