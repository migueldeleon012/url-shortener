import { useEffect, useState } from 'react';
import TitleWDesc from '../../TitleWDesc';

const StatisticsCard = (props) => {
  const [alignLeft, setAlignLeft] = useState(window.outerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setAlignLeft(window.outerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div className="statistics__card">
      <div className="icon-container">
        {props.icon && (
          <img
            src={props.icon}
            alt={props.title}
            className="icon-container__img"
          />
        )}
      </div>
      <div className="card-content">
        {props.title && props.subtitle && (
          <TitleWDesc
            title={props.title}
            subtitle={props.subtitle}
            allSmall={true}
            isAlignedLeft={alignLeft}
          />
        )}
      </div>
    </div>
  );
};

export default StatisticsCard;
