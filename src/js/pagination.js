// https://jsonplaceholder.typicode.com/

import { getPosts } from './api/jsonPlaceholder';
import { createPostCard } from './template/postCard';

const postsListEl = document.querySelector('.js-posts');
const loadMoreBtnEl = document.querySelector('.js-load-more');
