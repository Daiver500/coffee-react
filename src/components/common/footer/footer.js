import logo from "../../../resourses/img/footer-logo.svg"
import '../../../styles/style.scss';
import { NavLink } from "react-router-dom";

const FooterNavigation = () => {
    return (
      <nav className="navigation">
        <div className="container navigation__inner">
          <NavLink to="../Main"><img src={logo} alt="логотип"></img></NavLink>
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
    )
  }

  function Footer() {
    return (
      <footer className="footer">
         <FooterNavigation></FooterNavigation>
      </footer>
    );
  }

  export default Footer
