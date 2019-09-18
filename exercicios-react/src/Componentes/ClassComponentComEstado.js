import React, {Component} from 'react';

class ClassComponentComEstado extends Component{

    constructor(props){
        super(props)

        this.state = {value: this.props.initialValue}
    }

    sum(delta){
        this.setState({value: this.state.value + delta})
    }

    render() {
        return(
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>

                <button className="btn btn-success" onClick={() => this.sum(1)}>Incrementar</button>
                <button className="btn btn-danger" onClick={() => this.sum(-1)}>Decrementar</button>
            </div>


        );
    }

}

export default ClassComponentComEstado