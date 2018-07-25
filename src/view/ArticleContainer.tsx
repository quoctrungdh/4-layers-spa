import * as React from 'react';

import { articleService } from '../domain/Article/ArticleService';
import { articleStore } from '../store/ArticleStore';

import ArticleComponent from './ArticleComponent';

class ArticleContainer extends React.Component {
  articleService = articleService
  articleStore = articleStore


  likeArticle = (article) => {
    const updatedArticle = this.articleService.updateLikes(article, article.likes + 1);
    this.articleStore.updateArticle(updatedArticle)
  }

  removeArticle = (article) => {
    this.articleStore.removeArticle(article)
  }

  render() {
    return (
      <ArticleComponent
        article={this.props.article}
        likeArticle={this.likeArticle}
        removeArticle={this.removeArticle}
      />
    )
  }
}

export default ArticleContainer;