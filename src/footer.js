import React from 'react';
import styled from 'styled-components';



  export default  function Footer(props){


        const Footz = styled.div`
        position:fixed;
        bottom:0;
        left:0;
        background-color:#282c34;        
        height:auto;
        width:100%;
        `;


        const Soci = styled.ul`
        list-style:none;
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        text-shadow:0 0 5px azure;
        font-size:2.5rem;
        -webkit-text-fill-color:azure;
        color:azure;
        font-weight:bolder;

        
        `;

            return (
                    <Footz>

                        <Soci>
                            <li>@Twitter</li>
                            <li>@GitHub</li>
                            <li>@YouTube</li>
                        </Soci>
                    </Footz>
            )
    }