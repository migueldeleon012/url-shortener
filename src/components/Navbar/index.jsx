import { useState } from 'react';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const onBurgerPress = () => setIsNavActive(!isNavActive);

  return (
    <nav className={`navbar ${isNavActive && 'active'}`}>
      <img src={logo} alt="logo" className="logo" />
      <div className="navbar__burger" onClick={onBurgerPress}>
        <div className="burger-line line1"></div>
        <div className="burger-line line2"></div>
        <div className="burger-line line3"></div>
      </div>
      <div className="navbar__content">
        <ul className="items">
          <li className="item">
            <a href="#">Features</a>
          </li>
          <li className="item">
            <a href="#">Pricing</a>
          </li>
          <li className="item">
            <a href="#">Resources</a>
          </li>
        </ul>
        <div className="hr"></div>
        <div className="navbar__login">
          <p className="item">
            <a href="#">Login</a>
          </p>
          <button className="btn-default">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
