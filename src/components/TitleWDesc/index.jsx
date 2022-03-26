import React from 'react';

const TitleWDesc = (props) => {
  return (
    <div className={`title-with-desc ${props.allSmall && 'small'}`}>
      {props.title && (
        <h1 className={props.isWhite && 'white'}>{props.title}</h1>
      )}
      {props.smallTitle && (
        <h2 className={props.isWhite && 'white'}>{props.smallTitle}</h2>
      )}
      {props.subtitle && (
        <p className={props.isWhite && 'white'}>{props.subtitle}</p>
      )}
    </div>
  );
};

export default TitleWDesc;
