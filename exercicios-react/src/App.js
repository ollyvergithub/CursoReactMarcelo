import React from 'react';
import SilvaFamily from './Componentes/SilvaFamily';
import Family from './Componentes/Family';
import Member from './Componentes/Member';
import ClassComponent from './Componentes/ClassComponent'
import ClassComponentComEstado from './Componentes/ClassComponentComEstado'
import ClassComponentComSemEstado from './Componentes/ClassComponentComSemEstado';

const App = ()=> (
    <div className="container">
        <h1>Exercícios React </h1>

        <ClassComponentComEstado initialValue = {10} label="Label passada por parâmetro"/>

        <ClassComponentComSemEstado initialValue = 'Digite e altere-me!'/>

        <Family lastName="Ottoboni">
            <Member name="Ollyver"/>
            <Member name="Pietra"/>
            <Member name="Susi"/>
        </Family>

        <ClassComponent valor="AQUI O VALOR DO PARÂMETRO"/>

    </div>
);

export default App;
