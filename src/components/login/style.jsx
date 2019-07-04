import styled from 'styled-components';

const Styled = styled.div`
    // width: 100%;

    .login {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .input {
        outline: none;
        border-radius: 5px;
        width: 300px;
        padding: 10px;
        margin: 10px;
    }
    .button {
        width: 50%;
        padding: 10px;
        border-radius: 5px;
        outline: none;
        cursor: pointer;
        margin-top: 30px;
        background-color: #00ffff;
    }
`;
export { Styled };