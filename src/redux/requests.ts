import axios from 'axios';

import { AppDispatchType } from './store';
import { loginFailure, loginStart, loginSuccess } from './user';
import { FetchWeather } from './weather';

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

export const callWeatherApi = async ({latitude,longitude,key} : {latitude : number, longitude : number,key?: string}) => {
    if (window.navigator.geolocation) { 
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${key}&lang=ru`);
            const tempature = response.data.main.temp
            const weather = response.data.weather[0].description
            const icon = response.data.weather[0].icon
            return {weather,tempature,icon}
        } catch (err) {
            console.log(err);
            return err
        }
    }
}
export const getLocationAndWeather = async ({key,dispatch} : {key?: string,dispatch: AppDispatchType}) => {
    if (window.navigator.geolocation) { 
        navigator.geolocation.getCurrentPosition(async (position) => { 
            const CurrentPosition = { latitude: position.coords.latitude, longitude: position.coords.longitude }; 
            dispatch(FetchWeather({ ...CurrentPosition, key })) 
        });
    } 
}

