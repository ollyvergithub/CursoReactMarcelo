import React from 'react';
import SilvaFamily from './Componentes/SilvaFamily';
import Family from './Componentes/Family';
import Member from './Componentes/Member';

const App = ()=> (
    <div className="container">
        <h1>Exercícios React </h1>
        {/*<SilvaFamily/>*/}
        <Family>
            <Member name="Ollyver" lastName="Ottoboni"/>
            <Member name="Pietra" lastName="Eu Te Amo"/>
        </Family>

    </div>
);

export default App;
