import * as api from '../api';

// Action Creators
export const addEmail = (email) => async (dispatch) => {
    
    try {
        const { data } = await api.addEmail(email);

        dispatch({type: 'ADD_EMAIL', payload: data });        
    } catch (error) {
        console.log(error.message);
    }
}
