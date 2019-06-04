import React from 'react';
import register from './TextEmiterRegister'

const textConsumer = (name) => {
    return (Component) => {
        
        const emiter = register.getRegistered(name || "default");

        return class extends React.Component {
            state = {text: ''}
            componentDidMount() {
                emiter.subscribe(this.changeText);
            }

            componentWillUnmount() {
                emiter.unsubscribe(this.changeText);
            }

            changeText = (value) => {
                this.setState({
                    text: value
                })
            }

            render() {
                const {text} = this.state;
                return (
                    <Component value={text}></Component>
                );
            }

        }

    }
}

export default textConsumer;