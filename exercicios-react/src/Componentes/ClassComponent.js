import React, {Component} from 'react';

export default class ClassComponent extends Component{
    render() {
        return(
          <div>
              <h1>Propriedade passada por parâmetro do App.js para a ClassComponent e usada com this.props</h1>
              <h4>Esta é a propriedade passada por parâmetro: {this.props.valor}</h4>
          </div>
        );
    }
}