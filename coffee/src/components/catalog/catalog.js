import { Component, Fragment } from 'react';
import Header from '../common/header/navigation';

class Catalog extends Component {
  
    constructor(props) {
      super(props);
    }
    render () {
        return(
            <Fragment>
            <Header></Header>
            <h1>Catalog</h1>
            </Fragment>
        )
    }
}

export default Catalog