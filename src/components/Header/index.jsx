import { useState, useEffect } from 'react';
import illustrationWorking from '../../assets/illustration-working.svg';
import TitleWDesc from '../TitleWDesc';

const Header = () => {
  const [alignLeft, setAlignLeft] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setAlignLeft(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <header className="header">
      <div className="illustration-logo">
        <img src={illustrationWorking} alt="illustration working" />
      </div>
      <div className="header__content">
        <TitleWDesc
          title="More than just shorter links"
          subtitle="Build your brand's recognition and get detailed insights on how your links are performing"
          isAlignedLeft={alignLeft}
          isMain
        />
        <button className="btn-default">get started</button>
      </div>
    </header>
  );
};

export default Header;
