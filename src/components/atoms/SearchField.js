import React from 'react';

const SearchField = ({ onValueChange, value }) => (
    <input value={value} onChange={event => onValueChange(event.target.value)} />
);

SearchField.defaultProps = {
    onValueChange: (value) => console.log(`Not emiting`),
    value: "" 
}

export default SearchField;