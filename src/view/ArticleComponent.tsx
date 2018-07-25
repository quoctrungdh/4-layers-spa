import * as React from 'react';

import { displayAuthor } from '../services/ArticleUIService';

function ArticleComponent(props) {
  const { article, likeArticle, removeArticle } = props;
  const { title, author } = article;

  return (
    <div className="block card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">@{displayAuthor(author)}</p>
          </div>
        </div>     
      </div>
      <footer className="card-footer">
        <a
          onClick={(e) => {
            e.preventDefault();
            likeArticle(article)
          }}
          href="#"
          className="card-footer-item"
        >
          {article.likes} { article.likes ? 'Likes' : 'Like' }
        </a>
        <a
          href="#"
          className="card-footer-item"
          onClick={(e) => {
            e.preventDefault();
            removeArticle(article)
          }}
        >
            Remove
          </a>
      </footer>
    </div>
  )
}

export default ArticleComponent;