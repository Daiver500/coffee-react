import { Component, Fragment } from 'react';
import { NavLink } from "react-router-dom";

class Main extends Component {
    constructor (props) {                            // для передачи props в классовый компонент используется constructor      
        super(props)
    }  
    render () {
        const {img} = this.props
        return(
            <div>
              <h1>Hello world!!!</h1>
              <button> <NavLink to="../Catalog">Press</NavLink></button>
            </div>
        )
    }
}

export default Main