import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../actions/userActions';
import validator from 'validator';
import styled from 'styled-components';
import Background from '../../components/utils/Background';
import Appbar from '../../components/appbars/Appbar';
import TextField from '@mui/material/TextField';
import Button from '../../components/utils/Button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector(state => state.authUser);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = () => {
        if (!validator.isEmail(email) || email.length === 0) {
            toast.error("Enter valid email")
            return;
        }
        // password validation
        dispatch(loginUser({ email, password }));
    };
    useEffect(() => {
        console.log('login', state);
        console.log(state.auth);
        // if(state.auth) navigate('/music')
    }, [state.auth]);

    return (
        <div className="w-screen h-screen">
            <Background />
            <Appbar login />
            <Container className="flex flex-col gap-20 justify-center -z-10 items-center w-screen h-[90vh] text-white">
                <span className="text-5xl font-semibold tracking-wide text-center relative bottom-14">
                    Welcome Back To Hobinix
                </span>
                <form className="gap-8 flex flex-col items-center relative bottom-14">
                    <TextField
                        id="outlined-error"
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={e => {
                            setEmail(e.target.value);
                        }}
                        placeholder="Enter Your Email"
                    />
                    <TextField
                        id="outlined-error"
                        label="Password"
                        variant="outlined"
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value);
                        }}
                        placeholder="Enter Your Password"
                    />
                    <div onClick={handleSubmit}>
                        <Button value="login" style="py-2" />
                    </div>
                </form>
            </Container>
        </div>
    );
};

const Container = styled.div`
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
    }
    .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
        .MuiOutlinedInput-notchedOutline {
        border: 3px solid #4acaaa;
    }
    .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root:hover
        .MuiOutlinedInput-notchedOutline {
        border: 2px solid #83d3bfde;
    }
    .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root {
        color: #8dcabf99;
    }
`;

export default Login;
