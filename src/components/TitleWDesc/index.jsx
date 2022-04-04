import React from 'react';

const TitleWDesc = (props) => {
  return (
    <div className={`title-with-desc ${props.allSmall && 'small'}`}>
      {props.isMain && props.title && (
        <h1
          className={`${props.isWhite && 'white'} ${
            props.isAlignedLeft ? 'align-left' : ''
          }`}
        >
          {props.title}
        </h1>
      )}
      {props.title && !props.isMain && (
        <h2
          className={`${props.isWhite && 'white'} ${
            props.isAlignedLeft ? 'align-left' : ''
          }`}
        >
          {props.title}
        </h2>
      )}
      {props.smallTitle && (
        <h3
          className={`${props.isWhite && 'white'} ${
            props.isAlignedLeft ? 'align-left' : ''
          }`}
        >
          {props.smallTitle}
        </h3>
      )}
      {props.subtitle && (
        <p
          className={`${props.isWhite && 'white'} ${
            props.isAlignedLeft ? 'align-left' : ''
          }`}
        >
          {props.subtitle}
        </p>
      )}
    </div>
  );
};

export default TitleWDesc;
