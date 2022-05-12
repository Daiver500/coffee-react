import logo from "../../../resourses/img/logo.svg"
import { NavLink } from "react-router-dom";
import '../../../styles/style.scss';

const Navigation = () => {
    return (
      <header className="header">
      <nav className="navigation">
        <div className="container container--header">
          <div className="navigation__inner">
          <NavLink to="../Main"><img src={logo} alt="логотип"></img></NavLink>
          <ul className="navigation__list">
            <li className="navigation__item">
              <NavLink to="../Main">Coffee house</NavLink>
            </li>
            <li className="navigation__item">
             <NavLink to="../Catalog">Our coffee</NavLink>
            </li>
            <li className="navigation__item">
             <NavLink to="../Goods">For your pleasure</NavLink>
            </li>
          </ul>
          </div>
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
