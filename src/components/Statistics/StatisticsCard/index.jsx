import TitleWDesc from '../../TitleWDesc';

const StatisticsCard = (props) => {
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
          />
        )}
      </div>
    </div>
  );
};

export default StatisticsCard;
