import React from 'react';

const SearchButton = ({onClickEvent, text}) => (
    <button onClick={event => onClickEvent(event)}>{text}</button>
);

SearchButton.defaultProps = {
    onClickEvent: (event) => event.preventDefault(),
    text: "Search"
}

export default SearchButton;