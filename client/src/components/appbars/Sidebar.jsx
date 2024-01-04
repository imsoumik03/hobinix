import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import Searchbar from './Searchbar';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Sidebar = ({ hidden }) => {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.up('sm'));
    const md = useMediaQuery(theme.breakpoints.up('md'));
    const navigate = useNavigate();
    const [state, setState] = useState({ left: false });
    const [path, setPath] = useState("");

    const toggleDrawer = (anchor, open) => event => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    return (
        <div
            className={` bg-neutral-950 border-neutral-600 border-r-2 inline-block ${
                hidden ? 'max-sm:hidden h-[90vh]' : 'h-[100vh]'
            }`}
            style={{ width: `${sm ? `${md ? '17vw' : '12vw'}` : '45vw'}` }}
        >
            {!hidden && (
                <div className="border-b-2 border-neutral-600 h-[10vh] flex justify-around items-center text-white font-serif text-2xl font-semibold tracking-wide">
                    HOBINIX
                </div>
            )}
            <div className="flex flex-col justify-around py-4 px-2 space-y-4 text-lg font-semibold">
                    <div
                        className={`flex items-end cursor-pointer py-1 px-2 pr-20 space-x-6 rounded-lg hover:bg-neutral-800 hover:outline-1 hover:outline-double hover:outline-offset-1 hover:outline-zinc-100 max-md:pr-2 ${
                            path === 'home' && 'bg-neutral-900 border-[1px] border-neutral-600'
                        }`}
                        onClick={() => {
                            navigate('/music');
                            setPath("home");
                            console.log(path)
                        }}
                    >
                        <HomeIcon
                            className="text-teal-100"
                            sx={{ fontSize: 32 }}
                        />
                        <span className="tracking-wide text-zinc-100 sm:max-md:hidden">
                            Home
                        </span>
                    </div>
                {['left'].map(anchor => (
                    <div key={anchor}>
                        <div
                            className="flex items-end cursor-pointer py-1 px-2 pr-20 space-x-6 rounded-lg hover:bg-neutral-800 hover:outline-1 hover:outline-double hover:outline-offset-1 hover:outline-zinc-100 max-md:pr-2"
                            onClick={toggleDrawer(anchor, true)}
                        >
                            <SearchIcon
                                className="text-teal-100"
                                sx={{ fontSize: 32 }}
                            />
                            <span className="tracking-wide text-zinc-100 sm:max-md:hidden">
                                Search
                            </span>
                        </div>
                        <SwipeableDrawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                            className=" bg-transparent"
                        >
                            <Searchbar />
                        </SwipeableDrawer>
                    </div>
                ))}
                <div
                    className={`flex items-end cursor-pointer py-1 px-2 pr-20 space-x-6 rounded-lg hover:bg-neutral-800 hover:outline-1 hover:outline-double hover:outline-offset-1 hover:outline-zinc-100 max-md:pr-2 ${
                        path === 'post' && 'bg-neutral-900 border-[1px] border-neutral-600'
                    }`}
                    onClick={() => {
                        navigate('/music/post');
                        setPath('post');
                        console.log(path)
                    }}
                >
                    <AddCircleOutlineIcon
                        className="text-teal-100"
                        sx={{ fontSize: 32 }}
                    />
                    <span className="tracking-wide text-zinc-100 sm:max-md:hidden">
                        Post
                    </span>
                </div>
                <div className="flex items-end cursor-pointer py-1 px-2 pr-20 space-x-6 rounded-lg hover:bg-neutral-800 hover:outline-1 hover:outline-double hover:outline-offset-1 hover:outline-zinc-100 max-md:pr-2">
                    <FavoriteTwoToneIcon
                        className="text-teal-100"
                        sx={{ fontSize: 32 }}
                    />
                    <span className="tracking-wide text-zinc-100 sm:max-md:hidden">
                        Liked
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
