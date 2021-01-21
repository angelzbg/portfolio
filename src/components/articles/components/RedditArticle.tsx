import React, { useEffect, useState } from 'react';
import { ArrowUp, MessageSquare } from 'react-feather';

const redditico = require('../../../images/redditico.png');

export default ({ url }: { url: string }) => {
  const [title, setTitle] = useState('');
  const [sub, setSub] = useState('r/');
  const [author, setAuthor] = useState('author');
  const [date, setDate] = useState('date');
  const [ups, setUps] = useState('?');
  const [comments, setComments] = useState('?');

  useEffect(() => {
    let isMounted = true;
    fetch(`https://cors-anywhere.herokuapp.com/${url}.json?`)
      .then((res) => res.json())
      .then((res) => {
        const { title, subreddit, author, created_utc, ups, num_comments } = res[0].data.children[0].data;

        if (isMounted) {
          setTitle(title);
          setSub(`r/${subreddit}`);
          setAuthor(author);
          setDate(new Date(created_utc * 1000).toISOString().slice(0, 10));
          setUps(ups);
          setComments(num_comments);
        }
      });
    return () => {
      isMounted = false;
    };
  }, [url]);

  return (
    <div className="article">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="article-wrap">
          <div className="title">{title}</div>
          <div className="info-box">
            <img alt="reddit_icon" src={redditico} className="article-icon" />
            <div className="reddit-article-info">
              <span style={{ color: 'var(--lightest)' }}>{sub} </span>
              <span>&bull; {author} </span>
              <span>&bull; {date}</span>
              <br />
              <span>
                <ArrowUp className="reddit-mini-icon" /> {ups}{' '}
              </span>
              <span>
                &bull; <MessageSquare className="reddit-mini-icon" /> {comments}
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
