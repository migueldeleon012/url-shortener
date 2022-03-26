import React from 'react';

const TitleWDesc = (props) => {
  return (
    <div className={`title-with-desc ${props.small && 'small'}`}>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
      <button className="btn-default">get started</button>
    </div>
  );
};

export default TitleWDesc;
