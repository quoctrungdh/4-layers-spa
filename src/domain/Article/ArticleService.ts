// import v1 from 'uuid';
const v1 = require('uuid');
// import { Article } from './Article';

interface Article {
  id: string,
  likes: number,
  title: string,
  author: string
}

interface ArticleFields {
  title: string,
  author: string
}

export interface ArticleService {
  createArticle,
  updateLikes,
  isTitleValid,
  isAuthorValid
}

function createArticle(articleFields: ArticleFields): Article {
  const { title, author } = articleFields;
  if (title && author) {
    return Object.freeze({
      id: v1(),
      likes: 0,
      title,
      author
    })
  }

  return null
}


function updateLikes(article: Article, likes: number): Article {
  if (article) {
    return Object.freeze({
      ...article,
      likes
    })
  }

  return article
}

function isAuthorValid() {

}

function isTitleValid() {

}

function ArticleServiceFactory() {
  return {
    createArticle,
    updateLikes,
    isAuthorValid,
    isTitleValid
  }
}

export const articleService = ArticleServiceFactory();

const article = articleService.createArticle({
  title: '12 rules',
  author: 'Jordan'
})

article

const incrementedArticle = articleService.updateLikes(article, 4)

incrementedArticle