import { ISingleTodo } from '../entities/todos';
import * as actionTypes from '../actions/actionTypes/todosTypes';

export interface ITodosReducer {
    todosList: ISingleTodo[];
};

const defaultState = (): ITodosReducer => ({
    todosList: [],
});

// eslint-disable-next-line import/no-anonymous-default-export
export default ( state = defaultState(), action: any ) => {
    switch (action.type) {
        case actionTypes.GET_TODOS: {
            const data: actionTypes.ITodoTypes['GET_TODOS'] = action;
            return {
                ...state,
                todosList: data.todosList
            }
        }
        default: {
            return state
        }
    };
};