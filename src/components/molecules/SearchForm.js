import React from 'react';
import SearchField from '../atoms/SearchField';
import textEmiter from '../../behaviors/text/TextEmiterHOC';
import Search from '../../models/Search/Search';

const SearchEmiter = textEmiter("search-field")(SearchField);
const buttonPerform = (event, value) => {
    event.preventDefault();
    new Search().searchValue(value);
}
const SearchForm = ({text}) => (
    <form>
        <SearchEmiter></SearchEmiter>
        <button onClick={event => buttonPerform(event, text)}>Search</button>
    </form>
);

export default SearchForm;
