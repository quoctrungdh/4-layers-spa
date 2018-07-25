import * as React from 'react';

import ArticleListComponent from './ArticleListComponent';
import { articleStore } from '../store/ArticleStore';

class ArticleListContainer extends React.Component {
  subscriber: Function
  articleStore = articleStore

  state = {
    articles: []
  }

  componentDidMount() {
    this.subscriber = this.articleStore.subscribe((articles) => {
      this.setState({ articles });
    })
  }

  componentWillUnmount() {
    this.articleStore.unsubscribe(this.subscriber)
  }

  render() {
    return (
      <ArticleListComponent {...this.state} />
    )
  }
}

export default ArticleListContainer;