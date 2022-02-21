import React from "react";
import Dice from '../images/icon-dice.svg';

export default function ReloadBtn(props) {
    return(
        <div className="reload-btn" title="click for new advice" onClick={props.reloadFunc}>
            <img src={Dice} alt="dice icon" />
        </div>
    )
}