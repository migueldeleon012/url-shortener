import axios from 'axios';

export let urls = [];

export const getShortUrl = (url) => {
  if (url.length) {
    axios
      .get(`https://api.shrtco.de/v2/shorten?url=twitter.com`)
      .then((res) => {
        if (res.data.ok) {
          urls = [
            ...urls,
            {
              originalLink: url,
              shortLink: res.data.result.short_link,
            },
          ];
          console.log('success');
        }
      });
  }

  return urls;
};
