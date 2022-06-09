import { createAsyncThunk } from '@reduxjs/toolkit';
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

interface Data {
    title: string,
    summary: string,
    media: string,
    rights: string,
    published_date: string,
    link: string,
}

export const fetchAllNews = createAsyncThunk<
Array<Data>,
{category: string, key: string}
>(
    'user/fetchAllNews',
    async ({category,key} : {category: string, key: string}, thunkAPI) => {
      const response = await axios.get(`https://api.newscatcherapi.com/v2/latest_headlines?countries=RU&topic=${category}&page_size=10`, {headers: {'x-api-key': `${key}`}})
      return response.data.articles
    }
  )