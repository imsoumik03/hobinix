import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Background from '../../components/utils/Background';
import Appbar from '../../components/appbars/Appbar';
import TextField from '@mui/material/TextField';
import Button from '../../components/utils/Button';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterUser } from '../../actions/userActions';
import { toast } from 'react-toastify';

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [photo, setPhoto] = useState();
    const [url, setUrl] = useState();
    const [data, setData] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        password: '',
        confirm_password: '',
    });
    const handleChange = e => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        // console.log(data);
    };
    const handlePhoto = e => {
        if (e.target.files.length !== 0) {
            setUrl(URL.createObjectURL(e.target.files[0]));
        }
        setPhoto(e.target.files[0]);
    };
    const handleSubmit = () => {
        const trimmedData = {};
        Object.keys(data).forEach(e => (trimmedData[e] = data[e].trim()));
        setData(trimmedData);

        const { name, email, username, phone, password, confirm_password } =
            data;

        if (!(/^[A-Za-z\s]*$/.test(name) && name.length > 0)) {
            toast.error('enter valid name');
            return;
        }
        if (!validator.isEmail(email) || email.length === 0) {
            toast.error('enter valid email');
            return;
        }
        if (!validator.isAlphanumeric(username) || username.length === 0) {
            toast.error('enter valid username');
            return;
        }
        if (!/^[0-9]{10}$/.test(phone)) {
            toast.error('enter valid phone number');
            return;
        }
        if (password !== confirm_password) {
            //############################ passowrd validation ######################
            toast.error('password ');
            return;
        }
        // if (!photo) {
        //     console.log('photo');
        //     return;
        // }

        dispatch(
            RegisterUser({
                name,
                email,
                username,
                phone,
                password,
                avatar: photo,
            })
        ); //add file ################
    };

    return (
        <>
            <Background />
            <Appbar signup />
            <Container className="flex flex-col gap-10 w-screen h-[90vh] text-white py-6 overflow-y-auto">
                <span className="text-5xl font-semibold tracking-wide text-center">
                    Welcome To Hobinix
                </span>
                <form className="gap-4 flex flex-col items-center">
                    <ul className="gap-4 flex flex-col items-center">
                        <li>
                            <TextField
                                id="outlined-error"
                                label="Name"
                                name="name"
                                variant="outlined"
                                fullWidth
                                value={data.name}
                                onChange={handleChange}
                                placeholder="Enter Your Email"
                            />
                        </li>
                        <li>
                            <TextField
                                id="outlined-error"
                                label="Username"
                                name="username"
                                variant="outlined"
                                fullWidth
                                value={data.username}
                                onChange={handleChange}
                                placeholder="Enter Your Email"
                            />
                        </li>
                        <li>
                            <TextField
                                id="outlined-error"
                                label="Email"
                                name="email"
                                variant="outlined"
                                fullWidth
                                value={data.email}
                                onChange={handleChange}
                                placeholder="Enter Your Email"
                            />
                        </li>
                        <li>
                            <TextField
                                id="outlined-error"
                                label="Phone Number"
                                name="phone"
                                variant="outlined"
                                fullWidth
                                value={data.phone}
                                onChange={handleChange}
                                placeholder="Enter Your Email"
                            />
                        </li>
                        <li>
                            <TextField
                                id="outlined-error"
                                label="Password"
                                name="password"
                                variant="outlined"
                                fullWidth
                                value={data.password}
                                onChange={handleChange}
                                placeholder="Enter Your Password"
                            />
                        </li>
                        <li>
                            <TextField
                                id="outlined-error"
                                label="Confirm Password"
                                name="confirm_password"
                                variant="outlined"
                                fullWidth
                                value={data.confirm_password}
                                onChange={handleChange}
                                placeholder="Enter Your Email"
                            />
                        </li>
                    </ul>
                    {/* <div
                        class={`flex justify-center items-center gap-4 ${
                            !url && 'flex-col'
                        }`}
                    >
                        {url ? (
                            <img
                                class="h-16 w-16 object-cover rounded-full"
                                src={url}
                            />
                        ) : (
                            <span className="font-semibold">
                                Choose Profile Photo
                            </span>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            class="text-sm text-slate-500 bg-[#0006] rounded-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                            onChange={handlePhoto}
                        />
                    </div> */}
                    <div onClick={handleSubmit}>
                        <Button value="Signup" style="py-2" />
                    </div>
                </form>
            </Container>
        </>
    );
};

const Container = styled.div`
    .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root {
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
    /* .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
        min-width: 24.5vw;
    } */
    li:nth-child(odd) {
        min-width: 25vw;
    }
    li:nth-child(even) {
        min-width: 23vw;
    }

    .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
        .MuiOutlinedInput-notchedOutline {
        border: 3px solid #4acaaa;
    }
    .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root:hover
        .MuiOutlinedInput-notchedOutline {
        border: 2px solid #83d3bfde;
    }
    .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root {
        color: #8dcabf99;
    }
`;

export default SignUp;
