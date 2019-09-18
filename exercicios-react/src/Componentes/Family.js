import React from 'react'

export default props => (
    <div>
        <h1>Componente Family, usando props.children</h1>
        {/*{props.children}*/}

        {/*
        Este método clona somente um filho nesse caso só um Member!!!
        {React.cloneElement(props.children, {...props})}
        */}

        {React.Children.map(props.children, child => (React.cloneElement(child, {...props})))}
    </div>

);