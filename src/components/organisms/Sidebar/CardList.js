import React from 'react';
import ParkCard from '../park-data/ParkCard'

const cardList = {
    width: "100%",
    padding: "5px",
}

const CardList = ({data}) => (

    <div style={cardList}>
        {/* <ParkCard></ParkCard> */}
        {data.map(item =>
            <ParkCard key={item.nome} {...item}></ParkCard>
        )}
    </div>

);

export default CardList;