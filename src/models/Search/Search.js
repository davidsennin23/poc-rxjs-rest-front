import data from './data';
import result from './SearchResult';

class Search {

    searchValue(value) {
        // do async call to back-end
        const res = data;
        result.setSearchResult(data);
    }

}

export default Search;