import React from 'react';
import SilvaFamily from './Componentes/SilvaFamily';
import Family from './Componentes/Family';
import Member from './Componentes/Member';

const App = ()=> (
    <div className="container">
        <h1>Exercícios React </h1>
        <Family lastName="Ottoboni">
            <Member name="Ollyver"/>
            <Member name="Pietra"/>
            <Member name="Susi"/>
        </Family>

    </div>
);

export default App;
