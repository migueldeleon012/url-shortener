import UrlShortener from '../UrlShortener';
import TitleWDesc from '../TitleWDesc';

const Statistics = () => {
  return (
    <div className="statistics">
      <UrlShortener />
      <div className="statistics__content">
        <div className="spacer"></div>
        <TitleWDesc
          smallTitle="Advanced Statistics"
          subtitle="Track how your links are performing across the web with our advanced statistics dashboard"
        />
      </div>
    </div>
  );
};

export default Statistics;
