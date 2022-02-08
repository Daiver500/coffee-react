import { Component, Fragment } from 'react';
import Header from '../common/header/navigation';

class Goods extends Component {
  
    constructor(props) {
      super(props);
    }
    render () {
        return(
            <Fragment>
            <Header></Header>
            <h1>Goods</h1>
            </Fragment>
        )
    }
}

export default Goods