import { combineReducers } from 'redux';
import photos, { IPhotosReducer } from './photosReducers';
import users, {IUsersReducer } from './usersReducers';

export default combineReducers({
    users,
    photos,
})

export interface IState {
    users: IUsersReducer;
    photos: IPhotosReducer;
}