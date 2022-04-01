import React from 'react';
import { useState } from 'react';

const UrlCard = (props) => {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    setCopied(true);
    navigator.clipboard.writeText(props.originalLink);
  };

  return (
    <div className="url-card">
      <p className="link">{props.originalLink}</p>
      <div className="card-line"></div>
      <p className="link cyan">{props.shortLink}</p>
      <div
        className={`btn-secondary ${copied && 'background-dark'}`}
        onClick={copyLink}
      >
        {copied ? 'Copied' : 'Copy'}
      </div>
    </div>
  );
};

export default UrlCard;
