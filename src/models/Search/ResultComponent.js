import React from 'react';
import result from '../../models/Search/SearchResult'

const ResultComponent = (Component) => {

    return class extends React.Component {
    
        state = {data: []};

        componentDidMount() {
            result.subscribe(this.searchData);
        }

        componentWillUnmount() {
            result.unsubscribe(this.searchData);
        }

        searchData = (data) => {
            this.setState({data});
        }

        render() {
            const { data } = this.state;
            return (
                <Component data={data}></Component>
            )
        }

    }

}

export default ResultComponent;