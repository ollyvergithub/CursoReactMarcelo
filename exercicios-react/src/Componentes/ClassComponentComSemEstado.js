import React, {Component} from 'react';

class ClassComponentComSemEstado extends Component{
    constructor(props){
        super(props);

        this.state = {valor: this.props.initialValue}
    }

    handleChange(evento){
        this.setState({valor: evento.target.value})
    }

    render() {

        return(
            <div>
                <br/>
                <div className="form-group">
                    <label><strong>{this.state.valor}</strong></label>
                    <input className="form-control" type="text" onChange={this.handleChange.bind(this)} placeholder={this.state.valor}/>
                </div>
            </div>

        );
    }
}

export default ClassComponentComSemEstado;