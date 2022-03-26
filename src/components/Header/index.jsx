import illustrationWorking from '../../assets/illustration-working.svg';

const Header = () => {
  return (
    <div className="header">
      <img
        src={illustrationWorking}
        alt="illustration working"
        className="illustration-logo"
      />
      <div className="header__content">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <button className="btn-default">get started</button>
      </div>
    </div>
  );
};

export default Header;
