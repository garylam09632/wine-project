import { React, Component } from 'react'
import {
    InputContainer,
    Label,
    InputField,
} from './InputElement'

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: "",
            height: "0px",
            display: "none"
        }
    }

    onLabelClick = () => {
        this.setState({ height: "100%", display: "block" });
    }

    render() {
        return (
            <InputContainer>
                <InputField placeholder="&nbsp;"/>
                <Label>{ this.props.label }</Label>
            </InputContainer>
        )
    }

}

export default Input
