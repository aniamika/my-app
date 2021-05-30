import { ISinglePhoto } from '../entities/photos';
import * as actionTypes from '../actions/actionTypes/photosTypes';

export interface IPhotosReducer {
    photosList: ISinglePhoto[];
};

const defaultState = (): IPhotosReducer => ({
    photosList: [],
});


export default ( state = defaultState(), action: any ) => {
    switch (action.type) {
        case actionTypes.GET_PHOTOS: {
            const data: actionTypes.IPhotoTypes['GET_PHOTOS'] = action;
            return {
                ...state,
                photosList: data.photosList
            }
        }
        default: {
            return state;
        }
    };
};