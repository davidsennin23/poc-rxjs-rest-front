import React from 'react';
import SearchContent from './SearchContent'
import CardList from './CardList'
import ResultComponent from '../../../models/Search/ResultComponent';

const CardListResult = ResultComponent(CardList);

const Sidebar = () => (

    <div>
        <SearchContent></SearchContent>
        <CardListResult></CardListResult>
    </div>

);

export default Sidebar;