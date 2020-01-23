import React from 'react';
import styled from 'styled-components';


    const TopHeader = styled.div`
    background-color:#333;
    height:80px;
    display:flex;
    justify-content:space-around;
    box-shadow:0 3px 5px #000;
    `;

    const Gall = styled.button`
    
    background-color:rgba(0,0,0,0);
    border:solid blue;
    padding:5px 20px;
    font-size:2rem;
    font-weight:bolder;
    -webkit-text-fill-color:azure;
    color:azure;
    cursor:pointer;
    `;

    const Btn = styled.button`
    
    background-color:rgba(0,0,0,0);
    border:solid ;
    padding:5px 20px;
    -webkit-text-fill-color:azure;
    color:azure;
    font-weight:bolder;
    font-size:2rem;
    cursor:pointer;
    `;
   

  
export default function Header(props){

  

                return (
                    <TopHeader>
                        <Btn>Home</Btn>
                        <Gall>Gallery</Gall>
                        <Btn>About</Btn>
                        <Btn>Contact</Btn>
                    </TopHeader>
                )
}


