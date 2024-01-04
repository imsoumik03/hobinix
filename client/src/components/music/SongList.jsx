import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import gojo from '../../assets/tests/Gojo.jpeg';
import sukuna from '../../assets/tests/Sukuna.jpeg';
import { useDispatch } from 'react-redux';
import { targetSong, testSongs } from '../../actions/musicActions';

const SongList = ({ upload, songs }) => {
    const dispatch = useDispatch();

    const handlePlaying = i => {
        console.log(11111111111111, songs);
        if (songs) dispatch(testSongs(songs));
        dispatch(targetSong(i));
    };

    useEffect(() => {
        // console.log("songs..........",songs)
        if (upload) dispatch(testSongs(songs));
    }, []);

    return (
        <>
            {songs.length !== 0 && (
                <Table className="table-auto w-full">
                    <thead className="text-zinc-200 italic">
                        <tr>
                            <th>#</th>
                            <th className="text-left pl-5 font-mono">Songs</th>
                            <th>
                                <TimerOutlinedIcon
                                    sx={{
                                        position: 'relative',
                                        bottom: '2px',
                                    }}
                                />
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-slate-400 cursor-pointer">
                        {songs.map((e, i) => {
                            return (
                                <tr
                                    className="hover:text-zinc-200 hover:shadow-md shadow-black"
                                    onClick={() => {
                                        handlePlaying(i);
                                    }}
                                >
                                    <td className="flex justify-center">
                                        <span>{i + 1}.</span>
                                    </td>
                                    <td className="text-left pl-5">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={e.thumbUrl}
                                                className="w-10 h-10 rounded-lg"
                                            />
                                            <div className="flex flex-col">
                                                <span className="text-zinc-100">
                                                    {e.title}
                                                </span>
                                                <span className="text-xs">
                                                    {upload
                                                        ? e.artist
                                                        : e.artist.username}
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="flex justify-center">
                                        3:00
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            )}
        </>
    );
};

const Table = styled.table`
    tbody tr {
        td {
            padding: 6px 6px;
        }
        &:hover {
            background-color: rgba(37, 76, 106, 0.5);
        }
    }
`;

export default SongList;
