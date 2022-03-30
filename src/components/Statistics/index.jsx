import { useState } from 'react';
import axios from 'axios';
import UrlShortener from '../UrlShortener';
import TitleWDesc from '../TitleWDesc';
import StatisticsCard from './StatisticsCard';
import { cardDetails } from './cardDetails';
import UrlCard from './UrlCard';

const Statistics = () => {
  const [urlState, setUrlState] = useState([]);
  const [error, setError] = useState(null);

  const getShortUrl = (url) => {
    if (!url.length) {
      setError('Please add a link.');
      return;
    }
    axios
      .get(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then((res) => {
        if (!res.data.ok) {
          setError('Error, please try again later.');
          return;
        }
        console.log(res);
        setUrlState([
          ...urlState,
          {
            originalLink: url,
            shortLink: res.data.result.short_link,
          },
        ]);
      })
      .catch(() => {
        setError('URL invalid, please re-check entered URL.');
      });
    return;
  };

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

  const renderUrls = (item, index) => (
    <UrlCard
      originalLink={item.originalLink}
      shortLink={item.shortLink}
      key={index}
    />
  );

  return (
    <div className="statistics">
      <UrlShortener getShortUrl={getShortUrl} errorMessage={error} />
      {urlState.length ? (
        <div className="short-urls">{urlState.map(renderUrls)}</div>
      ) : null}
      <div className="statistics__content">
        <div className={`spacer ${!urlState.length ? 'empty' : null}`}>
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
