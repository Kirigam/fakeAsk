import React from 'react';
import stylde from 'styled-components';



const Loader = stylde.div`
    border: 16px solid #807eeb;
    border-top: 16px solid #3498db;
    border-radius: 50%;
    width: 60px;
    margin: 15% auto;
    height: 60px;
    animation: spin 2s linear infinite;
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

export default Loader;