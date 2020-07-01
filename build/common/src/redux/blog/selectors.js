import { Map as map } from 'immutable'

export const posts = state => state.get('posts')

export const firstInLastPosts = state => posts(state).get('lastArticles').first() || map()

export const lastArticles = state => posts(state).get('lastArticles').remove(0) || map()

export const diyArticle = state => posts(state).get('diyArticle') || map()

export const howToArticles = state => posts(state).get('howToArticles') || map()

export const responsibilityArticle = state => posts(state).get('responsibilityArticle') || map()
