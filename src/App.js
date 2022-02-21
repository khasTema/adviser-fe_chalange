import React, { useState, useEffect } from "react";

import Card from './components/Card';
import Advice from "./components/Advice";
import ReloadBtn from "./components/ReloadBtn";
import ImageLine from "./components/ImageLine";


export default function App() {

    const [ newAdvice, setNewAdvice ] = useState('');
    const [ reload, setReload ] = useState(false);

    useEffect(() => {
        fetch('https://api.adviceslip.com/advice')
            .then(res => res.json())
            .then(data => setNewAdvice(data.slip))
    }, [reload])

    return (
        <Card>
            <Advice number={newAdvice.id} text={newAdvice.advice}/>
            <ImageLine />
            <ReloadBtn reloadFunc={() => setReload(prev => !prev)}/>
        </Card>
    )
}