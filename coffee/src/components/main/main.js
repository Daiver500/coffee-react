import { Component, Fragment } from 'react';
import { NavLink } from "react-router-dom";

class Main extends Component {
  
    
    render () {
        return(
            <Fragment>
              <h1>Hello world!!!</h1>
              <button> <NavLink to="../Catalog">Press</NavLink></button>
            </Fragment>
        )
    }
}

export default Main