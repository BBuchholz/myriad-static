import React from 'react';
//import ReactDOM from 'react-dom';
import logoArt from './logo-seal.svg';

class Logo extends React.Component {
    render(){
        return (
            <img src={logoArt} className="App-logo" alt="logo" />
        );        
    }
}

export default Logo;