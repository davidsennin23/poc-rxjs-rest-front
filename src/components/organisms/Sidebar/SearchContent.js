import React from 'react';
import SearchForm from '../../molecules/SearchForm';
import textConsumer from '../../../behaviors/text/TextConsumerHOC'

const SearchFieldConsumer = textConsumer("search-field")(SearchForm);
const style = {
    width: "100%",
    padding: "10px 10px",
}
const SearchContent = () => (
    <div style={style}>
        <SearchFieldConsumer></SearchFieldConsumer>
    </div>
);

export default SearchContent;