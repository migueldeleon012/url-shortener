import logo from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="navbar__burger">
        <div className="burger-line line1"></div>
        <div className="burger-line line2"></div>
        <div className="burger-line line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
