import TitleWDesc from '../TitleWDesc';
import { footerData, socialMedia } from './data';

const index = () => {
  const renderFooterItems = (item, index) => (
    //no href because it's dummy
    <a key={index}>{item.data}</a>
  );

  const renderFooterData = (item, index) => (
    <div key={index} className="footer__item">
      <h4>{item.title}</h4>
      {item.items.map(renderFooterItems)}
    </div>
  );

  const renderSocialMedia = (item, index) => (
    <a href={item.href} key={index} rel="noreferrer">
      <img src={item.icon} alt={item.media} />
    </a>
  );

  return (
    <footer className="footer">
      <div className="footer__logo">
        <TitleWDesc smallTitle="Shortly" isWhite />
      </div>
      <div className="footer__data">{footerData.map(renderFooterData)}</div>
      <div className="social-medias">{socialMedia.map(renderSocialMedia)}</div>
    </footer>
  );
};

export default index;
