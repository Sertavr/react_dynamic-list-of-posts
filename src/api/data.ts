import {
  URL_COMENTS,
  URL_SELECTED_POST_COMENTS,
  URL_SELECTED_USER_POSTS,
  URL_USERS,
} from '../constants/constants';
import { Comment, CommentData } from '../types/Comment';
import { Post } from '../types/Post';
import { User } from '../types/User';
import { client } from '../utils/fetchClient';

export const getUsers = (): Promise<User[]> => client.get(URL_USERS);

export const getPosts = (id: number): Promise<Post[]> =>
  client.get(`${URL_SELECTED_USER_POSTS}${id}`);

export const getSelectedPostComents = (id: number): Promise<Comment[]> =>
  client.get(`${URL_SELECTED_POST_COMENTS}${id}`);

export const postComment = (comment: CommentData): Promise<Comment> =>
  client.post(URL_COMENTS, comment);

export const deleteComent = (id: number) =>
  client.delete(`${URL_COMENTS}\\${id}`);
