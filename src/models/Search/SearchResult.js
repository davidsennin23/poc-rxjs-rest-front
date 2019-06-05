import { Subject } from "rxjs";

const subject = new Subject();
class SearchResult {

    setSearchResult(value) {
        subject.next(value);
    }

    subscribe(func) {
        subject.subscribe(func);
    }

    unsubscribe(func) {
        subject.unsubscribe(func);
    }

}

const result = new SearchResult();

export default result;