import { Dispatch } from 'redux';
import * as actionTypes from '../actions/actionTypes/todosTypes';
import { ISingleTodo } from '../entities/todos';

export const getTodos = (): Promise<ISingleTodo[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then((todosList: ISingleTodo[]) => {
        dispatch({
            type: actionTypes.GET_TODOS,
            todosList
        })
    })
}) as any;