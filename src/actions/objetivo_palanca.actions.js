import {
    ADD_OBJETIVO_PALANCA_ERROR,
    ADD_OBJETIVO_PALANCA_LOADING,
    ADD_OBJETIVO_PALANCA_SUCCESS,
    EDIT_OBJETIVO_PALANCA_ERROR,
    EDIT_OBJETIVO_PALANCA_LOADING,
    EDIT_OBJETIVO_PALANCA_SUCCESS,
    DELETE_OBJETIVO_PALANCA_ERROR,
    DELETE_OBJETIVO_PALANCA_LOADING,
    DELETE_OBJETIVO_PALANCA_SUCCESS,
    FETCH_OBJETIVO_PALANCA_ERROR,
    FETCH_OBJETIVO_PALANCA_LOADING,
    FETCH_OBJETIVO_PALANCA_SUCCESS
} from './types.js';
import datos  from '../data';


export const fetchObjetivoPalancaSuccess = (data) => {
    return {
        type: FETCH_OBJETIVO_PALANCA_SUCCESS,
        payload: data,
    }
}

export const fetchBooks = () => {
    return (dispatch) => {
        dispatch(fetchObjetivoPalancaSuccess(datos));
    }
}

export default fetchObjetivoPalancaSuccess;