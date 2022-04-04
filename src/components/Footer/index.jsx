import TitleWDesc from '../TitleWDesc';
import { footerData, socialMedia } from './data';

const index = () => {
  const renderFooterItems = (item, index) => (
    //no href because it's dummy
    <a href="#footer" key={index}>
      {item.data}
    </a>
  );

  const renderFooterData = (item, index) => (
    <div key={index} className="footer__item">
      <h3>{item.title}</h3>
      {item.items.map(renderFooterItems)}
    </div>
  );

  const renderSocialMedia = (item, index) => (
    <a href={item.href} key={index} rel="noreferrer">
      <img src={item.icon} alt={item.media} />
    </a>
  );

  return (
    <footer className="footer" id="footer">
      <div className="footer__content">
        <div className="footer__logo">
          <TitleWDesc smallTitle="Shortly" isWhite />
        </div>
        <div className="footer__data">{footerData.map(renderFooterData)}</div>
        <div className="social-medias">
          {socialMedia.map(renderSocialMedia)}
        </div>
      </div>
    </footer>
  );
};

export default index;
