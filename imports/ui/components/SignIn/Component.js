import React from 'react';

const SiginIn = () => {
    return (
        <form onSubmit={ e => e.preventDefault() }>
            <input type='email' ref={ input => input } />
            <input type='password' ref={ input => input } />
            <button type='submit'>Sigin In</button>
        </form>
    );
};

export default class SiginIn extends React.Component {
    siginInUser = e => {
        e.preventDefault();
        console.log(this.email + ' ' + this.password);
        
    };

    render() {
        return (
            <form onSubmit={this.siginInUser}>
                <input type='email' ref={ input => (this.email = input) } />
                <input type='password' ref={ input => (this.password = input) } />
                <button type='submit'>Sigin In</button>
            </form>
        );
    }
};