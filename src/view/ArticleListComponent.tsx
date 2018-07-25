import * as React from 'react';

import ArticleContainer from './ArticleContainer';

function ArticleListComponent(props) {
  const { articles } = props;
  return articles.map((article) => <ArticleContainer 
    key={article.id} 
    article={article}
  />)
}

export default ArticleListComponent;
