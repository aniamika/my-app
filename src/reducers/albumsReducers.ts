import { ISingleAlbum } from '../entities/albums';
import * as actionTypes from '../actions/actionTypes/albumsTypes';

export interface IAlbumsReducer {
    albumsList: ISingleAlbum[];
};

const defaultState = (): IAlbumsReducer => ({
    albumsList: [],
});

// eslint-disable-next-line import/no-anonymous-default-export
export default ( state = defaultState(), action: any ) => {
    switch (action.type) {
        case actionTypes.GET_ALBUMS: {
            const data: actionTypes.IAlbumTypes['GET_ALBUMS'] = action;
            return {
                ...state,
                albumsList: data.albumsList
            }
        }
        default: {
            return state
        }
    };
};