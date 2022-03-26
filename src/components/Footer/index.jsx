import TitleWDesc from '../TitleWDesc';
import { footerData, socialMedia } from './data';

const index = () => {
  const renderFooterItems = (item, index) => (
    <a href={item.href} key={index}>
      {item.data}
    </a>
  );

  const renderFooterData = (item, index) => (
    <div key={index} className="footer__item">
      <h4>{item.title}</h4>
      {item.items.map(renderFooterItems)}
    </div>
  );

  const renderSocialMedia = (item, index) => (
    <a href={item.href} key={index}>
      <img src={item.icon} alt={item.media} />
    </a>
  );

  return (
    <footer className="footer">
      <TitleWDesc smallTitle="Shortly" isWhite />
      {footerData.map(renderFooterData)}
      <div className="social-medias">{socialMedia.map(renderSocialMedia)}</div>
    </footer>
  );
};

export default index;
