import { combineReducers } from 'redux';
import albums, { IAlbumsReducer } from './albumsReducers';
import comments, { ICommentsReducer } from './commentsReducers';
import photos, { IPhotosReducer } from './photosReducers';
import posts, { IPostsReducer } from './postsReducers';
import todos, { ITodosReducer } from './todosReducers';
import users, {IUsersReducer } from './usersReducers';

export default combineReducers({
    albums,
    comments,
    photos,
    posts,
    todos,
    users,
})

export interface IState {
    albums: IAlbumsReducer;
    comments: ICommentsReducer;
    photos: IPhotosReducer;
    posts: IPostsReducer;
    todos: ITodosReducer;
    users: IUsersReducer;
}