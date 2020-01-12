import React from "react";

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 3,
            width: '80%'
        }}
    />
);

export default ColoredLine;