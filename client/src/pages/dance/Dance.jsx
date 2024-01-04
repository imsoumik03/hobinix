import React, { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Appbar from '../../components/appbars/Appbar';
import Sidebar from '../../components/appbars/Sidebar';
import CategoryBar from '../../components/appbars/CategoryBar';
import AllPosts from '../../components/dance-gallery/AllPosts';
import itachi from '../../assets/tests/Naruto Redraws.jpeg';
import naruto from '../../assets/tests/Naruto.png';
import aot from '../../assets/tests/AOT.jpeg';
import goku from '../../assets/tests/Goku.jpeg';
import gojo from '../../assets/tests/Gojo.jpeg';
import yuji from '../../assets/tests/Yuji.jpeg';
import sukuna from '../../assets/tests/Sukuna.jpeg';
import { useDispatch, useSelector } from 'react-redux';
import SkeletonPost from '../../components/utils/SkeletonPost';
import { getAllDances } from '../../actions/postActions';

const Dance = () => {
    const dispatch = useDispatch();
    const theme = useTheme();

    const sm = useMediaQuery(theme.breakpoints.up('sm'));
    const md = useMediaQuery(theme.breakpoints.up('md'));

    const { posts, loading } = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(getAllDances());
    }, []);

    return (
        <>
            {loading && <SkeletonPost />}
            {posts && (
                <div className="w-screen h-screen">
                    <Appbar />
                    <div className="flex w-screen" style={{ height: '90vh' }}>
                        <Sidebar hidden={true} />
                        <div
                            className="flex flex-col w-full h-full"
                            style={{
                                width: `${
                                    sm ? `${md ? '83vw' : '88vw'}` : '100vw'
                                }`,
                            }}
                        >
                            <CategoryBar />
                            <AllPosts posts={posts} dance />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Dance;

const hello = [
    {
        post: itachi,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: naruto,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: aot,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: goku,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: gojo,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: yuji,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: sukuna,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: itachi,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: naruto,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: aot,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: goku,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: gojo,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: yuji,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: sukuna,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: itachi,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: naruto,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: aot,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: goku,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: gojo,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: yuji,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: sukuna,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: itachi,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: naruto,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: aot,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: goku,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: gojo,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: yuji,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: sukuna,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: itachi,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: naruto,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: aot,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: goku,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: gojo,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: yuji,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
    {
        post: sukuna,
        postBy: 'imsoumik03',
        description:
            'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello ',
    },
];
