import * as React from 'react';

function ArticleFormComponent(props) {
  const {
    formData,
    onChangeArticleTitle,
    onChangeArticleAuthor,
    onSubmit
  } = props;

  const { title, author } = formData

  return (
    <form className="block" onSubmit={onSubmit}>
      <div className="field">
        <label className="label" htmlFor="article-title">Title</label>
        <div className="control">
          <input
            id="article-title"
            className="input"
            type="text"
            value={title}
            onChange={onChangeArticleTitle}
          />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="article-author">Author</label>
        <div className="control">
          <input
            id="article-author"
            className="input"
            value={author}
            type="text"
            onChange={onChangeArticleAuthor}
          />
        </div>
      </div>
      <div className="control has-text-centered">
        <button className="button is-primary">Submit</button>
      </div>
    </form>
  )
}

export default ArticleFormComponent;
