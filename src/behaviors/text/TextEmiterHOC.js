import React from 'react';
import register from './TextEmiterRegister'

const textEmiter = (name) => {
    
    return (Component) => {
        const emiter = register.getRegistered(name || "default");

        return class extends React.Component {
            state = {value: ""}

            onValueChange = (value) => {
                console.log(value);
                this.setState({value: value});
                emiter.next(value);
            }

            render() {
                const {value} = this.state;
                return (
                    <Component value={value} onValueChange={this.onValueChange}></Component>
                );
            }
        }

    }
}

export default textEmiter;