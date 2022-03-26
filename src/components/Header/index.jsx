import illustrationWorking from '../../assets/illustration-working.svg';
import TitleWDesc from '../TitleWDesc';

const Header = () => {
  return (
    <div className="header">
      <img
        src={illustrationWorking}
        alt="illustration working"
        className="illustration-logo"
      />
      <TitleWDesc
        title="More than just shorter links"
        subtitle="Build your brand's recognition and get detailed insights on how your links are performing"
      />
    </div>
  );
};

export default Header;
