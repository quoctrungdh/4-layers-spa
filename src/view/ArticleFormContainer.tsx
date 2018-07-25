import * as React from 'react';

import { articleStore } from '../store/ArticleStore';
import { articleService } from '../domain/Article/ArticleService';

import ArticleFormComponent from './ArticleFormComponent';

const initialState = {
  title: '',
  author: ''
}

class ArticleFormContainer extends React.Component{
  articleService = articleService;
  articleStore = articleStore;

  state = initialState

  handleSubmit = (e) => {
    e.preventDefault();

    const { title, author } = this.state;

    if (title && author) {
      const newArticle = this.articleService.createArticle({
        title,
        author
      })

      if (newArticle) {
        this.articleStore.addArticle(newArticle)
      }

      this.clearForm()
    }
    // TODO: handle invalid
  }

  clearForm = () => {
    this.setState(() => initialState)
  }

  onChangeArticleTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  onChangeArticleAuthor = (e) => {
    this.setState({
      author: e.target.value
    })
  }

  render() {
    return (
      <ArticleFormComponent
        formData={this.state}
        onSubmit={this.handleSubmit}
        onChangeArticleTitle={this.onChangeArticleTitle}
        onChangeArticleAuthor={this.onChangeArticleAuthor}
      />
    )
  }
}

export default ArticleFormContainer;
