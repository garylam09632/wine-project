import styled from 'styled-components'

const basicColor = "#fff";
const focusColor = "#000";

export const InputContainer = styled.div`
    width: 100%;
    position: relative;
    transition: 0.5s ease-in-out;
`;

export const Label = styled.span`
    position: absolute;
    top: 25px;
    left: 5px;
    font-size: 16px;
    font-family: "Josefin Sans";
    color: ${basicColor};
    font-weight: 500;
    transform-origin: 0 0;
    transform: translate3d(0,0,0);
    transition: all .2s ease;
    pointer-events: none;

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

export const InputField = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    border: 0;
    outline: 0;
    font-family: "Josefin Sans";
    padding: 16px 12px 0px 6px;
    height: 56px;
    font-size: 16px;
    font-weight: 400;
    background: transparent;
    box-shadow: inset 0 -1px 0 ${basicColor};
    color: ${basicColor};
    transition: all .15s ease;

    &:hover {
        background: rgba(${basicColor}, .04);
        box-shadow: inset 0 -1px 0 rgba(${basicColor}, .5);
    }
    
    &:not(:placeholder-shown)
      + ${Label} {
        color: rgba(${basicColor}, .5);
        transform: translate3d(0,-18px,0) scale(.75);
    }
    
    &:focus {
        color: ${focusColor};
        box-shadow: inset 0 -2px 0 ${focusColor};
    }

    &:focus + ${Label} {
        color: ${focusColor};
        transform: translate3d(0, -18px,0) scale(.75);
    }

    @media screen and (max-width: 768px) {
        font-size: 13px;

        &:not(:placeholder-shown)
            + ${Label} {
            transform: translate3d(0,-15px,0) scale(.75);
        }

        &:focus + ${Label} {
            color: ${focusColor};
            transform: translate3d(0, -15px,0) scale(.75);
        }
    }
`;