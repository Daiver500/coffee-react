import { Component } from 'react';
import '../../styles/style.scss';
import Header from '../common/header/navigation';
import Intro from './intro/intro';
import About from './about/about';
import Products from './products/products';
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
