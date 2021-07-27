import React from 'react'
import { BtnWrapper, Btn } from './ButtonElements'

const Button = ({ text }) => {
    return (
        <BtnWrapper>
            <Btn>{ text }</Btn>
        </BtnWrapper>
    )
}

export default Button
