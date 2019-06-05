import React from 'react';
import ParkName from '../../atoms/park-data/ParkName';
import ParkDistance from '../../atoms/park-data/ParkDistance';
import ParkAddress from '../../atoms/park-data/ParkAddress';
import ParkPrice from '../../atoms/park-data/ParkPrice';
import ParkLineTemplate from '../../molecules/park-data/ParkLineTemplate';

const style = {
    width: "100%",
    border: "1px solid black",
}

const ParkCard = ({nome, distancia, endereco, preco}) => (
    <div className="grouping" style={style}>
        <ParkLineTemplate data1={<ParkName data={nome}/>} data2={<ParkDistance data={`${distancia} km`}/>}></ParkLineTemplate>
        <ParkLineTemplate data1={<ParkAddress data={endereco.rua}/>} data2={<ParkPrice data={`R$ ${preco}`}/>}></ParkLineTemplate>
    </div>
)

export default ParkCard;