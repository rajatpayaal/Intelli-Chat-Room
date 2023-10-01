import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import {BiPowerOff} from 'react-icons/bi'

export default function Logout() {
    const navigate = useNavigate();
    const handleClick = async () => {
        localStorage.clear();
        navigate("/login");
    }
  return (
    <Button onClick={handleClick}>
        <BiPowerOff />
    </Button>
  )
}

const Button  = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0.5rem;
border-radius: 50% ;
background-color: #9a86f3;
border: none;
cursor: pointer;
svg{
    font-size: 1.3rem;
    color: #ebe7ff ;
}

`;
