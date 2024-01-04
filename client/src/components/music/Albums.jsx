import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { targetSong, testSongs, togglePlay } from '../../actions/musicActions';
import { useDispatch, useSelector } from 'react-redux';

const Albums = ({ title, albums }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { currentSong, songs, isPlaying } = useSelector(state => state.music);

    const [showMore, setShowMore] = useState(false);

    const handlePlaying = (event, e) => {
        event.stopPropagation();
        try {
            if (songs && songs !== e.songs) {
                dispatch(testSongs(e.songs));
                dispatch(targetSong(0));
            } else dispatch(togglePlay());
            } catch (error) {
            navigate(`/music/album/${e._id}`)
        }
    };
    const handleShowMore = () => {
        if (showMore) {
            setShowMore(false);
        } else {
            setShowMore(true);
        }
    };
    const handleArtist = (event, e) => {
        event.stopPropagation();
        navigate(`/user/${e.artist.username}`);
    };

    return (
        <div className="w-full flex flex-col">
            <div
                className={`px-1 sm:px-5 pt-12 pb-3 flex justify-between items-end text-zinc-200 ${
                    !albums.length && 'hidden'
                }`}
            >
                <span className="text-3xl tracking-wide font-bold">
                    {title}
                </span>
                <span
                    className={`cursor-pointer ${
                        albums.length < 7 && 'hidden'
                    }`}
                    onClick={handleShowMore}
                >
                    Show {showMore ? 'less' : 'more'}
                    {!showMore && <ArrowDropDownIcon />}
                    {showMore && <ArrowDropUpIcon />}
                </span>
            </div>
            <div
                className={`flex gap-5 box-border p-2 sm:p-4 rounded-xl ${
                    showMore ? 'flex-wrap' : 'overflow-x-auto'
                }`}
            >
                {albums.map((e,i) => {
                    return (
                        <div
                            className="album group p-5 flex flex-col relative box-border rounded-xl gap-2 cursor-pointer shrink-0 bg-neutral-950 hover:bg-neutral-900"
                            // data-aos="fade-up"
                            data-aos-delay={`${100*i}`}
                            data-aos-duration="800"
                            // data-aos-mirror="true"
                            onClick={() => navigate(`/music/album/${e._id}`)}
                        >
                            <img
                                src={e.thumbUrl}
                                className="w-40 h-40 rounded-lg"
                            />
                            <span className="text-zinc-200 text-lg font-semibold tracking-wide">
                                {e.title}
                            </span>

                            <span
                                className="text-xs text-slate-400 hover:underline"
                                onClick={event => handleArtist(event, e)}
                            >
                                {e.artist && e.artist.username}
                            </span>
                            <div
                                className="w-10 h-10 hidden group-hover:flex justify-center items-center absolute right-10 bottom-24 shadow-black shadow-2xl bg-emerald-500 rounded-full cursor-pointer text-black"
                                onClick={event => handlePlaying(event, e)}
                            >
                                {currentSong &&
                                e.songs.find(o => o._id === currentSong._id) &&
                                isPlaying ? (
                                    <PauseIcon sx={{ fontSize: 30 }} />
                                ) : (
                                    <PlayArrowIcon sx={{ fontSize: 30 }} />
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Albums;
