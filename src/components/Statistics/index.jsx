import UrlShortener from '../UrlShortener';
import TitleWDesc from '../TitleWDesc';
import StatisticsCard from './StatisticsCard';
import { cardDetails } from './cardDetails';

const Statistics = () => {
  const renderCards = (item, index) => (
    <>
      {index !== 0 && <div className="greenline"></div>}
      <StatisticsCard
        title={item.title}
        subtitle={item.subtitle}
        icon={item.icon}
        key={index}
      />
    </>
  );

  return (
    <div className="statistics">
      <UrlShortener />
      <div className="statistics__content">
        <div className="spacer">
          <TitleWDesc
            smallTitle="Advanced Statistics"
            subtitle="Track how your links are performing across the web with our advanced statistics dashboard"
          />
        </div>
        <div className="cards-container">{cardDetails.map(renderCards)}</div>
      </div>
    </div>
  );
};

export default Statistics;
