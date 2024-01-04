import React, { useState } from 'react';
import styledComponent from 'styled-components';
import Popup from 'reactjs-popup';
import {
    Button,
    IconButton,
    Box,
    Stepper,
    Step,
    StepLabel,
    TextField,
    styled
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ThumbnailPost from '../utils/ThumbnailPost';
import SongUpload from './SongUpload';
import SongList from './SongList';
import { useDispatch } from 'react-redux';
import { albumUpload } from '../../actions/musicActions';

const Post = () => {
    const dispatch = useDispatch();
    const steps = ['Create your album', 'Add thumbnail', 'Add name'];

    const [songs, setSongs] = useState([]);
    const [songThumbs, setSongThumbs] = useState([]);
    const [songDetails, setSongDetails] = useState([]);
    const [thumb, setThumb] = useState();
    const [thumbUrl, setThumbUrl] = useState();
    const [name, setName] = useState('');
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        if (songs.length === 0 && activeStep === 0) {
            console.log('upload a post first');
            return;
        }
        if (!thumb && activeStep === 1) {
            console.log('upload thumbnail first');
            return;
        }
        if (activeStep === steps.length - 1) handleSubmit();
        else setActiveStep(prevActiveStep => prevActiveStep + 1);
        console.log(songDetails);
    };
    const handleSubmit = () => {
        console.log(thumb, songThumbs, songDetails, songs, name);
        const formData = new FormData();
        formData.append('albumThumb', thumb);
        songThumbs.forEach(e => formData.append('songThumbs', e));
        songs.forEach(e => formData.append('songs', e));
        formData.append('songDetails', songDetails);
        formData.append('albumDetails', name);
        dispatch(albumUpload(formData));
    };

    return (
        <Container className="w-full h-full py-2 px-5 overflow-y-auto text-zinc-200">
            <div className="sm:text-4xl text-3xl font-semibold whitespace-nowrap tracking-wide text-center py-3 pb-6 sm:px-10">
                Upload Your Album Here
            </div>
            <Stepper activeStep={activeStep}>
                {steps.map(label => {
                    return (
                        <Step key={label}>
                            <StepLabel>
                                <span className="text-white font-semibold text-base">
                                    {label}
                                </span>
                            </StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <form>
                {activeStep === 0 ? (
                    <div className=" py-4 relative">
                        <Popup
                            trigger={
                                <div className="group bg-emerald-800 rounded-full drop-shadow-3xl z-20 absolute top-6 right-0">
                                    <span className="pl-4 font-semibold hidden group-hover:inline">
                                        Add Song
                                    </span>
                                    <AddButton>
                                        <AddIcon
                                            sx={{
                                                fontSize: 40,
                                                color: 'white',
                                            }}
                                        />
                                    </AddButton>
                                </div>
                            }
                            modal
                            nested
                        >
                            {close => (
                                <SongUpload
                                    songs={songs}
                                    setSongs={setSongs}
                                    songThumbs={songThumbs}
                                    setSongThumbs={setSongThumbs}
                                    songDetails={songDetails}
                                    setSongDetails={setSongDetails}
                                    close={close}
                                />
                            )}
                        </Popup>
                        <div className="mt-10">
                            <SongList upload songs={songDetails} />
                        </div>
                    </div>
                ) : activeStep === steps.length - 1 ? (
                    <div className="flex justify-center pt-16 p-6">
                        <TextField
                            id="outlined-error"
                            label="Album Name"
                            variant="outlined"
                            value={name}
                            onChange={e => {
                                setName(e.target.value);
                            }}
                            placeholder="Enter Your Album Name"
                        />
                    </div>
                ) : (
                    <ThumbnailPost
                        setThumb={setThumb}
                        thumbUrl={thumbUrl}
                        setThumbUrl={setThumbUrl}
                    />
                )}
            </form>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    pt: 2,
                    color: 'white',
                }}
            >
                <Button
                    variant="contained"
                    disabled={activeStep === 0}
                    onClick={() => {
                        setActiveStep(prevActiveStep => prevActiveStep - 1);
                    }}
                    sx={{ mr: 1, position: 'fixed', bottom: '20px' }}
                >
                    Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />

                <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{
                        color: 'white',
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        backgroundColor: 'rgb(6,95,70)'
                    }}
                >
                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>
            </Box>
        </Container>
    );
};

const Container = styledComponent.div`
    .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
        color: white;
    }
    .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
        border: 2px solid #beffd2;
    }
    .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root {
        color: #beffd2d9;
    }
    .MuiOutlinedInput-notchedOutline {
        color: #5acb9a;
    }
    label.Mui-focused {
        color: white;
    }
    .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
        min-width: 28vw;
        min-height: 1.5rem;
    }
    .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
        .MuiOutlinedInput-notchedOutline {
        border: 3px solid #4acaaa;
    }
    .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root:hover
        .MuiOutlinedInput-notchedOutline {
        border: 2px solid #83d3bfde;
    }
`;

export default Post;

const AddButton = styled(IconButton)(
    ({theme}) => `
        &:hover{
            transform: rotate(20 deg)
        }
    `
)