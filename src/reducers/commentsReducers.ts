import * as actionTypes from '../actions/actionTypes/commentsTypes';
import { ISingleComment } from '../entities/comments';

export interface ICommentsReducer {
    commentsList: ISingleComment[];
};

const defaultState = (): ICommentsReducer => ({
    commentsList: [],
});


export default ( state = defaultState(), action: any ) => {
    switch (action.type) {
        case actionTypes.GET_COMMENTS: {
            const data: actionTypes.ICommentsTypes['GET_COMMENTS'] = action;
            return {
                ...state,
                commentsList: data.commentsList
            }
        }
        default: {
            return state;
        }
    };
};