import { useState } from 'react';

const UrlShortener = (props) => {
  const [inputValue, setInputValue] = useState('');

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="url-shortener">
      <input
        type="text"
        placeholder="Shorten a link here..."
        className={props.errorMessage ? 'error-input' : null}
        onChange={changeInputValue}
      />
      {props.errorMessage && (
        <p className="error-message">{props.errorMessage}</p>
      )}
      <button
        className="btn-secondary"
        type="submit"
        onClick={() => props.getShortUrl(inputValue)}
      >
        Shorten It!
      </button>
    </div>
  );
};

export default UrlShortener;
