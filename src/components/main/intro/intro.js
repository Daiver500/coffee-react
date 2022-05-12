import { Component } from 'react';
import '../../../styles/style.scss';
import about from "../../../resourses/img/about-bg.jpg"

class Intro extends Component {


    render () {
        return(
            <section className="intro">
              <img className="intro__image" src={about}></img>
              <div className="container">
                <div className="intro__inner">
                  <h1 className="intro__title">About</h1>
                </div>

              </div>
            </section>
        )
    }
}

export default Intro
