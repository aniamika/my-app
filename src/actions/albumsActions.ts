import { Dispatch } from 'redux';
import * as actionTypes from '../actions/actionTypes/albumsTypes';
import { ISingleAlbum } from '../entities/albums';

export const getAlbums = (): Promise<ISingleAlbum[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then((albumsList: ISingleAlbum[]) => {
        dispatch({
            type: actionTypes.GET_ALBUMS,
            albumsList
        })
    })
}) as any;