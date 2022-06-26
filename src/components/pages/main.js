import { Component } from 'react';
import '../../styles/style.scss';
import Header from '../common/header/header';
import Intro from '../blocks/intro/intro';
import About from '../blocks/about/about';
import Products from '../blocks/products/products';
import Footer from '../common/footer/footer';

class Main extends Component {
    constructor (props) {                            // для передачи props в классовый компонент используется constructor
        super(props)
    }
    render () {
        return(
            <div className="page">
              <Header></Header>
              <main>
                  <Intro></Intro>
                  <About></About>
                  <Products></Products>
               </main>
              <Footer></Footer>
            </div>
        )
    }
}

export default Main
