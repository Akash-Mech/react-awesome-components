import React from 'react'
import { useState, CSSProperties } from "react";

import { GridLoader } from 'react-spinners';



const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

export const Spinner = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#fb923c");
    return (
        <div>
            <GridLoader color={color} loading={loading} cssOverride={override} size={50} />
        </div>
    )
}
