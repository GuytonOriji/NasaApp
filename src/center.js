import React from 'react';
import styled from 'styled-components';
import './App.css';


    


 export default function Center(props){


    console.log(props);
    


    const Titlez = styled.h1`
    font-size:5rem;
    font-weight:bolder;
    color:azure;
    text-shadow:0 0 10px #000;
    text-decoration:underline;
    `;

    const Btn = styled.button`
    width:200px;
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
    display:flex;
    justify-content:center;
    align-items:flex-start; 
    overflow-y:scroll;
    height:2000px;
  `;


    const Block = styled.div`
    
    border:solid #fff;
    border-radius:20px;
    padding:10px;
    padding-bottom:0;
    width:700px;
    height:900px;
    display:flex;
    flex-direction:column;
    justify-content:center;align-items:center;
    font-size:2rem;
    font-weight:bolder;
    background-color:rgba(250,250,250,.3);
    `;

    

                return(
                    <Cen>
                            <Titlez>Have Your Own Account For NASA </Titlez>
                        <HoldingBlock>

                            <Block>
                                
                                <img className="imgg" src={props.img} alt="Picture Of the Day Image"/>
                                <div>
                                    <h2>This Is The Picture Of The Day</h2>
                                    <hr />
                                    <span>
                                        Pictures Taken By NASA are super real ok? <br />
                                        So If you make an account you will have to post <br />
                                        super real photos also alright?....cool.
                                    </span>
                                </div>
                                
                                <div><Btn>Login</Btn>  <Btn>Sign Up</Btn></div>
                                
                                
                            </Block>
                            
                            </HoldingBlock>
                    </Cen>
                )
    }