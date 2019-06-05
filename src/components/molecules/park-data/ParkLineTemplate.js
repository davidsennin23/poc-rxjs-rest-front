import React from 'react';

const style = {
    width: "100%",
    padding: "5px 10px",
    display: "flex",
    alignItems: "center"
}

const panel = {
    width: "50%",
    float: "left",
}

const ParkLineTemplate = ({data1, data2}) => (
    <div className="grouping" style={style}>
        <div className="grouping" style={panel}>{data1}</div>
        <div className="grouping" style={panel}>{data2}</div>
    </div>
)

export default ParkLineTemplate;