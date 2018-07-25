import { update } from 'ramda';
import { Article } from '../domain/Article/Article';

type ArticleState = ReadonlyArray<Article>

interface ArticleStore {
  addArticle,
  removeArticle,
  updateArticle,
  subscribe,
  unsubscribe
}

function addArticle(articleState: ArticleState, article: Article) {
  return articleState.concat(article)
}

function removeArticle(articleState: ArticleState, article: Article) {
  return articleState.filter(a => a.id !== article.id);
}

function updateArticle(articleState: ArticleState, article: Article) {
  const index = articleState.findIndex(a => a.id === article.id);

  return update(index, article, articleState)
}

function subscribe(subscribers: ReadonlyArray<Function>, subscriber: Function) {
  return subscribers.concat(subscriber)
}

function notify(articleState: ArticleState, subscribers: ReadonlyArray<Function>) {
  subscribers.forEach((s: Function) => s(articleState))
}

function unsubscribe(subscribers: ReadonlyArray<Function>, subscriber: Function) {
  return subscribers.filter(s => s !== subscriber)
}

function ArticleStoreFactory() {
  let articleState = Object.freeze([]);
  let subscribers = Object.freeze([]);

  return {
    addArticle: (article: Article) => {
      articleState = addArticle(articleState, article);
      notify(articleState, subscribers)
    },
    removeArticle: (article: Article) => {
      articleState = removeArticle(articleState, article)
      notify(articleState, subscribers)
    },
    updateArticle: (article: Article) => {
      articleState = updateArticle(articleState, article)
      notify(articleState, subscribers)
    },
    subscribe: (subscriber: Function) => {
      subscribers = subscribe(subscribers, subscriber);
      return subscribe;
    },
    unsubscribe: (subscriber: Function) => {
      subscribers = unsubscribe(subscribers, subscriber) 
    }
  }
}

export const articleStore = ArticleStoreFactory();