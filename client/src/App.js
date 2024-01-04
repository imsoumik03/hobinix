import { useEffect, Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './pages/user/Login';
import Logout from './pages/user/Logout';
import SignUp from './pages/user/SignUp';
import Profile from './pages/user/Profile';
import Music from './pages/music/Music';
import Gallery from './pages/gallery/Gallery';
import Dance from './pages/dance/Dance';
import AlbumById from './pages/music/AlbumById';
import AlbumPost from './pages/music/AlbumPost';
import VideoById from './pages/dance/DanceById';
import DancePost from './pages/dance/DancePost';
import PhotoById from './pages/gallery/PhotoById';
import PhotoPost from './pages/gallery/PhotoPost';
import Error404 from './pages/Error404';
import AudioPlayer from './components/music/AudioPlayer';
import GoToTop from './components/utils/GoToTop';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './actions/userActions';
import PrivateRoute from './routes/PrivateRoute';
import Spinner from './components/utils/Spinner';
import AOS from 'aos';

function App() {
    const location = useLocation();
    const dispatch = useDispatch();

    const { auth } = useSelector(state => state.authUser);

    useEffect(() => {
        console.log('app');
        dispatch(loadUser());
    }, [dispatch]);

    // useEffect(() => {
    //     AOS.init()
    //   })
    return (
        <>
            {/* <Suspense fallback={<Spinner/>}> */}
            {auth && <AudioPlayer />}

            <ToastContainer />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/logout" element={<Logout />} />
                <Route
                    path="/user/:username"
                    element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/"
                    element={<Navigate to="/loin" />}
                />
                <Route
                    path="/music"
                    element={
                        <PrivateRoute>
                            <Music />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/gallery"
                    element={
                        <PrivateRoute>
                            <Gallery />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/dance"
                    element={
                        <PrivateRoute>
                            <Dance />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/music/album/:id"
                    element={
                        <PrivateRoute>
                            <AlbumById />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/gallery/:id"
                    element={
                        <PrivateRoute>
                            <PhotoById />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/dance/:id"
                    element={
                        <PrivateRoute>
                            <VideoById />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/music/post"
                    element={
                        <PrivateRoute>
                            <AlbumPost />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/gallery/post"
                    element={
                        <PrivateRoute>
                            <PhotoPost />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/dance/post"
                    element={
                        <PrivateRoute>
                            <DancePost />
                        </PrivateRoute>
                    }
                />
                <Route path="*" element={<Error404 />} />
            </Routes>
            {/* </Suspense> */}
        </>
    );
}

export default App;
