import { Component, Fragment } from 'react';
import '../../styles/style.scss';
import Header from '../common/header/header';
import Footer from '../common/footer/footer';

class Catalog extends Component {

    constructor(props) {
      super(props);
    }
    render () {
        return(
          <div className="page">
            <Fragment>
            <Header></Header>
            <main>
              <h1>Catalog</h1>
            </main>
            <Footer></Footer>
            </Fragment>
            </div>
        )
    }
}

export default Catalog
