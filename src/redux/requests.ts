import axios from 'axios';

import { AppDispatchType } from './store';
import { loginFailure, loginStart, loginSuccess } from './user';

export const loginRequest = ({dispatch,Username, Password} : ({dispatch : AppDispatchType , Username: string, Password: string})) => {
    dispatch(loginStart())
    if(Username === "Admin" && Password === "12345") {
        dispatch(loginSuccess(Username))
    } else {
        dispatch(loginFailure())
    }
}

export const getAllNews = async (category: string, key? : string) => {
    try {
        const response = await axios.get(`https://api.newscatcherapi.com/v2/latest_headlines?countries=RU&topic=${category}&page_size=10`, {headers: {'x-api-key': `${key}`}})
        return response
    } catch(err) {
        return err
    }
}