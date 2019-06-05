import React from 'react';

const createTextComponent = (style) => ({data}) => (
    <p style={style}>{data}</p>
)

export default createTextComponent;