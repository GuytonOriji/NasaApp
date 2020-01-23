import React from 'react';
import styled from 'styled-components';



    


 export default function Center(props){

    const Titlez = styled.h1`
    font-size:5rem;
    font-weight:bolder;
    color:azure;
    text-shadow:0 0 10px #000;
    text-decoration:underline;
    `;

    const Btn = styled.button`
    
    background-color:rgba(0,0,0,0);
    border:solid ;
    padding:5px 20px;
    -webkit-text-fill-color:azure;
    color:azure;
    font-weight:bolder;
    font-size:2rem;
    `;

const Cen = styled.div`
    
    flex:1;
    width:100%;
    height:100%;
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;

    
    `;

    const HoldingBlock = styled.div`
    flex:1;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;

    `;


    const Block = styled.div`
    
    border:solid #000;
    width:700px;
    height:700px;
    display:flex;
    flex-direction:column
    
    `;

                return(
                    <Cen>
                            <Titlez>Have Your Own Account For NASA </Titlez>
                        <HoldingBlock>

                            <Block>
                                <p>
                                    ejofepfj peofoej pejf pejj ejgpe2 je g
                                    ejgpe2 ejgpe2 egege ge 
                                    gegeg egegegegegegeg wewe g gew ggewg egegege
                                </p>
                                
                                <Btn>Login</Btn>
                                <Btn>Sign Up</Btn>
                                
                                <img  src={props.img} alt="Picture Of the Day Image"/>
                            </Block>
                            
                            </HoldingBlock>
                    </Cen>
                )
    }