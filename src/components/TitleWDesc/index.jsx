import React from 'react';

const TitleWDesc = (props) => {
  return (
    <div className={`title-with-desc ${props.allSmall && 'small'}`}>
      {props.title && <h1>{props.title}</h1>}
      {props.smallTitle && <h2>{props.smallTitle}</h2>}
      {props.subtitle && <p>{props.subtitle}</p>}
    </div>
  );
};

export default TitleWDesc;
