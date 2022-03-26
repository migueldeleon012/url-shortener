import logo from '../../assets/logo.svg';
import './styles.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="navbar__burger">
        <div className="burger-line line1"></div>
        <div className="burger-line line2"></div>
        <div className="burger-line line3"></div>
      </div>
    </div>
  );
};

export default Navbar;
