import React from 'react';
import './styles/articles.css';
import RedditArticle from './components/RedditArticle';

const Articles = ({ isOpen }: { isOpen: boolean }) => (
  <div className="dropdown-menu-wrapper articles-dropdown-wrapper" style={{ display: isOpen ? 'block' : 'none' }}>
    <div className="dropdown-menu-wrap articles-dropdown-menu-wrap">
      <div className="articles scrollbar">
        <RedditArticle url="https://www.reddit.com/r/reactjs/comments/jl1ajl/theming_in_react_with_variables_with_default_dark" />
      </div>
    </div>
  </div>
);

export default Articles;
