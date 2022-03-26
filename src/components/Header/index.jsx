import illustrationWorking from '../../assets/illustration-working.svg';
import TitleWDesc from '../TitleWDesc';

const Header = () => {
  return (
    <header className="header">
      <img
        src={illustrationWorking}
        alt="illustration working"
        className="illustration-logo"
      />
      <div className="header__content">
        <TitleWDesc
          title="More than just shorter links"
          subtitle="Build your brand's recognition and get detailed insights on how your links are performing"
        />
        <button className="btn-default">get started</button>
      </div>
    </header>
  );
};

export default Header;
