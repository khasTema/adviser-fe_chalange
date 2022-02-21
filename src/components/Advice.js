import React from "react";

export default function Advice(props) {

    return(
        <>
            <p className="number">ADVICE #{props.number}</p>
            <h2 className="advice">"{props.text}"</h2>
        </>
    )

}