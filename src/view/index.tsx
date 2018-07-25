import * as React from 'react'
import ReactDOM from 'react-dom';

import ArticleFormContainer from './ArticleFormContainer';
import ArticleListContainer from './ArticleListContainer';

function App() {
  return (
    <div className="container">
      <ArticleFormContainer />
      <ArticleListContainer />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)