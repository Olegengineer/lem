import React from 'react';
import { Styled } from './style';


class Login extends React.Component {
    render() {
        return (
            <Styled>
                <div className="login">
                    <input
                        type="text"
                        placeholder="Email"
                        className="input"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="input"
                    />
                    <button className="button">
                        Login
                    </button>
                </div>
            </Styled>
        )
    }
}

export default (Login);