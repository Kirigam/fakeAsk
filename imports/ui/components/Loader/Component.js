import stylde from 'styled-components';



const Loader = stylde.div`
    border: 4px solid #dbe2ec;
    border-top: 4px solid #807eeb;
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
