import React from 'react'
import { BtnWrapper, Btn } from './ButtonElements'

const Button = ({ text, to, hoverColor }) => {

    if (hoverColor === undefined) {
        hoverColor = "#8B9192";
    }

    return (
        <BtnWrapper>
            <Btn to={ to } hoverColor={ hoverColor }>{ text }</Btn>
        </BtnWrapper>
    )
}

export default Button
