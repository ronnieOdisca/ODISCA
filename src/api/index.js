import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;


export const addEmail = (newEmail) => axios.post(`${SERVER_URL}/progresspage/addEmail`, newEmail);