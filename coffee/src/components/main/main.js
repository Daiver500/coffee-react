import { Component, Fragment } from 'react';
import { NavLink } from "react-router-dom";

class Main extends Component {
  
    constructor(props) {
      super(props);
    }
    render () {
        return(
            <Fragment>
              <h1>Hello world!!!</h1>
              <button> <NavLink to="../footer">Press</NavLink></button>
            </Fragment>
        )
    }
}

export default Main