import { Component, Fragment } from 'react';
import Header from '../common/header/header';
import Footer from '../common/footer/footer';
import '../../styles/style.scss';

class Goods extends Component {

    constructor(props) {
      super(props);
    }
    render () {
      return(
        <div className="page">
          <Fragment>
          <Header></Header>
          <main>
            <h1>Products</h1>
          </main>
          <Footer></Footer>
          </Fragment>
          </div>
      )
    }
}

export default Goods
