import logo from "../../../resourses/img/logo.svg"
import { NavLink } from "react-router-dom";
import "./navigation.scss"

const Navigation = () => {             
    return (    
      <header className="header">                                     
      <nav className="navigation">
        <div className="container navigation__inner">
          <a className="navigation__link" href="#" aria-label="logo"><img className="navigation__image" src={logo} width="50" height="50"></img></a>
          <ul className="navigation__list">
            <li className="navigation__item">
              <button><NavLink to="../Main">Coffee house</NavLink></button>
            </li>
            <li className="navigation__item">
              <button><NavLink to="../Catalog">Our coffee</NavLink></button>
            </li>
            <li className="navigation__item">
              <button><NavLink to="../Goods">For your pleasure</NavLink></button>
            </li>
          </ul>
        </div>
      </nav>
      </header>
    )
  }

  function Header() {
    return (                                                                                                          
      <Navigation></Navigation> 
    );
  }

    
export default Header;